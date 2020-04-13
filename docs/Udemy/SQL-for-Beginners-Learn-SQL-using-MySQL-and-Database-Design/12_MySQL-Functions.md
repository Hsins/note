# MySQL Functions - String Functions and Date Functions

## [Lecture] Concatenation

```sql
-- CONCAT
-- SELECT CONCAT(<COLUMN_NAME | STRING>, <COLUMN_NAME |STRING>, ...) AS <ALIAS_NAME> FROM <TABLE_NAME>;
SELECT CONCAT(first_name, last_name) AS full_name FROM customers;
SELECT CONCAT(first_name, " ", last_name) AS full_name FROM customers;
```

## [Lecture] Substrings

```sql
-- SUBSTRING
-- SELECT SUBSTRING(<COLUMN_NAME | STRING>, <START>, <LENGTH>)
SELECT SUBSTRING(name, 1, 3) AS short_name FROM films;
SELECT SUBSTRING(name, 5, 4) AS short_name FROM films;
SELECT SUBSTRING(name, -2, 5) AS short_name FROM films;
```

## [Lecture] Uppercase and Lowercase

```sql
-- UPPER and LOWER
-- SELECT UPPER(<COLUMN_NAME | STRING>)
-- SELECT LOWER(<COLUMN_NAME | STRING>)
SELECT UPPER(name) AS name FROM rooms;
SELECT LOWER(name) AS name FROM rooms;
```

## [Lecture] Date, Month and Year Function

```sql
-- Example: DATE
SELECT DATE('2018-06-05 07:45:32');
SELECT DATE(start_time) FROM screenings;

-- Example: MONTH
SELECT MONTH('2018-06-05 07:45:32');
SELECT MONTH(start_time) FROM screenings;

-- Example: YEAR
SELECT YEAR('2018-06-05 07:45:32');
SELECT YEAR(start_time) FROM screenings;
```