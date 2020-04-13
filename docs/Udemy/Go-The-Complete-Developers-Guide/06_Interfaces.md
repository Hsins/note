# Interfaces

## Purpose of Interfaces

### Question

在前面我們提到了 `type` 以及屬於該 `type` 的成員函數，比如說：

- `func (d deck) shuffle() {}` 只能被 `deck` 類型所使用
- `func (s []float64) shuffle() {}` 只能被 `[]float64` 類型所使用
- `func (s []string) shuffle() {}` 只能被 `[]string` 類型所使用
- ...

想像一種情境，當今天要撰寫處理不同語言的機器人 `englishBot` 和 `spanishBot`，他們之中有些函數的邏輯是重複的，有些則不一樣，那麼怎樣進行開發才是適合的？

### Problems Without Interfaces

```go
package main

type englishBot struct{}
type spanishBot struct{}

func main() {
	eb := englishBot{}
	sb := spanishBot{}

	printGreeting(eb)
	printGreeting(sb)
}

func (englishBot) getGreeting() string {
	return "Hi There!"
}

func (spanishBot) getGreeting() string {
	return "Hola!"
}

func printGreeting(eb englishBot) {
	fmt.Println(eb.getGreeting())
}

func printGreeting(sb spanishBot) {
	fmt.Println(sb.getGreeting())
}
```

### Interfaces in Practice

```go
package main

import "fmt"

type bot interface {
	  getGreeting() string
}

type englishBot struct{}
type spanishBot struct{}

func main() {
	  eb := englishBot{}
	  sb := spanishBot{}

	  printGreeting(eb)
	  printGreeting(sb)
}

func printGreeting(b bot) {
	  fmt.Println(b.getGreeting())
}

func (englishBot) getGreeting() string {
	  return "Hi There!"
}

func (spanishBot) getGreeting() string {
	  return "Hola!"
}
```

## Rules of Interfaces

### Syntax

接口（interface）是只有方法宣告，但不在宣告中實作方法資料型別。比如：

```go
type user struct {
    name string
}

type bot interface {
    getGreeting(string, int) (string, error)
    getBotVersion() float64
    respondToUser(user) string
}
```

- `interface` 並不是泛型（generic）型別
- `interface` 是隱式繼承的，不需要明白地寫出自定義的 `type` 滿足某些 `interface`

### Concrete Type and Interface Type

- Concrete Type: `map`、`struct`、`int`、`string`、`englishBot`
- Interface Type: `bot`

## Web Requesting Project

### Project Overview

為了更近一步了解與實作 `interface`，在接下來的內容中將會使用標準函數庫中現有的 `interface` 來一步步進行介紹。這個簡單的專案將會使用 [`net`](https://golang.org/pkg/net/) 套件來處理 HTTP 請求。

### The `ReadCloser` Interface

從官方文檔給處的 [範例](https://golang.org/pkg/net/http/#Get) 我們不難寫出以下的代碼：

```go
func main() {
	resp, err := http.Get("http://google.com")
	if err != nil {
		fmt.Println("Error: ", err)
		os.Exit(1)
	}

	fmt.Println(resp)
}
```

當我們運行上述代碼時，可以看到輸出的結果的確是有發起請求並獲得回應，但是卻沒有輸出 `body` 的內容。這是由於我們所輸出的是一個 `Response` 結構，由 [文件](https://golang.org/pkg/net/http/#Response) 可以看到我們所需要的 `Body` 欄位是一個 [`ReadCloser`](https://golang.org/pkg/io/#ReadCloser) 接口。

然而這個接口的實現與我們前面所介紹的語法看起來略有不同，其中只有另外的兩個接口 [`Reader`](https://golang.org/pkg/io/#Reader) 和 [`Closer`](https://golang.org/pkg/io/#Closer)。整體的結構將如下圖所示：

![Response Struct](https://user-images.githubusercontent.com/26391143/76144407-f6dbb980-60ba-11ea-8189-09cdd0501c4b.png)

### More Interface Syntax

- 接口（interface）可以被作為型別放在結構體（struct）中
- 只要類型的方法實現的接口（interface）中的定義，就滿足該接口

### Working with the Read Function

```go
func main() {
	resp, err := http.Get("http://google.com")
	if err != nil {
		fmt.Println("Error: ", err)
		os.Exit(1)
	}

	bs := make([]byte, 99999)
	resp.Body.Read(bs)
	fmt.Println(string(bs))
}
```

### A Custom Writer

```go
type logWriter struct{}

func main() {
	resp, err := http.Get("http://google.com")
	if err != nil {
		fmt.Println("Error: ", err)
		os.Exit(1)
	}

	lw := logWriter{}

	io.Copy(lw, resp.Body)
}

func (logWriter) Write(bs []byte) (int, error) {
	fmt.Println(string(bs))
	fmt.Println("Just wrote this many bytes: ", len(bs))
	return len(bs), nil
}
```
