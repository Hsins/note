# Maps

## What is Map?

在 Go 語言中，提供了 `map` 這樣的鍵值對（key-value pairs）集合資料型別，如果有其他程式語言的開發經驗，它近似於 Ruby 中的 `hash` 型別、JavaScript 中的 `object` 或 Python 中的 `dict`⋯⋯。

值得一提的是：

- 在 `map` 型別中，所有的 `key` 必須為相同型別
- 在 `map` 型別中，所有的 `value` 必須為相同型別
- 在 `map` 型別中，所有的 `key` 和 `value` 可以為不同型別

## Manipulating Maps

### Define and Declare maps

```go
// [Method 1] Using built-in make() function
colors := make(map[string]string)
colors["red"] = "#ff0000"
colors["green"] = "#4bf745"

// [Method 2] Using a map literal
colors := map[string]string{
    "red":   "#ff0000",
    "green": "#4bf745",
}

// [Method 3] using the var key word
var colors map[string]string
colors["red"] = "#ff0000"
colors["green"] = "#4bf745"
```

### Delete a Key from a Map

```go
delete(colors, "red")
```

## Iterating Over Maps

```go
func printMap(c map[string]string) {
		for color, hex := range c {
				fmt.Println("Hex code for", color, "is", hex)
		}
}
```

## Differences Between Maps and Structs

### Maps

- 所有的鍵（keys）都必須為同一種型別，用以表示相同屬性的集合
- 所有的值（values）都必須為同一種型別，編譯時不需要知道所有的鍵
- 鍵（keys）可以作為索引，透過鍵值可以進行遍歷
- 屬於參考型別（Reference Type），在傳遞時會回傳參考到原來的實例

### Structs

- 存放的數值可以為不同型別，在編譯時必須知道不同欄位儲存的內容
- 不能夠透過鍵（keys）進行索引，用來表示一件有著不同屬性的事物
- 屬於實值型別（Value Types），在傳遞時會創建一個新的實利
