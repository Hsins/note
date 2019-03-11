# Section 02 - Getting Started: Overview and Installation

## Table of Contents

- [Section Introduction]()
- [What Is a Database?]()
- [SQL Vs. MySQL]()
- [Installation Overview - WATCH BEFORE INSTALLING]()
- [Cloud9 Registration IMPORTANT - PLEASE READ!!!]()
- [Setting Up Cloud9]()
- [Exploring The Cloud9 Interface]()
- [Cloud9 Interface Challenge]()
- [Installing MySQL on Cloud9]()
- [CODE: Installing MySQL on Cloud9]()
- [Your First MySQL Activity]()
- [CODE: Your First MySQL Activity]()
- [Mac Installation]()
- [CODE: Mac Installation]()
- [Windows Installation]()

## [Lecture] Section Introduction

這一小節將會介紹什麼是資料庫？SQL 和 MySQL 之間的差異？如何建置環境？

## [Lecture] What Is a Database?

Colt 在這邊舉例的是電話簿，電話簿存放了電話號碼和號碼對應的持有人資料，除了存放資料之外還提供了照字母的降序排列來查找對應的持有人和電話。所以說 **資料庫（Database）** 有兩個主要的功能：

1. 儲存資料
2. 操縱與存取資料

然而其實大多數人談及資料庫時，是將資料庫和資料庫管理系統（DBMs, Database Management System）合在一起說：

<p align="center">
  <img src="https://i.imgur.com/nznUXAL.png">
</p>

當我們的應用程式要存取資料庫時，必須透過資料庫管理系統提供的接口來進行操作，常見的資料庫系統包含但不限於：

- [MySQL](https://www.mysql.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Oracle Database](https://www.oracle.com/database/)
- [SQLite](https://www.sqlite.org/index.html)
- ...

## [Lecture] SQL Vs. MySQL

在操作非關聯式資料庫管理系統如 MySQL、SQLite、PostgreSQL 時，所使用的語言為 **結構化查詢語言（SQL, Structured Query Language）**，由於 SQL 語言有其特定標準，因此學會使用 SQL 可以使我們無痛地在不同的資料庫系統間使用，值得注意的是不同的資料庫系統之間的差異在於存取方式和特點，而不是語言。

其實 SQL 語言的邏輯並不難理解，比如要從資料表中篩選出所有年紀大於或恰為 18 歲的使用者時，不論在那一個非關聯式資料庫中語句都是：

```sql
SELECT * FROM Users WHERE Age >= 18;
```

## [Lecture] Installation Overview - WATCH BEFORE INSTALLING

這門課中將會說明三種安裝 MySQL 的方式，分別是在 Microsoft Windows 作業系統、Mac OS 作業系統和 Cloud 9 環境進行安裝。由於安裝時會遇到不少問題，因此 Colts 比較建議在上課過程中使用 Cloud 9 進行操作，等到課程完成之後有相關需求再安裝到本機端。

## [Lecture] Cloud9 Registration IMPORTANT - PLEASE READ!!!

在後續的過程中，將使用雲端集成開發環境 [Cloud9](https://c9.io/) 服務，但自 2016 年這項服務被亞馬遜收購後，必須綁定信用卡，不過可以透過在 [連結](https://wdb-c9-invite.herokuapp.com/) 中填寫信箱獲得原始的註冊邀請。

## [Lecture] Setting Up Cloud9

帳號申請之後在 Cloud 9 創建一個名為 `mysql_course` 的工作區（wordspace），接下來的課程都將在這個工作區中進行操作。

## [Lecture] Exploring The Cloud9 Interface

設置好的 Cloud 9 介面將如下所示：

<p align="center">
  <img src="https://i.imgur.com/aY15MW2.png">
</p>

- 上方為導覽列
- 左方為資料夾列
- 右方為編輯器欄
- 下方為命令行欄

## [Lecture] Cloud9 Interface Challenge

熟悉一下 Cloud 9 的環境並嘗試進行以下操作：

- Make a new folder in cloud9
- Make 2 new files in that folder
- Add some text to one of the files
- Delete both files
- Delete the folder

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

## [Lecture] Your First MySQL Activity

嘗試在 MySQL 交互式介面進行以下操作並看一下回傳的結果。

## [Lecture] CODE: Your First MySQL Activity

```sql
help;
show databases;
select @@hostname;
```

## [Lecture] Mac Installation

Colt 不建議初次使用就直接在本機端上安裝 MySQL，建議使用 Cloud 9 進行後續課程的學習與操作，此處暫略。

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

## [Lecture] Windows Installation

Colt 不建議初次使用就直接在本機端上安裝 MySQL，建議使用 Cloud 9 進行後續課程的學習與操作，此處暫略。