# The World Of String Functions

## [Lecture] Running SQL Files

我們並不需要每次都在 MySQL 環境下執行命令，取而代之的是將要執行的命令儲存在檔案中並使用 `source [file]` 來執行：

```bash
$ source test.sql
```

但要注意路徑。

## 101. CODE: Running SQL Files

```sql
CREATE TABLE cats
    (
        cat_id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100),
        age INT,
        PRIMARY KEY(cat_id)
    );
 
mysql-ctl cli
 
use cat_app;
```

```sql
source first_file.sql
``` 

```
DESC cats;
 
INSERT INTO cats(name, age)
VALUES('Charlie', 17);
 
INSERT INTO cats(name, age)
VALUES('Connie', 10);
 
SELECT * FROM cats;
```

```sql
source testing/insert.sql
```

## [Lecture] Loading Our Book Data

首先我們要先創建接下來課程中會使用到的資料表，將下一則筆記中的代碼儲存成名為 `book_data.sql` 的檔案，並執行：

```bash
CREATE DATABASE book_shop;
use book_shop;

source book_data.sql
```

## [Lecture] CODE: Loading Our Book Data

```sql
CREATE TABLE books 
    (
        book_id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(100),
        author_fname VARCHAR(100),
        author_lname VARCHAR(100),
        released_year INT,
        stock_quantity INT,
        pages INT,
        PRIMARY KEY(book_id)
    );
 
INSERT INTO books (title, author_fname, author_lname, released_year, stock_quantity, pages)
VALUES
('The Namesake', 'Jhumpa', 'Lahiri', 2003, 32, 291),
('Norse Mythology', 'Neil', 'Gaiman',2016, 43, 304),
('American Gods', 'Neil', 'Gaiman', 2001, 12, 465),
('Interpreter of Maladies', 'Jhumpa', 'Lahiri', 1996, 97, 198),
('A Hologram for the King: A Novel', 'Dave', 'Eggers', 2012, 154, 352),
('The Circle', 'Dave', 'Eggers', 2013, 26, 504),
('The Amazing Adventures of Kavalier & Clay', 'Michael', 'Chabon', 2000, 68, 634),
('Just Kids', 'Patti', 'Smith', 2010, 55, 304),
('A Heartbreaking Work of Staggering Genius', 'Dave', 'Eggers', 2001, 104, 437),
('Coraline', 'Neil', 'Gaiman', 2003, 100, 208),
('What We Talk About When We Talk About Love: Stories', 'Raymond', 'Carver', 1981, 23, 176),
("Where I'm Calling From: Selected Stories", 'Raymond', 'Carver', 1989, 12, 526),
('White Noise', 'Don', 'DeLillo', 1985, 49, 320),
('Cannery Row', 'John', 'Steinbeck', 1945, 95, 181),
('Oblivion: Stories', 'David', 'Foster Wallace', 2004, 172, 329),
('Consider the Lobster', 'David', 'Foster Wallace', 2005, 92, 343);
```

## [Lecture] Working with CONCAT

字串函數 `CONCAT()` 用來串接不同的內容，比如：

```sql
SELECT CONCAT('Hello', 'World');

SELECT
  CONCAT(author_fname, ' ', author_lname)
FROM books;
```

透過 `AS` 可以重新命名欄位名稱：

```sql
SELECT author_fname AS first, author_lname AS last, 
  CONCAT(author_fname, ', ', author_lname) AS full
FROM books;
```

透過 `CONCAT_WS` 可以指定連接的符號：

```sql
SELECT 
    CONCAT_WS(' - ', title, author_fname, author_lname) 
FROM books;
```

## [Lecture] CODE: Working With CONCAT

```sql
SELECT author_fname, author_lname FROM books;
 
CONCAT(x,y,z) // from slides
 
CONCAT(column, anotherColumn) // from slides
 
CONCAT(author_fname, author_lname)
 
CONCAT(column, 'text', anotherColumn, 'more text')
 
CONCAT(author_fname, ' ', author_lname)
 
CONCAT(author_fname, author_lname); // invalid syntax
 
SELECT CONCAT('Hello', 'World');
 
SELECT CONCAT('Hello', '...', 'World');
 
SELECT
  CONCAT(author_fname, ' ', author_lname)
FROM books;
 
SELECT
  CONCAT(author_fname, ' ', author_lname)
  AS 'full name'
FROM books;
 
SELECT author_fname AS first, author_lname AS last, 
  CONCAT(author_fname, ' ', author_lname) AS full
FROM books;
 
SELECT author_fname AS first, author_lname AS last, 
  CONCAT(author_fname, ', ', author_lname) AS full
FROM books;
 
SELECT CONCAT(title, '-', author_fname, '-', author_lname) FROM books;
 
SELECT 
    CONCAT_WS(' - ', title, author_fname, author_lname) 
FROM books;
```

## [Lecture] Introducing SUBSTRING

字串函數 `SUBSTRING()` 可以擷取字串的部分內容：

```sql
SELECT SUBSTRING('Hello World', 3, 8);
 
SELECT SUBSTRING('Hello World', 3);
 
SELECT SUBSTRING('Hello World', -3);
```

當然也可以將字串函數進行嵌套使用：

```sql
SELECT CONCAT
    (
        SUBSTRING(title, 1, 10),
        '...'
    ) AS 'short title'
FROM books;
```

## [Lecture] CODE: Introducing SUBSTRING

```sql
SELECT SUBSTRING('Hello World', 1, 4);
 
SELECT SUBSTRING('Hello World', 7);
 
SELECT SUBSTRING('Hello World', 3, 8);
 
SELECT SUBSTRING('Hello World', 3);
 
SELECT SUBSTRING('Hello World', -3);
 
SELECT SUBSTRING('Hello World', -7);
 
SELECT title FROM books;
 
SELECT SUBSTRING("Where I'm Calling From: Selected Stories", 1, 10);
 
SELECT SUBSTRING(title, 1, 10) FROM books;
 
SELECT SUBSTRING(title, 1, 10) AS 'short title' FROM books;
 
SELECT SUBSTR(title, 1, 10) AS 'short title' FROM books;
 
SELECT CONCAT
    (
        SUBSTRING(title, 1, 10),
        '...'
    )
FROM books;
 
source book_code.sql
 
SELECT CONCAT
    (
        SUBSTRING(title, 1, 10),
        '...'
    ) AS 'short title'
FROM books;
 
source book_code.sql
```

## [Lecture] Introducing REPLACE

## [Lecture] CODE: Introducing REPLACE

```sql
SELECT REPLACE('Hello World', 'Hell', '%$#@');
 
SELECT REPLACE('Hello World', 'l', '7');
 
SELECT REPLACE('Hello World', 'o', '0');
 
SELECT REPLACE('HellO World', 'o', '*');
 
SELECT
  REPLACE('cheese bread coffee milk', ' ', ' and ');
 
SELECT REPLACE(title, 'e ', '3') FROM books;
 
-- SELECT
--    CONCAT
--    (
--        SUBSTRING(title, 1, 10),
--        '...'
--    ) AS 'short title'
-- FROM books;
 
SELECT
    SUBSTRING(REPLACE(title, 'e', '3'), 1, 10)
FROM books;
 
SELECT
    SUBSTRING(REPLACE(title, 'e', '3'), 1, 10) AS 'weird string'
FROM books;
```

- Use <kbd>cmd + /</kbd> (mac) or <kbd>ctrl + /</kbd> (pc) to comment out SQL in c9.
- The `REPLACE()` function, as well as the other string functions, only change the query output, they don't affect the actual data in the database.

## [Lecture] Using REVERSE

## [Lecture] CODE: Using REVERSE

```sql
SELECT REVERSE('Hello World');
 
SELECT REVERSE('meow meow');
 
SELECT REVERSE(author_fname) FROM books;
 
SELECT CONCAT('woof', REVERSE('woof'));
 
SELECT CONCAT(author_fname, REVERSE(author_fname)) FROM books;
```

## [Lecture] Working with CHAR LENGTH

## [Lecture] CODE: Working with CHAR LENGTH

```sql
SELECT CHAR_LENGTH('Hello World');
 
SELECT author_lname, CHAR_LENGTH(author_lname) AS 'length' FROM books;
 
SELECT CONCAT(author_lname, ' is ', CHAR_LENGTH(author_lname), ' characters long') FROM books;
```

- [SQL Formatter FOR SQL SERVER](http://sql-format.com/)

## [Lecture] Changing Case with UPPER and LOWER

## [Lecture] CODE: Changing Case with UPPER and LOWER

```sql
SELECT UPPER('Hello World');
 
SELECT LOWER('Hello World');
 
SELECT UPPER(title) FROM books;
 
SELECT CONCAT('MY FAVORITE BOOK IS ', UPPER(title)) FROM books;
 
SELECT CONCAT('MY FAVORITE BOOK IS ', LOWER(title)) FROM books;
```

## [Lecture] Note about string functions

## [Lecture] String Function Challenges



## [Lecture] String Function Challenges Solution

## [Lecture] CODE: String Function Challenges Solution
