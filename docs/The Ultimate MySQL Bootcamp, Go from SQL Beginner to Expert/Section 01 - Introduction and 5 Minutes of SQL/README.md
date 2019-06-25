# Section 01 - Introduction and 5 Minutes of SQL

- [Section 01 - Introduction and 5 Minutes of SQL](#section-01---introduction-and-5-minutes-of-sql)
  - [[Note] First Try of SQL](#note-first-try-of-sql)

## [Note] First Try of SQL

到 [SQL Try-it Editor](https://www.w3schools.com/sql/trysql.asp?filename=trysql_op_or) 張貼以下代碼並觀察結果（由於 SQL 編輯器採用了不支援 FireFox 的 WebSQL，建議採用 Google Chrome 來瀏覽網頁）：

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