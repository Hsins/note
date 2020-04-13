# CRUD commmands

## [Lecture] Introduction to CRUD

我們經常要對資料進行 CRUD 操作，他是以下四個操作的縮寫：

- 創建（Create）
- 讀取（Read）
- 更新（Update）
- 刪除（Delete）

## [Lecture] CODE: Introduction to CRUD

在前面我們已經介紹過 `CREATE` 命令來創建資料庫或資料表，除此之外也能透過 `INSERT INTO` 的命令在資料表中創建資料：

```sql
INSERT INTO cats(name, age)
VALUES(‘Taco’, 14);
```

## [Lecture] Preparing Our Data

首先要刪除原有的資料表並創建這一節需要的資料表，詳見下一則筆記。

## [Lecture] CODE: Preparing Our Data

```sql
-- Drop Table
DROP TABLE cats; 

-- Recreate a new cats table:
CREATE TABLE cats 
  ( 
     cat_id INT NOT NULL AUTO_INCREMENT, 
     name   VARCHAR(100), 
     breed  VARCHAR(100), 
     age    INT, 
     PRIMARY KEY (cat_id) 
  ); 
DESC cats; 

-- Insert some new cats:
INSERT INTO cats(name, breed, age) 
VALUES ('Ringo', 'Tabby', 4),
       ('Cindy', 'Maine Coon', 10),
       ('Dumbledore', 'Maine Coon', 11),
       ('Egg', 'Persian', 4),
       ('Misty', 'Tabby', 13),
       ('George Michael', 'Ragdoll', 9),
       ('Jackson', 'Sphynx', 7);
```

## [Lecture] Official Introduction to SELECT

這一節介紹的是 `READ` 操作，也就是我們如何從資料表中取得或搜尋資料。這個操作透過 `SELECT` 命令完成，比如取得一張表中的所有欄位時，我們可以使用萬用字元 `*` 來作為要查找的表格名稱：

```sql
SELECT * FROM cats;
```

或者是指定要取得特定表的資料：

```sql
-- Select column `name` from cats table
SELECT name FROM cats; 

-- Select columns `age`, `breed` and `cat_id` from cats table
SELECT age, breed, name, cat_id FROM cats;
```

## [Lecture] CODE: Official Introduction to SELECT

```sql
-- Select all cloumns from cats table
SELECT * FROM cats;

-- Select column `name` from cats table
SELECT name FROM cats;

-- Select column `age` from cats table
SELECT age FROM cats;

-- Select column `cat_id` from cats table
SELECT cat_id FROM cats;

-- Select columns `name` and `age` from cats table
SELECT name, age FROM cats;

-- Select columns `cat_id` and `age` from cats table
SELECT cat_id, name, age FROM cats;

-- Select columns `age`, `breed` and `cat_id` from cats table
SELECT age, breed, name, cat_id FROM cats;

-- Select columns `cat_id`, `name`, `age` and `breed` from cats table
SELECT cat_id, name, age, breed FROM cats;
```

## [Lecture] Introduction to WHERE

如果要取得表中滿足某一條件的列，可以加上 `WHERE` 語句：

```sql
-- Select by age:
SELECT * FROM cats WHERE age=4;
```

除此之外，如果沒有額外的設定，使用 `WHERE` 時對於字串中的英文字母大小寫是不區分的，也就是以下的都是相同的查詢結果：

```sql
SELECT * FROM cats WHERE name='ABC';
SELECT * FROM cats WHERE name='abc';
SELECT * FROM cats WHERE name='AbC';
```

## [Lecture] CODE: Introduction to WHERE

```sql
-- Select by age:
SELECT * FROM cats WHERE age=4;

-- Select by name:
SELECT * FROM cats WHERE name='Egg';

-- Notice how it deals with case:
SELECT * FROM cats WHERE name='egG';
```

## [Lecture] SELECT Challenges

1. Write the SQL that selects the following:
  ```
  +--------+
  | cat_id |
  +--------+
  |      1 |
  |      2 |
  |      3 |
  |      4 |
  |      5 |
  |      6 |
  |      7 |
  +--------+
  ```
2. Write the SQL that selects the following:
  ```
  +----------------+------------+
  | name           | breed      |
  +----------------+------------+
  | Ringo          | Tabby      |
  | Cindy          | Maine Coon |
  | Dumbledore     | Maine Coon |
  | Egg            | Persian    |
  | Misty          | Tabby      |
  | George Michael | Ragdoll    |
  | Jackson        | Sphynx     |
  +----------------+------------+
  ```
3. Write the SQL that selects the following (Just the Tabby cats):
  ```
  +-------+------+
  | name  | age  |
  +-------+------+
  | Ringo |    4 |
  | Misty |   13 |
  +-------+------+
  ```
4. Write the SQL that selects the following (cat_id is same as age):
  ```
  +--------+------+
  | cat_id | age  |
  +--------+------+
  |      4 |    4 |
  |      7 |    7 |
  +--------+------+
  ```

## [Lecture] SELECT Challenges Solution

詳見下一則筆記。

## [Lecture] CODE: SELECT Challenges Solution

```sql
-- Exercise 01
SELECT cat_id FROM cats; 

-- Exercise 02
SELECT name, breed FROM cats; 

-- Exercise 03
SELECT name, age FROM cats WHERE breed='Tabby'; 

-- Exercise 04
SELECT cat_id, age FROM cats WHERE cat_id=age; 
SELECT * FROM cats WHERE cat_id=age; 
```

## [Lecture] Introduction to Aliases

如果要更改顯示的欄位名稱，可以使用 `AS` 命令來建立別名（Alias），比如以下的代碼會將源自於 `cats` 表格中 `cat_id` 欄位顯示為 `id` 欄位：

```
SELECT cat_id AS id, name FROM cats;
```

## [Lecture] CODE: Introduction to Aliases

```sql
SELECT cat_id AS id, name FROM cats;
 
SELECT name AS 'cat name', breed AS 'kitty breed' FROM cats;
 
DESC cats;
```

## [Lecture] The UPDATE Command

我們經常要對資料庫中的內容進行修改，比如更新使用者名稱、資訊或是修改密碼…等，此時必須使用 `UPDATE` 操作更新資料庫中的內容。比如以下代碼將會把 `cat` 表格中 `name` 欄位為 `Misty` 的 `age` 欄位修改成 14：

```sql
UPDATE cats SET age=14
WHERE name='Misty';
```

## [Lecture] CODE: The UPDATE Command

```sql
-- Change tabby cats to shorthair:
UPDATE cats SET breed='Shorthair' WHERE breed='Tabby'; 

-- Another update:
UPDATE cats SET age=14 WHERE name='Misty';
```

## [Lecture] UPDATE Challenges

1. Change Jackson's name to `"Jack"`
2. Change Ringo's breed to `"British Shorthair"`
3. Update both Maine Coons' ages to be `12`

## [Lecture] UPDATE Challenges Solution

詳見下一則筆記。

## [Lecture] CODE: UPDATE Challenges Solution

```sql
-- Exercise 01
UPDATE cats SET name='Jack'
WHERE name='Jackson';

-- Exercise 02
UPDATE cats SET breed='British Shorthair'
WHERE name='Ringo';

-- Exercise 03
UPDATE cats SET age=12
WHERE breed='Maine Coon';
```

## [Lecture] Introduction to DELETE

如果要從資料表中移除資料，必須進行 `DELETE` 操作，比如以下代碼將會從 `cats` 資料表中將 `name` 欄位為 `'EGG'` 的資料刪除：

```sql
DELETE FROM cats WHERE name='Egg';
```

值得注意的是即使進行了 `DELETE` 操作，資料表中的 `ID` 並不會向前遞補。除此之外值得一提的是 `DELETE FROM cats;` 會刪除資料表中的所有列，但資料表仍然存在，與 `DROP TABLE cats;` 有所不同。

## [Lecture] CODE: Introduction to DELETE

```sql
DELETE FROM cats
WHERE name='Egg';
```

## [Lecture] DELETE Challenges

1. DELETE all 4 year old cats
2. DELETE cats whose age is the same as their cat_id
3. DELETE all cats

## [Lecture] DELETE Challenges Solution

詳見下一則筆記。

## [Lecture] CODE: DELETE Challenges Solution

```sql
-- Exercise 01
DELETE FROM cats
WHERE age=4;
 
-- Exercise 02
DELETE FROM cats
WHERE cat_id=age;

-- Exercise 03
DELETE FROM cats;
```

