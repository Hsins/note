---
pageClass: udemy
---

# Course Introduction

## First Try of SQL

到 [SQL Try-it Editor](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_or) 張貼以下 SQL 程式碼並觀察結果：

1. ```SQL
   SELECT * FROM customers;
   ```
2. ```SQL
   SELECT * FROM orders;
   ```
3. ```SQL
   SELECT *
   FROM products
   ORDER BY Price DESC;
   ```
4. ```SQL
   SELECT
       customerName,
       COUNT(*) AS 'number of orders'
   FROM customers
   INNER JOIN orders
	   ON orders.customerID = customers.customerID
   GROUP BY customers.customerID;
   ```
5. ```SQL
   SELECT
       username,
       photos.id,
       photos.image_url,
       COUNT(*) AS total
   FROM photos
   INNER JOIN likes
       ON likes.photo_id = photos.id
   INNER JOIN users
       ON photos.user_id = users.id
   GROUP BY photos.id
   ORDER BY total DESC
   LIMIT 1;
   ```
6. ```SQL
   SELECT first_name,
          last_name,
          Count(rating)                    AS COUNT,
          Ifnull(Min(rating), 0)           AS MIN,
          Ifnull(Max(rating), 0)           AS MAX,
          Round(Ifnull(Avg(rating), 0), 2) AS AVG,
          CASE
            WHEN Count(rating) >= 10 THEN 'POWER USER'
            WHEN Count(rating) > 0 THEN 'ACTIVE'
            ELSE 'INACTIVE'
          end                              AS STATUS
   FROM   reviewers
          LEFT JOIN reviews
                 ON reviewers.id = reviews.reviewer_id
   GROUP  BY reviewers.id;
   ```
7. ```SQL
   DROP TABLE customers;
   ```

## Database and Database Management System

**資料庫（Database）** 有兩個主要的功能：存放資料和操作資料。比如電話簿中記載了電話號碼以及號碼持有人的資料，並且按照字母降序排列來方便查找。大多數人在談及資料庫時，通常指的是資料庫和資料庫管理系統（DBMs, Database Management System）結合在一起的概念。應用程式必須透過資料庫管理系統所提供的應用程式接口（API, Application Programming Interface）來存取資料庫，常見的資料庫管理系統有：

- [MySQL](https://www.mysql.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Oracle Database](https://www.oracle.com/database/)
- [SQLite](https://www.sqlite.org/index.html)
- ...

## SQL (Structured Query Language)

以資料表的形式儲存資料並彼此進行關聯的資料庫管理系統稱為關聯式資料庫管理系統（Relational Database Management System），比如  MySQL、SQLite、PostgreSQL…等。

操作關聯式資料庫管理系統時，需要使用 **結構化查詢語言（SQL, Structured Query Language）**，由於 SQL 語言有其規範與標準，因此學會 SQL 便可以讓我們無痛地在不同的資料庫系統間使用。我們必須關切的是不同資料庫系統之間的差異，比如資料存取的性能、實現資料庫所使用的資料結構…等，而不僅僅是 SQL 語言。

其實 SQL 語言的邏輯並不難理解，並且十分直觀，比如要從資料表中篩選出所有年紀大於或恰為 18 歲的使用者時，不論在那一個非關聯式資料庫中語句都是：

```sql
SELECT * FROM Users WHERE Age >= 18;
```

## Environment Setup

當下載並設定好 MySQL 後，在 `.bashrc` 或 `.zshrc` 設定檔中加入以下腳本代碼：

```bash
$ export PATH=${PATH}:/usr/local/mysql/bin/
```

接著便可以在終端機中啟動 MySQL Server：

```bash
$ Mysql -u root -p
```

最後創建使用者密碼：

```bash
$ ALTER USER 'root'@'localhost' IDENTIFIED BY 'yournewpassword'
```

如果在過程中發生錯誤，可以嘗試：

```
SET @@global.sql_mode= '';
```
