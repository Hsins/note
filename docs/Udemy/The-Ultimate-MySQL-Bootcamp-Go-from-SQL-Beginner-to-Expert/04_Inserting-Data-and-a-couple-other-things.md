# Inserting Data (and a couple other things)

## [Lecture] Section 4 Introduction

這一節主要介紹如何在表中插入資料？如何取得表中的資料？表格資料型態與警告？什麼是 `NULL`？

## [Lecture] Inserting Data

使用 `INSERT INTO <tablename>() VALUES ();` 來插入資料。

## [Lecture] CODE: Inserting Data

```sql
-- Insert Data
-- INSERT INTO table_name(column_name) VALUES (data);
INSERT INTO cats(name, age)
VALUES ('Jetson', 7);
```

## [Lecture] Super Quick Intro To SELECT

在後續的課程中我們將會學到可以使用 `SELECT * FROM <tablename>;` 來取得指定資料表中的資料。

## [Lecture] CODE: Super Quick Intro To SELECT

```sql
SELECT * FROM cats;
```

## [Lecture] Multiple INSERT

當我們要大量插入資料時，使用 `,` 將不同資料列分開。

## [Lecture] CODE: Multiple Insert

```sql
INSERT INTO table_name 
            (column_name, column_name) 
VALUES      (value, value), 
            (value, value), 
            (value, value);
```

## [Lecture] INSERT Challenges

1. 練習建置一個名為 `people` 的資料表，包含三個欄位：
    - `first_name` (20 char limit)
    - `last_name` (20 char limit)
    - `age`
2. 插入一列資料

    | first_name | last_name | age |
    | :--: | :--: | :--: |
    | 'Tina' | 'Belcher' | 13 |

3. 插入一列資料

    | first_name | last_name | age |
    | :--: | :--: | :--: |
    | 'Bob' | 'Belcher' | 42 |

4. 插入多列資料

    | first_name | last_name | age |
    | :--: | :--: | :--: |
    | 'Linda' | 'Belcher' | 45 |
    | 'Phillip' | 'Frond' | 38 |
    | 'Calvin' | 'Fischoeder' | 70 |

## [Lecture] INSERT Challenges Solution

略，見下一則筆記。

## [Lecture] CODE: INSERT Challenges Solution

```sql
-- Create Table
CREATE TABLE people
  (
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    age INT
  );

-- Insert Data
INSERT INTO people(first_name, last_name, age)
VALUES ('Tina', 'Belcher', 13);

INSERT INTO people(age, last_name, first_name)
VALUES (42, 'Belcher', 'Bob');

INSERT INTO people(first_name, last_name, age)
VALUES('Linda', 'Belcher', 45)
  ,('Phillip', 'Frond', 38)
  ,('Calvin', 'Fischoeder', 70);

-- Show Data
SELECT * FROM people;
```

## [Lecture] NOTE: MySQL Warnings

在下一小節中 Colt 將會介紹 MySQL 中的 **警告（warnings）**，如果在過程中出現錯誤可以參考這篇問與答 [Did anyone else get an error on section 4 lecture 51 instead of a warning?](https://www.udemy.com/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/learn/v4/questions/2327164)。

## [Lecture] MySQL Warnings

當插入資料不符合所設定的資料型態時，資料庫管理系統會回報 **警告（warnings）**，使用 `SHOW WARNINGS;` 命令可以查看警告。

## [Lecture] CODE: MySQL Warnings

```sql
-- Check cats Table
DESC cats; 

-- Try Inserting a cat with a super long name:
INSERT INTO cats(name, age)
VALUES('This is some text blah blah blah blah blah text text text something about cats lalalalal meowwwwwwwwwww', 10);

-- Show Warnings
SHOW WARNINGS; 
```

## [Lecture] NULL and NOT_NULL

當我們檢查資料庫中某章資料表的內容時，會看到欄位有一個屬性叫作 `NULL` 如下所示：

```
+-------+--------------+------+-----+---------+-------+
| Field | Type         | Null | Key | Default | Extra |
+-------+--------------+------+-----+---------+-------+
| name  | varchar(100) | YES  |     | NULL    |       |
| age   | int(11)      | YES  |     | NULL    |       |
+-------+--------------+------+-----+---------+-------+
```

其中 `NULL` 的意思代表著未知的數值，而欄位的 `NULL` 屬性為 `YES` 表示插入一列資料時，某一欄可以是沒有資料的（若資料型態為整數，其值將為 0）。若要限制必須填入資料否則會回報警告時，必須在聲明變數型態時加入 `NOT NULL`：

```sql
CREATE TABLE cats2
  (
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL
  );
```

## [Lecture] CODE: NULL and NOT NULL

沒有設定為 `NOT NULL`：

```sql
-- Create and Check Table
CREATE TABLE cats
  (
    name VARCHAR(100),
    age INT
  );
DESC cats; 

-- Try inserting a cat without an age:
INSERT INTO cats(name) VALUES('Alabama'); 
SELECT * FROM cats; 

-- Try inserting a nameless and ageless cat:
INSERT INTO cats() VALUES(); 
```

設定為 `NOT NULL`：

```sql
-- Create and Check Table
CREATE TABLE cats2
  (
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL
  );
DESC cats2; 

-- Try inserting an ageless cat:
INSERT INTO cats2(name) VALUES('Texas'); 

-- View the new warnings:
SHOW WARNINGS; 
SELECT * FROM cats2; 

-- Do the same for a nameless cat:
INSERT INTO cats2(age) VALUES(7); 
SHOW WARNINGS; 
```

## [Lecture] Setting Default Values

聲明資料型態時，對於插入時沒有給定內容的欄位可以透過 `DEFAULT` 設定預設值：

```sql
CREATE TABLE cats3
  ( 
     name VARCHAR(100) DEFAULT 'unnamed',
     age  INT DEFAULT 99
  ); 
```

使用 `DEFAULT` 設定預設值時可能會和 `NOT NULL` 搭配使用，因為如果沒有特別聲明 `NOT NULL` 時，可以特別指定數值為 `NULL`：

```sql
CREATE TABLE cats4
  ( 
     name VARCHAR(100) NOT NULL DEFAULT 'unnamed',
     age  INT NOT NULL DEFAULT 99
  ); 
```

## [Lecture] CODE: Setting Default Values

```sql
-- Define a table with a DEFAULT name specified:
CREATE TABLE cats3
  (
    name VARCHAR(20) DEFAULT 'no name provided',
    age INT DEFAULT 99
  );
DESC cats3; 

-- Insert a nameless, ageless cat:
INSERT INTO cats3(age) VALUES(13); 
INSERT INTO cats3() VALUES(); 
```

```sql
-- Combine NOT NULL and DEFAULT:
CREATE TABLE cats4
  (
    name VARCHAR(20) NOT NULL DEFAULT 'unnamed',
    age INT NOT NULL DEFAULT 99
  );
  
-- Notice The Difference:
INSERT INTO cats() VALUES();
SELECT * FROM cats;
INSERT INTO cats3() VALUES();
SELECT * FROM cats3;
INSERT INTO cats3(name, age) VALUES('Montana', NULL);
SELECT * FROM cats3;
INSERT INTO cats4(name, age) VALUES('Cali', NULL);
```

## [Lecture] A Primer On Primary Keys

為了避免資料重複，我們會指派某一個欄位為 **主鍵（Primary Key）** 來進行區分，比如在申請帳號時，通常會將 username 設為主鍵來避免重複申請帳號。在聲明資料型態時可以透過 `PRIMARY KEY (column_name)` 來設定主鍵，在許多狀況下會將主鍵設置為一串編號，透過添加 `AUTO_INCREMENT` 標籤可以使資料庫添加資料列時自動進行編號。

## [Lecture] CODE: A Primer on Primary Keys

```sql
-- Define a table with a PRIMARY KEY constraint:
CREATE TABLE unique_cats
  (
    cat_id INT NOT NULL,
    name VARCHAR(100),
    age INT,
    PRIMARY KEY (cat_id)
  );
DESC unique_cats; 

-- Insert some new cats:
INSERT INTO unique_cats(cat_id, name, age) VALUES(1, 'Fred', 23);
INSERT INTO unique_cats(cat_id, name, age) VALUES(2, 'Louise', 3);
INSERT INTO unique_cats(cat_id, name, age) VALUES(1, 'James', 3);

SELECT * FROM unique_cats; 
```

```sql
-- Adding in AUTO_INCREMENT:
CREATE TABLE unique_cats2 (
    cat_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    age INT,
    PRIMARY KEY (cat_id)
);

-- INSERT a couple new cats:
INSERT INTO unique_cats2(name, age) VALUES('Skippy', 4);
INSERT INTO unique_cats2(name, age) VALUES('Jiff', 3);
INSERT INTO unique_cats2(name, age) VALUES('Jiff', 3);
INSERT INTO unique_cats2(name, age) VALUES('Jiff', 3);
INSERT INTO unique_cats2(name, age) VALUES('Skippy', 4);

SELECT * FROM unique_cats2; 
```

## [Lecture] Table Constraints Exercise

創建一個名為 `employees` 的資料表，表中包含以下資料：

- `id` - number(automatically increments), mandatory, primary key
- `last_name` - text, mandatory
- `first_name` - text, mandatory
- `middle_name` - text, not mandatory
- `age` - number mandatory
- `current_status` - text, mandatory, defaults to 'employed'

## [Lecture] Table Constraints Exercise Solution

詳見下一則筆記。

## [Lecture] CODE: Table Constraints Exercise Solution

設定主鍵的方式有兩種：

```sql
-- Solution 1
CREATE TABLE employees (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    middle_name VARCHAR(255),
    age INT NOT NULL,
    current_status VARCHAR(255) NOT NULL DEFAULT 'employed',
    PRIMARY KEY(id)
);

-- Solution 2
CREATE TABLE employees (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    middle_name VARCHAR(255),
    age INT NOT NULL,
    current_status VARCHAR(255) NOT NULL DEFAULT 'employed'
);
```
