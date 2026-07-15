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

test("server-renders the written-test dashboard", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /WH Deck｜萬海 GAM 筆試與面試準備/);
  assert.match(html, /距離 7 \/ 17 實體筆試/);
  assert.match(html, /適職衝刺/);
  assert.match(html, /專業題庫/);
  assert.match(html, /English Check/);
  assert.match(html, /官方通知確認/);
});

test("ships complete quiz data and GitHub Pages source adapter", async () => {
  const [quizData, page, css, pagesEntry] = await Promise.all([
    readFile(new URL("../app/quiz-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../github-pages/main.tsx", import.meta.url), "utf8"),
  ]);
  assert.equal((quizData.match(/q\("a\d{2}"/g) ?? []).length, 25);
  assert.equal((quizData.match(/q\("p\d{2}"/g) ?? []).length, 30);
  assert.equal((quizData.match(/q\("e\d{2}"/g) ?? []).length, 20);
  assert.match(quizData, /圖形空間推理/);
  assert.match(quizData, /Shipping Notice/);
  assert.equal((quizData.match(/"Listening Scenario"/g) ?? []).length, 5);
  assert.match(page, /wanhai-official-checklist/);
  assert.match(page, /wanhai-term-familiarity/);
  assert.match(page, /重做錯題/);
  assert.match(css, /quiz-deck/);
  assert.match(pagesEntry, /import Home from "\.\.\/app\/page"/);
});
