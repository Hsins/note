# Installation and Setup

## [Lecture] Database, SQL and MySQL

- **Database**: An organised collection of information (data).
- **SQL (Structured Query Language)**: It's a standard language used to communicate with databases. We use SQL to perform tasks on a database.
- **MySQL**: MySQL is a Relational Database Management System that provides a UI for us access and interact with database.

## [Lecture] Relational Database Management System

A relational database is a collection of data organised into tables. Each table contains columns of data categories and rows with particular instances of that data category. For example:

| id | first_name | last_name | gender |
| :--: | :--: | :--: | :--: |
| 1 | Chris | Martin | Male |
| 2 | Emma | Watkins | Female |
| 3 | Mark | Johnson | Male |

The **RDBMS (Relational Database Management System)** is what we use to access and interact with the relational database.

## [Lecture] MySQL Installation

Download from [MySQL Community Downloads](https://dev.mysql.com/downloads/) and install.

## [Lecture] Create Database

```sql
-- Show all databases
SHOW DATABASES;

-- Create Database
CREATE DATABASE test;

USE test;
SHOW TABLES;

-- Drop Database
DROP DATABASE test;
```