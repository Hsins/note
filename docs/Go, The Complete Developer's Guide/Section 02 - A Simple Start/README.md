# Section 02 - A Simple Start

## Table of Contents

- [Section 02 - A Simple Start](#section-02---a-simple-start)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] Boring Ol' Hello World](#lecture-boring-ol-hello-world)
  - [[Lecture] Five Important Questions](#lecture-five-important-questions)
  - [[Lecture] Go Packages](#lecture-go-packages)
  - [[Lecture] Import Statements](#lecture-import-statements)
  - [[Lecture] File Organization](#lecture-file-organization)
  - [[Lecture] How to Access Course Diagrams](#lecture-how-to-access-course-diagrams)

## [Lecture] Boring Ol' Hello World

首先在資料夾下建立 `main.go` 文件，並創建我們的第一個程式：

```go
package main

import "fmt"

func main() {
	fmt.Println("Hi there!")
}
```

在這一章節中將逐行解釋並回答以下的問題：

- How do we run the code in our project?
- What does `package main` mean?
- What does `import "fmt"` mean?
- What's that `func` thing?
- How is the `main.go` file organized?

## [Lecture] Five Important Questions

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

## [Lecture] Go Packages

為什麼要使用 `package main`？在 Go 中 **套件（package）** 的概念與專案（project）、工作區（wordspace）同義，在一個專案中通常會含有許多的 `*.go` 源文件檔案，在這些檔案中必須聲明屬於哪一個套件。套件有兩種型態：

- **可執行套件（Executable package）**：可以產生執行檔供使用者執行，必須使用 `main` 作為套件名稱，且必須含有 `main` 函數。
- **可複用套件（Reusablepackage）**：類似於其他程式語言中的套件或函數庫概念，為可以複用的邏輯代碼段，名稱可以任意。

上述兩者的差異在於使用 `go build` 進行編譯時，只有可執行套件會產生執行檔。

## [Lecture] Import Statements

如果要使用可複用套件時，可以使用如 `import "fmt"` 的語句來將其引入，套件 `fmt` 是 Go 的標準函數庫之一，名稱由單字 format 縮寫而得，提供了標準的輸入輸出函數。我們可以在 [The Go Programming Language
 | Packages](https://golang.org/pkg/) 檢視套件資訊。

## [Lecture] File Organization

上述的 `main.go` 給出了常見 Go 代碼的文件邏輯，由上至下必須有這樣的結構：

1. 套件宣告（package declaration）
2. 套件引入（import other packages）
3. 函數宣告（declare functions）

## [Lecture] How to Access Course Diagrams

如果要使用課程中的圖片，可以到 [GitHub | StephenGrider/GoCasts](https://github.com/StephenGrider/GoCasts) 中下載 `*.xml` 檔案至 [Draw.io](https://www.draw.io/) 中匯入。