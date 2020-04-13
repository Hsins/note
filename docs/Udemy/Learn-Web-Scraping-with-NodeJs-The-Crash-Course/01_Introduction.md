---
pageClass: udemy
---

# Introduction

## [Note] A Simple IMDB Scraper

首先創建專案並安裝相關的套件：

```bash
$ npm init
$ npm install --save request-promise cheerio
```

簡易爬蟲代碼如下：

```javascript
const request = require('request-promise');
const cheerio = require('cheerio');

const URL = 'https://www.imdb.com/title/tt6565702/';

(async () => {
  const response = await request(URL);
  let $ = cheerio.load(response);

  let title = $('div[class="title_wrapper"] > h1').text();
  let rating = $('span[itemprop="ratingValue"]').text();

  console.log(title, rating);
})();
```