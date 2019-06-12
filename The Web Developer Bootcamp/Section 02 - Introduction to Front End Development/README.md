# Section 02 - Introduction to Front End Development

## Table of Contents

- [Section 02 - Introduction to Front End Development](#section-02---introduction-to-front-end-development)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] Unit Objectives](#lecture-unit-objectives)
  - [[Lecture] Note about Setting Up Front-End Developer Environment](#lecture-note-about-setting-up-front-end-developer-environment)
  - [[Lecture] Setting Up Front-End Developer Environment](#lecture-setting-up-front-end-developer-environment)
  - [[Lecture] Introduction to the Web](#lecture-introduction-to-the-web)
    - [Internet](#internet)
    - [View the HTML on given website](#view-the-html-on-given-website)
  - [[Lecture] The Front End Holy Trinity](#lecture-the-front-end-holy-trinity)

## [Lecture] Unit Objectives

- Objective 01: Setup Developer Environment
- Objective 02: Compare and contrast fronted and backend
- Objective 03: Define roles of HTML, CSS and JavaScript

## [Lecture] Note about Setting Up Front-End Developer Environment

建議使用 [Sublime Text 3](https://www.sublimetext.com/) 作為編輯器，並添加 [Emmet](https://docs.emmet.io/) 插件。

## [Lecture] Setting Up Front-End Developer Environment

- [Sublime Text 3](https://www.sublimetext.com/)
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)

## [Lecture] Introduction to the Web

### Internet

講師透過影片 [YouTube | There and Back Again: A Packet's Tale. How Does the Internet Work?](http://www.youtube.com/watch?v=ewrBalT_eBM) 簡單介紹了網際網路實際上的運作情形，並舉例當使用者透過瀏覽器在網址列輸入 `https://www.udemy.com/` 並按下 <kbd>Enter</kbd> 鍵後發生了什麼事：

1. 瀏覽器會把這個請求傳送到你的 **網際網路服務供應商（ISP, Internet Service Provider）**。
2. 接著 **網域名稱系統（DNS, Domain Name System）** 會解析 **域名（Domain Name）** 並轉換為 IP 位址如 `23.235.47.175`。
3. 瀏覽器所發出的 **請求（request）** 最後將透過許多網路上的伺服器與路由器，以所能找到的最快路徑被遞送到目標的 IP 位址。
4. 目標 IP 位址上的伺服器將根據請求的協議與內容，回應內容給瀏覽器，內容可能是圖片檔、影音檔、HTML 文件、CSS 文件和 JavaScript 文件…等。
5. 瀏覽器收到這些文件後，將其渲染出來給使用者看。

關於詳細一點的內容可以建議參考 [知乎 | Web 建站技術中，HTML、HTML5、XHTML、CSS、SQL、JavaScript、PHP、ASP.NET、Web Services 是什麼？](https://www.zhihu.com/question/22689579) 系列問題的回答會更清楚一些。

### View the HTML on given website

透過 Google 開發者工具，可以瀏覽網頁原始碼：

- 頁面上點擊滑鼠右鍵並選擇 `檢查網頁原始碼`。
- 鍵盤快速鍵為 `Ctrl + U`。

## [Lecture] The Front End Holy Trinity

這一小節的內容主要介紹了關於前端所使用到的三個語言 HTML、CSS 和 JavaScript 所扮演的角色，概括地來說：

- HTML：決定了網頁整體的結構
- CSS：網頁渲染的外觀
- JavaScript：網頁與使用者之間的互動
