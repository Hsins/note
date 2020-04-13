# A Simple Start

## The Hello World Program

首先在資料夾下建立 `main.go` 文件，並創建我們的第一個程式：

```go
package main

import "fmt"

func main() {
		fmt.Println("Hi there!")
}
```

在這一章節中將逐一回答以下的問題：

- 如何運行我們的程式？
- 代碼中的 `package main` 有什麼作用？
- 代碼中的 `import "fmt"` 有什麼作用？
- 代碼中的 `func` 是什麼？
- 創建的 `main.go` 檔案是如何被管理的？

## Go Commands

我們可以在命令行中編譯並執行程式：

```bash
$ go run main.go
```

Go 提供了幾個常見的命令行：

- `go build`: Compiles a bunch of go source code files
- `go run`: Compiles and executes one or two files
- `go fmt`: Formats all the code in each file in the current directory
- `go install`: Compiles and installs a package
- `go get`: Downloads the raw source code of someone else's package
- `go test`: Runs any tests associated with the current project

## Go Packages

在 Go 中 **套件（package）** 的概念與專案（project）、工作區（workspace）同義。在一個專案中，通常會含有許多的 `*.go` 檔案，在這些檔案中必須聲明屬於哪一個套件。套件有兩種型態：

- **可執行套件（Executable package）** 可以產生執行檔供使用者執行，必須使用 `main` 作為套件名稱，且必須含有 `main` 函數。
- **可複用套件（Reusable package）** 類似於其他程式語言中的套件或函數庫概念，為可以複用的邏輯代碼段，名稱可以任意。

上述兩者的差異在於使用 `go build` 進行編譯時，只有可執行套件會產生執行檔。

## The `import` Statements

如果要使用可複用套件（Reusable package），可以使用如 `import "fmt"` 的語句來將其引入，套件 `fmt` 是 Go 的標準函數庫之一，名稱由單字 format 縮寫而得，提供了標準的輸入輸出函數。

我們可以在 [The Go Programming Language
| Packages](https://golang.org/pkg/) 檢視套件資訊。

## File Organization

上述的 `main.go` 給出了常見 Go 代碼的文件邏輯，由上至下必須有這樣的結構：

1. 套件宣告（package declaration）
2. 套件引入（import other packages）
3. 函數宣告（declare functions）
