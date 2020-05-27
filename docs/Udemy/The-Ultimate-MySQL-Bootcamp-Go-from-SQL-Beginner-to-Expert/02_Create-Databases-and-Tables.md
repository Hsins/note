# Create Databases and Tables

## [Lecture] Creating Databases

<p align="center">
  <img src="https://i.imgur.com/OkWgt0c.png">
</p>

如上圖所示，我們在一台伺服器上所啟動的資料庫服務中通常會同時包含了許多不同的資料庫。因為這些資料可能屬於不同的資料庫：

<p align="center">
  <img src="https://i.imgur.com/4P0ACwl.png">
</p>

我們使用 `CREATE DATABASE <name>;` 命令在 MySQL 交互式介面下創建資料庫，其中 `<name>` 填入資料庫名稱，命名時建議使用底線 `_` 取代減號 `-`，儘量避免空白並統一命名規則。

## [Lecture] CODE: Creating Databases

```sql
-- Start the CLI:
mysql-ctl cli;

-- List available databases:
show databases;

-- The general command for creating a database:
-- CREATE DATABASE <database_name>;
CREATE DATABASE soap_store;
```

## [Lecture] Dropping Databases

我們使用 `DROP DATABASE <name>;` 命令在 MySQL 交互式介面下刪除既有的資料庫，其中 `<name>` 填入資料庫名稱。

## [Lecture] CODE: Dropping Databases

```sql
-- To drop a database:
-- DROP DATABASE <database_name>; 
DROP DATABASE hello_world_db;
```

## [Lecture] Using Databases

創建好資料庫之後，我們使用 `USE <database name>;` 命令在選擇要使用的資料庫；而 `SELECT database();` 命令可以告知我們當前選擇的是哪一個資料庫。

## [Lecture] CODE: Using Databases

```sql
-- Choose what database to be used:
-- USE <database name>;
USE dog_walking_app;
SELECT database();
```

## [Lecture] Introduction to Tables

非關聯性資料庫由一張張的資料 **表（table）** 所構成，舉例來說一張存放貓咪資料的資料表可能如下所示：

| Name | Breed | Age |
| :--: | :-- | :--: |
| Blue | Scottish Fold | 1 |
| Rocket | Persian | 3 |
| Monty | Tabby | 10 |
| Sam | Munchkin | 5 |

其中 `Name`、`Bredd` 和 `Age` 稱為 **表頭（headers）** 或 **欄（columns）**，而實際存放的資料稱為 **列（rows）**。

## [Lecture] The Basic Datatypes

在進行資料庫建置時，表中通常會限制資料型態來使得處理上具有一致性，在 MySQL 提供了以下的資料型態：

- **數字型態（Numeric Types）**：`INT`、`SMALLINT`、`TINYINT`、`MEDIUMINT`、`BIGINT`、`DECIMAL`、`NUMERIC`、`FLOAT`、`DOUBLE`、`BIT`…等。
- **字串型態（String Types）**：`CHAR`、`VARCHAR`、`BINARY`、`VARBINARY`、`BLOB`、`TINYBLOB`、`MEDIUMBLOB`、`LONGBLOB`、`TEXT`、`TINYTEXT`、`MEDIUMTEXT`、`LONGTEXT`、`ENUM`…等。
- **日期型態（Data Types）**：`DATE`、`DATETIME`、`TIMESTAMP`、`TIME`、`YEAR`…等。

其中比較常用的是用以表示數字（最大可以表示到 4294967295）的 `INT` 整數型態以及表示字串長度在 255 內的 `VARCHAR` 短字串型態。

## [Lecture] Note about INT max size

在前一小節中，對於整數型態 `INT` 的大小限制會涉及到有無符號而有所區別，建議可以參考 [stackoverflow | What does “unsigned” in MySQL mean and when to use it?](https://stackoverflow.com/questions/3895692/what-does-unsigned-in-mysql-mean-and-when-to-use-it/3895705#3895705) 中的說明。

## [Lecture] Basic Datatypes Challenge

如果我們要建置一個存放 Tweets 資料的資料庫，嘗試規劃一下以下資料採用 MySQL 的資料型態：

- A username (max 15 chars)
- The tweet content (max 140 chars)
- Number of favorites

## [Lecture] Basic Datatypes Challenge - Solution

| Username | Content | Favorites |
| :--: | :-- | :-- |
| `VARCHAR(15)` | `VARCHAR(140)` | `INT` |
| `coolguy` | `my first tweet` | 1 |
| `guitar_queen` | `I love music:)` | 1 |
| `lonely_heart` | `still looking 4 love` | 0 |


## [Lecture] Creating Your Own Tables

在 MySQL 中，我們使用 `CREATE TABLE <tablename> (column_name data_type);` 命令來建置資料表並指定標頭以及所使用的資料型態。

## [Lecture] CODE: Creating Your Own Tables

```sql
-- To Create a Table
-- CREATE TABLE tablename 
--  ( 
--     column_name data_type, 
--     column_name data_type
--  ); 
-- Create a cats Table
CREATE TABLE cats
  (
    name VARCHAR(100),
    age INT
  );
```

## [Lecture] How Do We Know It Worked?

當我們創建好資料表後，可以使用 `SHOW <tablename>;` 來顯示既有的資料表，而 `SHOW COLUMNS FROM <tablename>;` 則可以列出表中的欄位，除此之外也可以使用 `DESC <tablename>;`，但值得注意的是雖然目前 `DESC` 和 `SHOW COLUMNS FROM` 所得到的結果看起來是相同的，但這兩個命令之間並不完全相等。

## [Lecture] CODE: How Do We Know It Worked?

```sql
SHOW TABLES;
 
SHOW COLUMNS FROM tablename;
 
DESC tablename;
```

## [Lecture] Dropping Tables

如果要刪除既有的資料表，使用 `DROP TABLE <tablename>;` 命令。

## [Lecture] CODE: Dropping Tables

```SQL
-- Dropping Tables
-- DROP TABLE <tablename>; 
DROP TABLE cats; 
```

## [Lecture] Creating Your Own Tables Challenge

使用這一章節學到的命令，完成以下目標：

- Create a pastries table
- It should include 2 columns:
  - `name` (50 characters max)
  - `quantity`
- Inspect your table/columns in the CLI
- Delete your table!

## [Lecture] CODE: Creating Your Own Tables Challenge

```sql
CREATE TABLE pastries
  (
    name VARCHAR(100),
    quantity INT
  );
 
SHOW TABLES;
 
DESC pastries;
 
DROP TABLE pastries;
```
