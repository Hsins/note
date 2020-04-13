---
pageClass: udemy
---

# Execution Contexts and Lexical Environments

## Syntax Parsers, Execution Contexts and Lexical Environments

### 語法解析器（Syntax Parsers）

**語法解析器（Syntax Parsers）** 能夠逐字元地讀取程式碼，檢查其合法性並決定這些標記（token）必須執行的指令。換句話說，在一門程式語言中所規定的語法是否有效，以及他要做些什麼都會交由語法解析器來決定。所有的程式碼都必須經過編譯器或直譯器進行解析，轉換為實際在電腦上所執行的指令。

::: callout 💡 詞法分析（lexical analysis）
實際上這裡的內容涉及到了編譯器原理的內容，編譯器會先透過詞彙分析（lexical analysis）來將程式碼轉換為一個個標記（token）所組成的序列，這些標記是構成程式碼的基本單位。

比如說 `let my_num = 7` 會將他分解成 `let`、`my_num`｀`=` 和 `7` 這些標記，接著才是透過語法解析器（Syntax Parser）來將這些標記組合成有意義的句子。
:::

### 詞彙環境（Lexical Environments）

**詞彙環境（Lexical Environments）** 和程式碼的結構互相對應，指的是程式碼在程式中實際的位置，在撰寫程式碼的時候就決定了詞彙環境。當 JavaScript 的語法解析器在解讀並轉換程式碼時，會根據變數、函式所在的詞彙環境不同，影響到程式碼在記憶體中的位置與其他變數、函式之間的關係。

::: callout 💡 詞彙環境與程式碼的對應
詞彙環境和四種類型的程式碼結構互相對應：

- 全局代碼（global code）
- 函數代碼（function code）
- `eval` 代碼（eval code）
- `with` 區塊（with block）
- `catch` 區塊（catch block）

關於這部分如果並不是很理解，可以參考這篇 [彻底搞懂 JavaScript - 詞法環境（Lexical Environments）](https://juejin.im/post/5c05120be51d4513416d2111)。
:::

### 執行上下文（Execution Contexts）

在一段程式碼中，存在有許多個詞彙環境，決定其執行順序的就是所謂的 **執行上下文（Execution Contexts）**。

## Name/Value Pairs and Objects

在 JavaScript 中，所謂的 **物件（object）** 就是存放著許多由鍵值對的集合，除此之外，物件中可以嵌套其他物件。比如：

```javascript
{
  Street: 'Main',
  Number: 100,
  Apartment: {
    Floor: 3,
    Number: 301
  }
}
```

## [Note] The Global Environment and The Global Object

在 JavaScript 中有三種執行環境類型：全域環境（Global Environment）、函數環境（Function Environment）與 Eval 函數環境（Eval Function Environment）。其中當執行 JavaScript 程式碼時，所建立的基礎執行環境就是全域環境，在創建全域環境的同時會自動創建：

- 全域物件（global object）：不屬於函數之內的物件，就是全域物件。
- `this` 變數

對於瀏覽器來說，JavaScript 程式碼執行時所創建的全域物件將會是視窗 `windows`，而此時的 `this` 變數將會等價於 `windows`。

## [Note] Hoisting

在下面的程式碼中，雖然函數 `b()` 的宣告在呼叫之後，但卻能夠在宣告之前進行呼叫，而變數 `a` 在宣告之前使用卻會是 `undefined`（若沒有宣告 `a` 則會出現警告 `a is not defined`），這樣的現象稱為 **提升（Hoisting）**：

```javascript
b(); // 'Called b!'
console.log(a); // undefined

var a = 'Hello World!';

function b() {
  console.log('Call b!');
}
```

使用 **提升（Hoisting）** 這樣的說法可能會造成一種誤會，好似程式碼在進行解釋時會先將宣告挪至所有程式碼之前執行，但實際上的狀況並非如此。原因在於執行環境創建時會分成兩部分，第一部分稱為創造（Creation）部分，會替變數和函數在記憶體中建立空間，但針對函數與變數略有差異：

- 函數：將函數所有內容放入記憶體中。
- 變數：在使用等號賦值的狀況下，先替變數創建記憶體空間，此時所有變數都會被設定為 `undefined`，接著再依執行順序進行賦值。

## [Note] The Keyword `undefined`

## [Note] The Execution Context - Code Execution

## [Note] Conceptual Aside: Single Threaded, Synchronous Execution

## [Note] Function Invocation and the Execution Stack

## [Note] Functions, Context and Variable Environments

## [Note] The Scope Chain

## [Note] Scope, ES6 and let

## [Note] What About Asynchronous Callbacks?
