# Section 31 - RESTful Routing

## 299, Intro to REST

### What is REST/RESTful?

表現層狀態轉換（REST, Representational State Transfer）是一種網路架構的風格，具有此種風格的系統可以稱為是 RESTful 的，或者更直白地說：「將 URL 定位資源，以 HTTP 協議所定義的 `GET`、`POST`、`DELETE` 等請求來描述操作」。在這樣的基礎之下，可以直觀地從 URL 名稱、發送的請求以及請求所得到的狀態碼就知道做了什麼操作？結果如何？

### URL Design

RESTful 的核心思想就是讓用戶端發送的請求操作都具備有「動詞 + 受詞」的結構，其中「動詞」的部分透過常用的 HTTP 方法來實踐，對應 CRUD 操作：

- `GET`：讀取（Read）
- `POST`：創建（Create）
- `PUT`：更新（Update）
- `PATCH`：更新（Update），通常是部分更新
- `DELETE`：刪除（Delete）

而「受詞」的部分就是 API 的 URL，這部份透過設置路由來完成。

關於 RESTful 的解釋與說明，很建議查看這篇問題下的回答 [知乎 | 怎样用通俗的语言解释REST，以及RESTful？](https://www.zhihu.com/question/28557115) 和 [阮一峰的网络日志 | RESTful API 最佳实践](http://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html)。

## 300, RESTful Blog App: INDEX

## 301, Note about Blog App: Layout

## 302, Blog App: Layout

## 303, Note about RESTful Blog App: New and Create

在下一個課程中 Colt 將會介紹一種新的方式來透過 `<form>` 表單提交資料到伺服器端，在以往我們會使用 `name` 屬性：

```html
<input type="text" name="title">
```

新的使用方法會是：

```html
<input type="text" name="blog[title]"> 
```

前一種方法要取值時使用 `req.body.title`，而後者則為 `req.body.blog.title`。

## 304, RESTful Blog App: NEW and CREATE

## 305, Note about RESTful Blog App: SHOW

## 306, RESTful Blog App: SHOW

## 307, RESTful Blog App: EDIT AND UPDATE

## 308, RESTful Blog App: DESTROY

## 309, Note about RESTful Blog App: Final Touches

## 310, RESTful Blog App: Final Touches
