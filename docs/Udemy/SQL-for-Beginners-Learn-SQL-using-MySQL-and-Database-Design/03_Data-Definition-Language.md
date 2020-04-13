# Data Definition Language

## [Lecture] DDL (Data Definition Language)

The **DDL (Data Definition Language)** deals with the creation of database objects such as tables and views.

## [Lecture] Data Types

### Numeric Data Types

- `INT`: Whole numbers
- `FLOAT`: Decimal numbers (approximate)
- `DECIMAL`: Decimal numbers (precise)

### Non-Numberic Data Types

- `CHAR`: Fixed length character
- `VARCHAR`: Varying length character
- `ENUM`: Value from a defined list
- `BOOLEAN`: True or False values

### Date and Time Types

- `DATE`: Date (YYYY-MM-DD)
- `DATETIME`: Date and the time (YYYY-MM-DD HH-MM-SS)
- `TIME`: Time (HHH-MM-SS)
- `YEAR`: Year (YYYY)

## [Lecture] Primary Key and Foreign Key

### Primary Key

- A **Primary Key** is a column, or set of columns, which uniquely identifies a record with a table.
- A **Primary Key** must be unique.
- A **Primary Key** cannnot be NULL.
- A table can only have one **Primary Key**.

### Foreign Key

- A **Foreign Key** is used to link two tables together.
- A **Foreign Key** is a column whose values match the values of another tables primary key column.
- The table with the primary key is called the reference, or parent, table and the table with the foreign key is called the child table.
- A table can have multiple foreign keys.

## [Lecture] Create the Coffee Store Database

```sql
-- Create the Coffee Store database
CREATE DATABASE coffee_store;

USE coffee_store;
CREATE TABLE products (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(30),
	price DECIMAL(3, 2)
);

CREATE TABLE customers (
	id INT AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	gender ENUM('M', 'F'),
	phone_number VARCHAR(11)
);

CREATE TABLE orders (
	id INT AUTO_INCREMENT PRIMARY KEY,
	product_id INT,
	customer_id INT,
	order_time DATETIME,
	FOREIGN KEY (product_id) REFERENCES products(id),
	FOREIGN KEY (customer_id) REFERENCES customers(id)
);
```

## [Lecutre] Add and Remove Columns from a Table

```sql
-- Add Column
ALTER TABLE products
ADD COLUMN coffee_origin VARCHAR(30);

-- Delete Column
ALTER TABLE products
DROP COLUMN coffee_origin;
```

## [Lecture] Delete Tables

```sql
DROP TABLE test;
```

## [Lecture] Truncate Tables

```sql
TRUNCATE TABLE test;
```