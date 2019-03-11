# Section 06 - CRUD Challenge Section

## 089, Section 6 Introduction

在這一章節將會有許多的習題，來複習並檢測前面單元所學習的內容。

## 090, CRUD Exercise Overview

1. Create a new database `shirts_db`
2. Create a new table `shirts`

<p align="center">
    <img src="https://i.imgur.com/jvMpfQc.png"/>
  </a>
</p>

3. Get All That Data In There

    ```sql
    ('t-shirt', 'white', 'S', 10),
    ('t-shirt', 'green', 'S', 200),
    ('polo shirt', 'black', 'M', 10),
    ('tank top', 'blue', 'S', 50),
    ('t-shirt', 'pink', 'S', 0),
    ('polo shirt', 'red', 'M', 5),
    ('tank top', 'white', 'S', 200),
    ('tank top', 'blue', 'M', 15)
    ```
    
4. Add A New Shirt: Purple polo shirt, size M last worn 50 days ago
5. SELECT all shirts: But Only Print Out Article and Color
6. SELECT all medium shirts: Print Out Everything But shirt_id
7. Update the shirt last worn 15 days ago: Change last_worn to 0
8. Update all white shirts: Change size to 'XS' and color to 'off white'
9. Delete all old shirts: Last worn 200 days ago
10. Delete all tank tops: Your tastes have changed...
11. Delete all shirts: Catastrophe!
12. Drop the entire shirts table: Catastrophe Again!

## 091, CRUD Exercise Create Solution

詳見下一則筆記。

## 092, CODE: CRUD Exercise Create Solution

```sql
-- Exercise 01
CREATE DATABASE shirts_db;

-- Exercise 02
use shirts_db;

CREATE TABLE shirts
  (
    shirt_id INT NOT NULL AUTO_INCREMENT,
    article VARCHAR(100),
    color VARCHAR(100),
    shirt_size VARCHAR(100),
    last_worn INT,
    PRIMARY KEY(shirt_id)
  );

DESC shirts;

-- Exercise 03
INSERT INTO shirts(article, color, shirt_size, last_worn) VALUES
('t-shirt', 'white', 'S', 10),
('t-shirt', 'green', 'S', 200),
('polo shirt', 'black', 'M', 10),
('tank top', 'blue', 'S', 50),
('t-shirt', 'pink', 'S', 0),
('polo shirt', 'red', 'M', 5),
('tank top', 'white', 'S', 200),
('tank top', 'blue', 'M', 15);
 
-- Exercise 04
INSERT INTO shirts(color, article, shirt_size, last_worn) 
VALUES('purple', 'polo shirt', 'medium', 50);
```

## 093, CRUD Exercise Read Solution

詳見下一則筆記。

## 094, CODE: CRUD Exercise Read Solution

```sql
-- Exercise 05
SELECT article, color FROM shirts;

-- Exercise 06
SELECT * FROM shirts WHERE shirt_size='M';
SELECT article, color, shirt_size, last_worn FROM shirts WHERE shirt_size='M';
```

## 095, CRUD Exercise Update Solution

詳見下一則筆記。

## 096, CODE: CRUD Exercise Update Solution

```sql
-- Exercise 07
UPDATE shirts SET last_worn=0
WHERE last_worn=15;
 
-- Exercise 08
UPDATE shirts SET color='off white', shirt_size='XS'
WHERE color='white';
```

## 097, CRUD Exercise Delete Solution

詳見下一則筆記。

## 098, CODE: CRUD Exercise Delete Solution

```sql
-- Exercise 09
DELETE FROM shirts
WHERE last_worn=200;
 
-- Exercise 10
DELETE FROM shirts
WHERE article='tank top';
 
-- Exercise 11
DELETE FROM shirts;
 
-- Exercise 12
DROP TABLE shirts;
```
