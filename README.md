# 多益衝分站 TOEIC Sprint

給台灣考生的多益練習網站：程度前測、每日題組練習、考試模式模考、錯題本、拼字練習，所有題目都附中文翻譯與詳解。可以加到手機主畫面、離線使用，並用同步碼在手機和電腦之間同步進度。

## 功能

- **題庫 540 多題，全部原創**：Part 2 應答、Part 3 簡短對話、Part 4 簡短獨白、Part 5 句子填空、Part 6 段落填空、Part 7 閱讀理解（含雙篇、三篇題組與句子插入題）。其中 98 題標為「進階」，難度較接近正式考試。
- **中文詳解**：全文翻譯、選項分析、答題線索標示、重點單字。
- **今日練習**：依每日題數一次出完，照正式考試順序排列，依弱點加權並混入到期錯題。
- **模考與前測**：考試模式下聽力每段只播一次、不能看原文。
- **推估分數**：以使用者輸入的官方成績為基準，依第一次作答正確率的變化推估，並顯示範圍。
- **錯題本**：間隔複習、錯因標記與分布統計。
- **單字**：107 個高頻單字，拼字練習（看中文句意填入單字，會分辨近義字、詞形和拼錯）與翻卡複習。
- **聽力音檔**：Part 2、3、4 與單字例句都有預先產生的 AI 語音，問句和回應由不同的人以美式、英式口音朗讀。
- **跨裝置同步**：Netlify Function 搭配 Netlify Blobs，以同步碼存取進度，兩台裝置的紀錄會合併。

## 專案結構

```
toeic/                 原始碼
  index.html           主程式（介面、出題、計分、同步）
  bank.js bank2.js     Part 2、5、6、7 題庫
  bank3.js             進階題庫
  listen.js            Part 3、4 題庫
  zh.js vocab2.js      中文翻譯、拼字練習資料
  audio/               聽力與單字音檔，audio/index.js 是各片段的時間
  icons/               App 圖示
  netlify/functions/   同步用的 Netlify Function
  build-site.js        產生網站版到 toeic-site/
  README-site.md       網站版說明（會複製成 toeic-site/README.md）
toeic-site/            網站版部署設定（public/ 由 build-site.js 產生，不放進版本控制）
```

## 建置與部署

需要 Node.js。

```bash
node toeic/build-site.js
```

這會產生 `toeic-site/public/`。接著在 `toeic-site` 資料夾執行 `deploy.cmd`（Windows），或：

```bash
cd toeic-site
npm install
npx netlify-cli deploy --prod
```

第一次部署會要求登入 Netlify 並選擇要連結的網站。

## 說明

- 題目、翻譯與解析都是原創內容，不是官方試題。推估分數只是參考，與官方成績可能有落差。
- 音檔用 [Kokoro](https://github.com/thewh1teagle/kokoro-onnx)（kokoro-v1.0 模型）在本機產生。
- 使用者的進度只存在各自的瀏覽器，開啟同步時才會以同步碼的雜湊值存到 Netlify Blobs。
