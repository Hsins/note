---
pageClass: udemy
---

# More Info & Concepts

## [Note] The Request Library Method

當瀏覽器訪問網路資源時，會對遠端的伺服器發送不同種類的 **請求（Request）**，比如：`GET`、`POST`、`PUT`、`DELETE`…等，在接下來的內容中我們將使用 [request](https://github.com/request/request) 函數庫，透過該函數庫可以在 Node.js 中發送請求。

```bash
# Install request library
$ npm install --save request
```

## [Note] The Browser Automation Method

當網頁內容並非動態渲染時，絕大多數的爬蟲工作都可以交由發送請求與接受回應來完成。但隨著網頁驗證的方式越趨複雜，則必須使用瀏覽器自動化的方式來完成，也就是使用代碼來控制瀏覽器的操作。在 Node.js 中常見的函數庫有：

- [Horseman](https://github.com/johntitus/node-horseman)：已經很久沒有更新了…
- [Puppeteer](https://github.com/GoogleChrome/puppeteer)：由 Google Chrome 開發團隊發起與維護，是目前主流且穩定函數庫。
- [Nightmare](https://github.com/segmentio/nightmare)：基於 Electron 的瀏覽器自動化函數庫，比起 [Phantom.JS](http://phantomjs.org/) 要簡單使用。

使用瀏覽器自動化的方式來撰寫爬蟲，很大一個程度上是將平時操作瀏覽器的動作改為用代碼來實現，在實現上較為直觀且開發速度較快，不過相較於透過發送請求的方式來說，由於要使用到瀏覽器引擎與涉及 DOM 的操作，運行速度相對較慢。