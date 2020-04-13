# More On Alter Table

## [Lecture] Add and Remove Primary Key

```sql
-- Add Primary Key to a Table
ALTER TABLE <TABLE_NAME>;
ADD PRIMARY KEY (<COLUMN_NAME>);

-- Remove Primary Key from a Table
ALTER TABLE <TABLE_NAME>;
DROP PRIMARY KEY;
```

## [Lecture] Add and Remove Foreign Key

```sql
-- Add Foreign Key to a Table
ALTER TABLE <TABLE_NAME>
ADD CONSTRAINT <CONSTRAINT_NAME>
FOREIGN KEY (<COLUMN_NAME>) REFERENCES <TABLE_NAME>(<COLUMN_NAME>);

-- Remove Foreign Key from a Table
ALTER TABLE <TABLE_NAME>
DROP FOREIGN KEY <CONSTRAINT_NAME>;
```

## [Lecture] Add Unique Constraint

```sql
-- How to Add a Unique Constraint to a Column
ALTER TABLE <TABLE_NAME>
ADD CONSTRAINT <CONSTRAINT_NAME> UNIQUE (<COLUMN_NAME>);

-- How to Remove a Unique Constraint from a Column
ALTER TABLE <TABLE_NAME>
DROP INDEX <CONSTRAINT_NAME>;
```

## [Lecture] Change Column Name

```sql
ALTER TABLE <TABLE_NAME> CHANGE `OLD_COLUMN_NAME` `NEW_COLUMN_NAME` <DATA_TYPE>;
```

## [Lecture] Change Column Data Type

```sql
ALTER TABLE <TABLE_NAME> MODIFY <COLUMN_NAME> <DATA_TYPE>;
```