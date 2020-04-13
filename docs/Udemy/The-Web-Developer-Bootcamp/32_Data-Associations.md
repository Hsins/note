# Data Associations

## [Lecture] Introduction to Associations

在實際的網頁應用程式中，資料間是彼此相關聯的，我們需要將不同的資料彼此進行關聯（Associations）。關聯的情形可能為：

- 一對一（one to one）：比如夫妻
- 一對多（one to many）：比如多張照片屬於同一個用戶所有
- 多對多（many to many）：比如學校中有許多課程與學生，學生可以報名多項課程，而每個課程也容許多名學生參加

我們可以採用內嵌資料模型或是物件參考的方式來進行資料關聯，建議可以閱讀這篇 [傷神的博客 | MongoDB 基础系列三：数据建模 Data Model 基础内容](https://www.shangyang.me/2017/08/08/mongodb-basic-03-data-modeling-basic/) 作為參考。

## [Lecture] Embedded Data

內嵌資料的方式會將資料儲存在一個文件中，透過一個陣列型態來存儲：

<div align="center">
  <img src="https://i.imgur.com/dYC2Jox.png">
</div>

## [Lecture] Note About Object References

在接下來的影片中將介紹 MongoDB 和 Mongoose 的物件參照，如果發生了以下的錯誤：

```
TypeError: Cannot read property 'posts' of null
```

參考 [Udemy | lecture 274 Object References , mark 7:47](https://www.udemy.com/the-web-developer-bootcamp/learn/v4/questions/3536872) 和 [Udemy | (8:00) posts id](https://www.udemy.com/the-web-developer-bootcamp/learn/v4/questions/4062356) 的說明。

## [Lecture] Object References

物件參照的方式可以提供較大的靈活性，是在不同的文件中儲存鍵值，並進行關聯：

<div align="center">
  <img src="https://i.imgur.com/OSRLzhl.png">
</div>

## [Lecture] Module.exports

為了使撰寫好的 JavaScript 文件能夠在其他的 JavaScript 被 `import` 使用，必須透過 `module.exports` 進行組件的導出。