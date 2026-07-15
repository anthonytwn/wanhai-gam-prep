import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the expanded written-test dashboard", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /WH Deck｜萬海 GAM 筆試與面試準備/);
  assert.match(html, /距離 7 \/ 17 實體筆試/);
  assert.match(html, /國貿基礎/);
  assert.match(html, /航運基礎/);
  assert.match(html, /適職衝刺/);
  assert.match(html, /專業題庫/);
  assert.match(html, /English Check/);
  assert.match(html, /官方通知確認/);
});

test("ships complete content, question banks and GitHub Pages adapter", async () => {
  const [quizData, contentData, page, css, pagesEntry] = await Promise.all([
    readFile(new URL("../app/quiz-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/content-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../github-pages/main.tsx", import.meta.url), "utf8"),
  ]);
  assert.equal((quizData.match(/q\("a2-\d{2}"/g) ?? []).length, 50);
  assert.equal((quizData.match(/q\("p2-\d{2}"/g) ?? []).length, 50);
  assert.equal((quizData.match(/q\("e2-\d{2}"/g) ?? []).length, 30);
  assert.match(quizData, /圖形空間/);
  assert.match(quizData, /Long Reading/);
  assert.match(contentData, /New Super 5/);
  assert.match(contentData, /Ever Given/);
  assert.equal((contentData.match(/\["actual time of arrival \(ATA\)"/g) ?? []).length, 1);
  assert.match(page, /wanhai-official-checklist/);
  assert.match(page, /WEAKNESS DASHBOARD/);
  assert.match(page, /模擬考模式/);
  assert.match(page, /近五年國際航運大事/);
  assert.match(page, /重做錯題/);
  assert.match(css, /quiz-results/);
  assert.match(pagesEntry, /import Home from "\.\.\/app\/page"/);
});
