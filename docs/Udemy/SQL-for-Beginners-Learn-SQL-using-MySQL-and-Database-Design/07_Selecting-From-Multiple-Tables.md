# Selecting From Multiple Tables

## [Lecture] What are JOINS

JOINS allow you to retrieve data from multiple tables in a single select statement. To join two tables, there needs to be a related column between them.

## [Lecture] INNER JOIN

Retrieve data only there is matching values in both tables.

```sql
-- Example 01
SELECT products.name, orders.order_time FROM orders
INNER JOIN products ON orders.product_id = products.id;

-- Example 02
SELECT p.name, p.price, o.order_time FROM orders o
JOIN products p ON o.product_id = p.id
WHERE o.product_id = 5
ORDER BY o.order_time;
```

### LEFT JOIN

Retrieve all data from the left table and matching rows from the right table.

```sql
-- Example
SELECT o.id, c.phone_number, c.last_name, o.order_time FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
ORDER BY o.order_time
LIMIT 10;
```

### RIGHT JOIN

Retrieve all data from the right table and matching rows from the left table.

```sql
-- Example
SELECT o.id, c.phone_number, c.last_name, o.order_time FROM orders o
RIGHT JOIN customers c ON o.customer_id = c.id
ORDER BY o.order_time
LIMIT 10;
```