# WH Deck｜萬海 GAM 筆試與面試準備

為萬海航運 Global Account Manager 招募流程製作的個人備考網站。首頁以 2026 年 7 月 17 日實體筆試為主軸，整合萬海公司資訊、國貿基礎、航運基礎、計時題庫、英文檢核、新聞雷達，以及考前 30 分鐘複習模式。

公開網站：https://anthonytwn.github.io/wanhai-gam-prep/

## 主要內容

- 實體筆試倒數、今日複習路線與官方提醒清單
- 國貿基礎：16 個核心概念、8 階段流程 Timeline、10 種 Incoterms 與付款通關
- 航運基礎：利害關係人、網路、設備、運價、異常、法遵與全球十大航商
- 50 題全新適職測驗：數列、比例、速率、條件邏輯、圖形與空間推理
- 50 題專業科目：角色網路、流程文件、Incoterms、營運術語、萬海產業與法遵
- 30 題英文檢核與 70 個航運商務詞彙，包含長篇與多文件閱讀
- 練習／模擬考雙模式、完成後結算、錯因標籤、弱點儀表板與教材捷徑
- 三個複雜 GAM 業務情境：兩題中文、一題英文
- 每日精選全球航運、港口、跨境物流與國際交通新聞
- 2021–2026 國際航運重大事件 Timeline
- 考前 30 分鐘模式：關鍵字、易混淆概念、公司重點、公式與應試提醒

作答、錯題原因、術語熟悉度與清單狀態會儲存在瀏覽器的 `localStorage`，不會上傳個人資料。

## 專案結構

```text
app/
  page.tsx           主網站、頁面區塊、新聞與互動邏輯
  quiz-data.ts       適職、專業與英文題庫
  content-data.ts    國貿、航運、萬海、情境、詞彙與五年事件資料
  globals.css        全站版面與響應式樣式
  layout.tsx         網站 metadata 與共用版型
github-pages/
  index.html         GitHub Pages 建置入口
  main.tsx           React 啟動檔
  vite.config.ts     靜態網站建置設定
docs/                GitHub Pages 發布產物
public/              公開靜態檔案
tests/               內容與題庫完整性檢查
```

## 本機執行與驗證

需要 Node.js 22.13 以上版本。

```bash
npm install
npm run dev
npm test
npm run build
npm run build:pages
```

`npm run build` 驗證 Sites／vinext 版本，`npm run build:pages` 產生公開網站至 `docs/`。Repository 保留完整原始碼與部署產物，GitHub Pages 由 `main` branch 的 `/docs` 提供服務。
