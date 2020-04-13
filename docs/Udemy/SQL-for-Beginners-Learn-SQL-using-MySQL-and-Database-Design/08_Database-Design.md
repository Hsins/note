# Database Design

## [Lecture] Normalization

**Normalization** is the process of efficiently organizing data in a database.

- To eliminate redundant data.
- To only store related data in a table.

The benefits of Normalization are:

- Reduce storage space.
- Reduce insert, update and deletion anomalies.
- Improve query performance.

There are levels of normalization:

- 1st Normal Form (1NF)
- 2nd Normal Form (2NF)
- 3rd Normal Form (3NF)
- Boyce and Codd Normal Form (BCNF)

## [Lecture] 1st Normal Form (1NF)

- No repeated rows of data
- Columns only contain a single value.
- The table has a primary key.

## [Lecture] 2nd Normal Form (2NF)

- Conform to 1NF
- Every columns that is not a primary key of the table is dependant on the whole of the primary key

## [Lecture] 3rd Normal Form (3NF)

- Conform to 2NF
- Every columns that is not a primary key is only dependant on the whole of the primary key

## [Lecture] Relationships

- One to One: Where a key to one table appears no more than once as the key in another table and vice versa.
- One to Many: Where a primary key of one table can be in multiple rows of a foreign key column of another table.
- Many to Many:

## [Lecture] Constraints

- `NOT NULL`: A column can't contain any NULL values.
- `UNIQUE`: A column can't contain any duplicate values of data.
- `PRIMARY KEY`: A column that uniquely identifies each row of data.
- `FOREIGN KEY`: A column which is related to a primary key in another table.
