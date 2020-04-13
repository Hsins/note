# Getting Started: Overview and Installation

## What Is a Database?

一個例子是電話簿，電話簿中存放了電話號碼和號碼持有人資料，除了存放資料之外還提供了按照字母的降序排列來查找持有人和電話。簡單地來說，所謂的 **資料庫（Database）** 有兩個主要的功能：

- 存放資料
- 操作資料

大多數人在談及資料庫（database）時，指的是資料庫和資料庫管理系統（DBMs, Database Management System）結合在一起的概念。應用程式必須透過 DBMs 所提供的接口來存取資料庫，常見的 DBMs 有：

- [MySQL](https://www.mysql.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Oracle Database](https://www.oracle.com/database/)
- [SQLite](https://www.sqlite.org/index.html)
- ...

## [Note] SQL Vs. MySQL

操作非關聯式資料庫管理系統如 MySQL、SQLite、PostgreSQL 時，需要使用 **結構化查詢語言（SQL, Structured Query Language）**，由於 SQL 語言有其規範與標準，因此學會 SQL 便可以讓我們無痛地在不同的資料庫系統間使用。我們必須關切的是不同資料庫系統之間的差異，比如資料存取的性能、實現資料庫所使用的資料結構…等，而不僅僅是 SQL 語言。

其實 SQL 語言的邏輯並不難理解，比如要從資料表中篩選出所有年紀大於或恰為 18 歲的使用者時，不論在那一個非關聯式資料庫中語句都是：

```sql
SELECT * FROM Users WHERE Age >= 18;
```

## [Lecture] Installing MySQL on Cloud9

在 Cloud9 的用戶社區中有一篇由內部員工所撰寫的文章 [Cloud9 Community | Setting Up MySQL](https://community.c9.io/t/setting-up-mysql/1718)，裡面敘述了要如何在 Cloud9 環境下安裝並啟用 MySQL 服務：

```bash
# Start MySQL Service
# (It will create an empty database on first start)
$ mysql-ctl start

# Stop MySQL Service
$ mysql-ctl stop

# Run the MySQL Interactive Shell
$ mysql-ctl cli
```

值得注意的是這些命令行只能在 Cloud9 上運行，在一般的 Linux/Unix 系統上並不支援。進入 MySQL 的交互式介面後若要退出，可以執行 `exit;`、`quit;` 或 `\q;` 命令，或者使用快速鍵 <kbd>Ctrl + c</kbd>

## [Lecture] CODE: Installing MySQL on Cloud9

```sql
mysql-ctl start
mysql-ctl cli
mysql-ctl stop
exit;
quit;
\q;
```

## [Lecture] CODE: Your First MySQL Activity

```sql
help;
show databases;
select @@hostname;
```

## [Lecture] CODE: Mac Installation

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