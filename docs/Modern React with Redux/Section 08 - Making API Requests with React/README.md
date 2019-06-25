# Section 08 - Making API Requests with React

## Table of Contents

- [Section 08 - Making API Requests with React](#section-08---making-api-requests-with-react)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] Fetching Data](#lecture-fetching-data)
  - [[Lecture] Axios vs Fetch](#lecture-axios-vs-fetch)
  - [[Lecture] Viewing Request Results](#lecture-viewing-request-results)
  - [[Lecture] Handling Requests with Async Await](#lecture-handling-requests-with-async-await)
  - [[Lecture] Setting State After Async Requests](#lecture-setting-state-after-async-requests)
  - [[Lecture] Binding Callbacks](#lecture-binding-callbacks)
  - [[Lecture] Creating Custom Clients](#lecture-creating-custom-clients)

## [Lecture] Fetching Data

我們將使用 [Unsplash Developers](https://unsplash.com/developers) 所提供的 API 來完成接下來的內容，關於這個 API 詳細的使用方式可以參考他的 [官方文件](https://unsplash.com/documentation)。

## [Lecture] Axios vs Fetch

首先必須要有的觀念是向伺服器發送請求並不是 React 的功能，而必須透過 `Axios` 或 `Fetch` 來發送網路請求或 Ajax 請求：

- [axios](https://github.com/axios/axios)：由第三方所維護的非同步處理工具，基於 `promise` 的 HTTP 套件，可以使用在瀏覽器或 node.js 中。
- [fetch](https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch)：由 ES6 原生支援，在多數的瀏覽器中可以使用。

在接下來的內容中將使用 `axios` 套件，必須先透過 npm 工具安裝：

```bash
# Install axios
$ npm install --save axios
```

## [Lecture] Viewing Request Results

透過 `axios` 發送 `GET` 請求：

```jsx
onSearchSubmit(term) {
  axios.get("https://api.unsplash.com/search/photos", {
    params: { query: term },
    headers: {
      Authorization:
        "Client-ID ba7a5f05cbacfadc407c3ec3bf480ffacf13db55806dc883b225795b95080d38"
    }
  });
}
```

## [Lecture] Handling Requests with Async Await

網頁應用中會使用到許多非同步事件，在 JavaScript 可以使用 `Promise` 來處理這些非同步事件，在簡單的狀況下可以透過 `.then()` 來進行非同步事件處理。另外一種方式則是透過 ES7 之後的 `await` 和 `async` 關鍵字，關於這部分較詳細的說明可以參考 [知乎 | 淺談 Async/Await](https://zhuanlan.zhihu.com/p/32441396)。


## [Lecture] Setting State After Async Requests

使用 `async` 和 `await` 關鍵字進行非同步操作，在確認透過 API 取得資料之後更新狀態：

```jsx
import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorizations:
          "Client-ID ba7a5f05cbacfadc407c3ec3bf480ffacf13db55806dc883b225795b95080d38"
      }
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
```

## [Lecture] Binding Callbacks

前一個小節的代碼中，關於 `this` 的綁定將會出錯，在這裡採用將原來的 `onSearchSubmit()` 方法以箭頭函數改寫來處理：

```jsx
onSearchSubmit = async term => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query: term },
    headers: {
    Authorization:
      "Client-ID ba7a5f05cbacfadc407c3ec3bf480ffacf13db55806dc883b225795b95080d38"
    }
  });
```

## [Lecture] Creating Custom Clients

在開發時，不應該將大多數複雜的業務邏輯代碼放在 React 組件檔案中，所以我們可以將這部分的代碼獨立存放在 `/src/api/` 路徑下，比如 `unsplash.js`：

```javascript
import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID ba7a5f05cbacfadc407c3ec3bf480ffacf13db55806dc883b225795b95080d38"
  }
});
```