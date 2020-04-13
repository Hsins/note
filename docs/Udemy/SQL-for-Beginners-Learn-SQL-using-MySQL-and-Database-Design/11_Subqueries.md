# Subqueries

## [Lecture] What are Subqueries

Subqueries are queries nested within other queries. We can use subqueries in a `SELECT`, `INSERT`, `UPDATE` or `DELETE` query. Besides, the nested query can be in the `WHERE` clause or the `FROM`. There are two types of subquery:

- **Non-correlated Subquery**: a subquery that is independent of the outer query and it can executed on its own without relying on main outer query.
- **Correlated Subquery**: an inner subquery which is referenced by the main outer query such that the inner query is considered as being executed repeatedly.

## [Lecture] Non-correlated Subquery

```sql
-- Example 1
SELECT first_name, last_name, email FROM customers
WHERE id IN (
  SELECT customer_id FROM bookings
  WHERE screening_id = 1
);

-- Example 2
SELECT AVG(no_seats), MAX(no_seats) FROM (
  SELECT booking_id, COUNT(seat_id) AS no_seats FROM reserved_seat
  GROUP BY booking_id
);
```

## [Lecture] Correlated Subquery

```sql
SELECT screening_id, customer_id, (SELECT reserved_seat WHERE booking_id = b.id)
FROM bookings b
ORDER BY screening_id;
```