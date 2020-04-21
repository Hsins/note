# Basics

## Boolean Expressions

### `or`

在 `a or b` 的陳述式中，如果 `a` 是一個真值（truthy value），返回 `a`；否則返回 `b`。其中常見的假值（falsy value）可以參考文件 [Truth Value Testing](https://docs.python.org/3/library/stdtypes.html#truth-value-testing)：

- constants defined to be false: `None` and `False`.
- zero of any numeric type: `0`, `0.0`, `0j`, `Decimal(0)`, `Fraction(0, 1)`
- empty sequences and collections: `''`, `()`, `[]`, `{}`, `set()`, `range(0)`

```python
a, b = 0, 42
a or b        # output: 42

a, b = '', 0
a or b        # output: 0

# Inspiring Example
"""connect with a non-empty linked list"""
cur.next = l1 or l2
```

In a linked list assignment, if at most one of the two candidate nodes is not None, we can use or expression.

### `and`

### Lazy Evaluation
