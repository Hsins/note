# Deeper Into Go

## Project Overview

在接下來的內容中，將會使用 Go 創建一個簡單的模擬卡牌遊戲，並完善以下功能：

- `newDeck`: Create a list of playing cards. Essentially an array of strings.
- `print`: Log out the contents of a deck of cards.
- `shuffle`: Shuffles all the cards in a deck.
- `deal`: Create a 'hand' of cards.
- `saveToFile`: Save a list of cards to a file on the local machine.
- `newDeckFromFile`: Load a list of cards from the local machine.

## Variable Declarations

### Dynamic Types and Static Types

程式語言按照類型檢查可以分成 **靜態類型（Static Types）** 和 **動態類型（Dynamic Types）** 兩類。在目前流行的程式語言中：

- 靜態類型（Static Types）：Java, C/C++, **Go**
- 動態類型（Dynamic Types）：Python, JavaScript, Ruby

靜態語言在程式進行編譯時就進行了類型檢查，因此不需要在執行時處理類型的儲存和檢查問題，可以節省程式運行的時間和空間。而動態語言在撰寫時，可以不用聲明變數要儲存的資料類型，大大地提高了開發的效率。

### Basic Types in Go

在 GO 中，基礎的資料型別有：`bool`、`string`、`int`、`float64`⋯⋯ 等。

### Variable Declaration in Go

在 Go 中的變數宣告，可以使用 `:=` 運算符號來簡化原來的 `var VAR_NAME TYPE = LITERALS`：

```go
// 變數宣告
var card string = "Ace of Spades"

// 變數宣告（編譯器根據字面值決定資料型別）
card := "Ace of Spades"

// 變數賦值
card = "Five of Diamonds"
```

## Functions and Return Types

以下函數 `newCard()` 在被呼叫時，會返回一個字串：

```go
// 函數 newCard() 呼叫時，返回的資料型別為字串（string）
func newCard() string {
	return "Five of Diamonds"
}
```

## Slices and For Loops

### Array and Slice

在 Go 中，可以使用 `array` 或 `slices` 類型來儲存一組資料：

- `array`: 固定長度的陣列
- `slice`: 可變長度的陣列，其中元素必須是相同的資料型別

### For Loops with Slices

```go
cards := []string{"Ace of Diamonds", "Five of Spades"}
cards = append(cards, "Six of Spades")

for i, card := range cards {
    fmt.Println(i, card)
}
```

## Object-Orient Approach vs Go Approach

### Object-Orient Approach

### Go Approach

由於 Go 並不是一個物件導向型的程式語言，如果要實作我們的卡牌專案，我們實際要考慮的是使用 Go 的基礎資料型別，構建一個自定義的類型（type），延伸其功能與概念。因此我們的專案資料夾下應該存放以下三個檔案：

- `main.go`: Code to create and manipulate a deck
- `deck.go`: Code that describes what a deck is and how it works
- `deck_test.go`: Code to automatically test the deck

## Custom Type Declarations and Receiver Functions

以下代碼構建了一個 `deck` 類型，並對類型 `deck` 定義了成員方法 `print()`：

```go
package main

import "fmt"

func main() {
		cards := deck{"Ace of Diamonds", "Five of Hearts."}
		cards = append(cards, "Six of Spades")

		cards.print()
}

// Create a new type of 'deck', which is a slice of strings
type deck []string

func (d deck) print() {
		for i, card := range d {
				fmt.Println(i, card)
		}
}
```

- 類型 `deck` 稱為成員方法的 receiver type
- 在上述代碼中 `d` 表示任意 `deck` 類型的值，也可以採用其他名稱，但在 Go 中會儘量避免 `this` 和 `self`

## Creating a New Deck

```go
func newDeck() deck {
		cards := deck{}

		cardSuits := []string{"Spades", "Diamonds", "Hearts", "Clubs"}
		cardValues := []string{"Ace", "Two", "Three", "Four", "Five", "Six"}

		for _, suit := range cardSuits {
				for _, value := range cardValues {
						cards = append(cards, value+" of "+suit)
				}
		}

		return cards
}
```

在 Go 的 for 循環語句中，變數都必須被使用到，如果使用了 `i` 或 `j` 卻沒有在後面的陳述句中使用，會編譯失敗。如果索引值在循環中不需要使用到，則使用 `_` 作為變數名稱。

## Multiple Return Values

```go
// deal()
func deal(d deck, handSize int) (deck, deck) {
		return d[:handSize], d[handSize:]
}
```

## Saving Data to the Hard Drive

### `WriteFile()` Function in `ioutil` Package

讀寫檔案使用的是 [`ioutil`](https://golang.org/pkg/io/ioutil/) 套件，其中 `WriteFile()` 函數用來將資料寫入檔案：

```go
func WriteFile(filename string, data []byte, perm os.FileMode) error
```

- `filename` 字串表示要寫入的檔案
- `data` 是位元組所組成的 `slice` 型別
- `perm` 表示讀取與寫入的許可權限

### Byte and String

在 Go 中，字串是由唯獨的 UTF-8 編碼位元組所組成切片（也因此如果使用 `len()` 函數所獲取到的不是字元個數，而是位元組個數）。關於 UTF-8 或 ASCII 編碼的對應關係表可以查看：

- [ASCII Table](http://www.asciitable.com/)
- [Complete Character List for UTF-8](http://www.fileformat.info/info/charset/UTF-8/list.htm)

### `toString()` and `saveToFile()`

在將字串陣列寫入檔案時，應該考慮的轉換過程是：`[]string` → `string` → `[]byte`

```go
// toString()
func (d deck) toString() string {
		return strings.Join([]string(d), ",")
}

// saveToFile()
func (d deck) saveToFile(filename string) error {
		return ioutil.WriteFile(filename, []byte(d.toString()), 0666)
}
```

## Reading From the Hard Drive

### `ReadFile()` Function in `ioutil` Package

讀寫檔案使用的是 [`ioutil`](https://golang.org/pkg/io/ioutil/) 套件，其中 `ReadFile()` 函數用來讀取系統檔案：

```go
func ReadFile(filename string) ([]byte, error)
```

- `filename` 字串表示要讀入的檔案
- 完成讀入檔案之後，將返回讀入的 `[]byte` 與 `err == nil`

### `newDeckFromFile()`

在撰寫程式的過程中，必須時常思考如果程式出錯的話，應該怎麼進行錯誤處理？比如以讀入檔案來說，可以考慮兩種選擇：

1. 記錄錯誤並呼叫 `newDeck()` 來產生牌組
2. 記錄錯誤並結束程式運行

這邊採用後者，為了要終止程式運行，必須引入 `os` 套件庫並呼叫 `Exit()` 函數：

```go
// newDeckFromFile()
func newDeckFromFile(filename string) deck {
		bs, err := ioutil.ReadFile(filename)
		if err != nil {
				fmt.Println("Error: ", err)
				os.Exit(1)
		}

		s := strings.Split(string(bs), ",")
		return deck(s)
}
```

## Shuffling a Deck

為了創建 `shuffle()` 函數來重洗牌組順序，我們需要使用 [`math/rand`](https://golang.org/pkg/math/rand/) 套件中的 `rand.Intn()` 來隨機生成正整數。

但在 Go 中的這個函數是偽隨機函數，由於用來產生隨機數的種子（seed）並不會自己改變，因此不論運行幾次都只會返回相同的隨機數。

為了解決這個問題，我們透過 `time.Now().UnixNano()` 生成時刻變化的值作為種子，並透過 `NewSource()` 方法，每次搭配不同的 seed 產生新的 source：

```go
// shuffle()
func (d deck) shuffle() {
		source := rand.NewSource(time.Now().UnixNano())
		r := rand.New(source)

		for i := range d {
				newPosition := r.Intn(len(d) - 1)
				d[i], d[newPosition] = d[newPosition], d[i]
		}
}
```

## Testing With Go

### Testing in Go

在 Go 中撰寫測試程式，並不需要像其他語言一樣使用其他的框架，而是必須創建一個名為 `*_test.go` 的檔案，並將要進行測試的邏輯寫在檔案中，運行 `go test` 進行測試。

### Asserting Elements in a Slice

```go
func TestNewDeck(t *testing.T) {
		d := newDeck()

		if len(d) != 24 {
				t.Errorf("Expected deck length of 24, but got %v.", len(d))
		}

		if d[0] != "Ace of Spades" {
				t.Errorf("Expected first card of Ace of Spades, but got %v", d[0])
		}

		if d[len(d)-1] != "Six of Clubs" {
				t.Errorf("Expected last card of Six of Clubs, but go %v", d[len(d)-1])
		}
}
```

### Testing File IO

要進行檔案讀寫的測試，這裡的想法是：

1. 刪除當前工作目錄下名為 `_decktesting` 的檔案
2. 創建一個新的卡牌
3. 將創建的卡牌內容寫入檔案 `_decktesting`
4. 讀取檔案並進行斷言（assert）測試
5. 刪除當前工作目錄下名為 `_decktesting` 的檔案

```go
func TestSaveToDeckAndNewDeckFromFile(t *testing.T) {
		fileName := "_decktesting"

		// Step 01: delete files with the given filename
		os.Remove(fileName)

		// Step 02: create a new deck and save to the file with given filename
		deck := newDeck()
		deck.saveToFile(fileName)

		// Step 03: load data from test file
		loadedDeck := newDeckFromFile(fileName)

		if len(loadedDeck) != 24 {
				t.Errorf("Expected 24 cards in deck, got %v", len(loadedDeck))
		}

		os.Remove(fileName)
}
```

## [Assignment] Even and Odd
