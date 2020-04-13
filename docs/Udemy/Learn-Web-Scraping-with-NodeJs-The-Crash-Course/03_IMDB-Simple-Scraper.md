---
pageClass: udemy
---

# IMDB Simple Scraper (Request Method)

## [Note] Add Request Headers

目前網頁傳輸所使用的協議是 **超文本傳輸協議（HTTP, Hyper Text Transfer Protocol）**，在此協議中採用了請求／響應模型（Request/Response Model），由瀏覽器或其他用戶端發出請求，伺服器再根據請求返回響應，在這個過程中，傳輸的訊息包括了 `message-header` 和 `message-body` 部分。其中請求的 Header 部分承載了關於用戶端應用程式、請求資源與請求頁面…等相關的資訊，更詳細的 Header 欄位可以查看 [WikiPedia | List of HTTP header fields](https://www.wikiwand.com/en/List_of_HTTP_header_fields)。

瀏覽器所發送的請求 Header 可以在開發者工具中進行查看，根據 request 套件提供的文件 [GET something from a JSON REST API](https://github.com/request/request-promise#get-something-from-a-json-rest-api) 可以寫出下面代碼：

```javascript
const response = await request({
  uri: 'https://www.imdb.com/title/tt6565702/',
  headers: {
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6,la;q=0.5',
  'Cache-Control': 'max-age=0',
  'Connection': 'keep-alive',
  'Host': 'www.imdb.com',
  'Upgrade-Insecure-Requests': '1',
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
  }
});
```

## [Note] Deal with gzip

注意到之前我們所發送的請求 Header 中設置了 `Accept-Encoding` 欄位，這個欄位告知了伺服器端可以採用哪一種壓縮方式來傳輸檔案，注意到其中使用了 [gzip](https://www.wikiwand.com/en/Gzip) 來進行傳輸檔案的壓縮，雖然可以大幅減少流量的使用，但可以看到此時伺服器的響應內容 `response` 顯示為亂碼，必須在 `request` 中將 `gzip` 設置為 `true`：

```javascript
const response = await request({
  uri: ' ... ',
  headers: { ... },
  gzip: true
});
```

## [Note] Selector and Parser

在取得伺服器所返回的響應的資源後，還需要進行內容的分析與梳理，將需要的內容從 HTML 代碼中擷取出來，我們將這個過程稱為 **解析（Parsing）**。在我們所導入的 `cheerio` 套件庫中，由於採用了 jQuery 核心，因此可以使用選擇器（Selector）來幫助我們獲取指定的 HTML 元素：

```javascript
let $ = cheerio.load(response);

let title = $('div[class="title_wrapper"] > h1').text().trim();
let rating = $('div[class="ratingValue"] > strong > span').text();
let poster = $('div[class="poster"] > a > img').attr('src');
let totalRatings = $('div[class="imdbRating"] > a').text();
let releaseDate = $('a[title="See more release dates"]').text().trim();

let genres = [];
$('div[class="title_wrapper"] a[href^="/search/title"]').each((i, ele) => {
  let genre = $(ele).text();
  genres.push(genre);
});
```

關於更多 jQuery 中選擇器的用法可以查看 [w3schools | jQuery Selectors](https://www.w3schools.com/jquery/jquery_ref_selectors.asp) 中的內容。

## [Note] Write to file

將爬取的資料進行解析之後，如果資料量並不大，可以將資料儲存為 [JSON](https://www.wikiwand.com/en/JSON) 或 [CSV](https://www.wikiwand.com/en/Comma-separated_values) 格式，首先我們將爬取的資料存入一個陣列中：

```javascript
let moviesData = [];

moviesData.push({
  title,
  rating,
  poster,
  totalRatings,
  releaseDate,
  genres
});
```

### JSON

由於 JSON 格式本身即是以 JavaScript 物件的格式進行儲存，因此毋需使用額外的函數庫：

```javascript
fs.writeFileSync('./data.json', JSON.stringify(moviesData), 'utf-8');
```

### CSV

對於 CSV 格式來說，我們使用 [json2csv](https://github.com/zemirco/json2csv) 函數庫：

```javascript
const json2csvParser = new Json2csvParser();
const csv = json2csvParser.parse(moviesData);

fs.writeFileSync('./data.csv', csv, 'utf-8');
```

## Download Files Locally

除了獲取 HTML 並解析內容之外，我們也可以請求圖片、影片⋯⋯資源，雖然透過 `fs.readFileSync()` 和 `fs.writeFildSync()` 方法也可以進行資料的複製，但其概念是將文件內容全部先寫入記憶體中，然後再寫入文件，當處理檔案較大的文件時，由於無法切分處理，讀寫速度較為緩慢甚至可能使得記憶體爆滿，因此我們必須採用 **資料流（stream）** 的形式：

```javascript
let file = fs.createWriteStream(`Poster - ${title}.jpg`);

await new Promise((resolve, reject) => {
  let stream = request({
    uri: poster,
    headers: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6,la;q=0.5',
      'Cache-Control': 'max-age=0',
      'Connection': 'keep-alive',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
    },
    gzip: true
  })
  .pipe(file)
  .on('finish', () => {
    console.log(`${title} has finished Downloading the image.`);
    resolve();
  })
  .on('error', (error) => {
    reject(error);
  })
})
.catch(error => {
  console.log(`${title} has an error on download. ${error}`);
});
```