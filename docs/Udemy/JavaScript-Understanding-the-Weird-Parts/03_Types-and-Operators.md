---
pageClass: udemy
---

# Types and Operators

## Dynamically-Typed Languages

JavaScript 有別於 C++、Java⋯⋯ 等靜態類型語言，屬於動態類型語言（Dynamically-Typed Languages），編譯器會在程式運行時，根據變數的值來給定資料型別，而不用在撰寫程式時就先進行宣告。

## Primitive Types

JavaScript 根據 ECMAScript 標準，定義了 [原始類型（Primitive Types）](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)和物件（Objects）共八種資料型別。除了物件以外的資料型別都是不可變的（immutable），這些資料型別就稱為原始類型：

- [`undefined`](https://developer.mozilla.org/en-US/docs/Glossary/Undefined) 表示還不存在，是所有變數的初始值，直到給變數賦值之前，變數的值都不會改變，應該避免使用它來對變數進行賦值
- [`null`](https://developer.mozilla.org/en-US/docs/Glossary/Null) 表示不存在，可以使用他來對變數進行賦值，表示變數沒有值或不存在
- [`Boolean`](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) 為布林值，可以為真 `true` 或否 `false`
- [`Number`](https://developer.mozilla.org/en-US/docs/Glossary/Number) 為數值型態，是永遠都有小數點跟在後面的浮點數（floating point number）
- [`String`](https://developer.mozilla.org/en-US/docs/Glossary/String) 為字串，由一連串的字元所組成，被包裹在單引號或雙引號之間
- [`Symbol`](https://developer.mozilla.org/en-US/docs/Glossary/Symbol) 為符號類型，是 ECMAScript 6 所新定義的類型，可以用來生成全局環境中唯一的值

::: callout 💡 BigInt
[`BigInt`](https://developer.mozilla.org/en-US/docs/Glossary/BigInt) 是 JavaScript 所新定義的一個數字基本類型，可以使用任意精度來表示整數，在這門課錄製時還沒有出現。使用 `BitInt` 可以安全地儲存與操作大整數。
:::

## Operators

所謂的運算子（Operators）是一個特殊的函數，接收兩個參數並返回一個值。比如：

```javascript
var a = 3 + 4;
console.log(a); // 7

var b = 4 > 3;
console.log(b); // true
```

當直譯器在進行解析時，遇到運算子會呼叫寫好的函數，這些運算子讓我們得以用中綴表達式來對數值進行運算。

## Operator Precedence and Associativity

當一個表達式出現多個運算子時，就必須討論運算符的優先級（Precedence）和相依性（Associativity）了：

- 優先級（Precedence）決定了表達式中運算執行的先後次序，優先級較高的運算子會先被執行
- 相依性（Associativity）決定了擁有相同優先級的運算子的先後次序，可以分為左相依性與右相依性

舉個例子來說：

```javascript
var a = 3 + 4 * 5; // 乘法運算子優先級較高，所以先計算 4 * 5 的結果再與 3 進行相加
console.log(a); // 23

var x = 2,
  y = 3,
  z = 4; // 表達式中都是進行賦值的等號運算子，由於等號具備右相依性
x = y = z; // 由右至左進行運算，因此 y = z 賦值為 4 之後再進行 x = y
console.log(x, y, z); // 4 4 4
```

關於運算子的優先級與相依性，可以到 [MDN | Operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) 進行查看。

## Type Coercion

[強制轉型（Type Coercion）](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion) 會隱式地自動將數值從一種資料型別轉換為另外一種資料型別。比如以下情況：

```javascript
var a = 1 + '2'; // 在表達式中，直譯器會將數字類型的 1 強制轉型為字串 '1' 再進行運算
console.log(a); // 12
```

::: callout 💡 類型轉換（Type Conversion）
除了強制轉型（Type Coercion）之外，開發者也可以在程式碼中顯示地進行 [類型轉換（Type Conversion）](https://developer.mozilla.org/en-US/docs/Glossary/Type_conversion)。
:::

## Comparision Operators and Equality

### Type Coercion and Comparisons

由於強制轉型的原因，在使用比較運算子時可能會產生非預期的結果：

```javascript
// 由於 < 運算子為左相依性，會先運算 1 < 2 得到 true
// 接著強制轉型將 true 轉為 1 再得到 0 < 3 為 true
console.log(1 < 2 < 3); // true

// 由於 < 運算子為左相依性，會先運算 3 < 2 得到 false
// 接著強制轉型將 false 轉為 0 再得到 0 < 1 為 true
console.log(3 < 2 < 1); // true
```

## Abstract Equality Comparison and Strict Equality Comparison

在 JavaScript 共提供三種比較運算子：

- [`===`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity) 在進行比較運算時，不會進行類型轉換
- [`==`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality) 在進行比較運算時，會先進行類型轉換，再比較引用地址是否相同
- [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) 是 ECMAScript 6 所引入的比較運算，通常拿來處理 `NaN` 的比較或 `0` 之間的比較，其餘情況通常會使用 `===` 替代。

關於相等比較的一些情況，可以參考 [MDN | Equality Comparisons and Sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) 提供的表格。

```javascript
3 == 3; // true
'3' == 3; // true
'3' === 3; // false

false == 0; // true
null == 0; // false
null < 1; // true
'' == 0; // true
'' == false; // true

NaN == NaN; // false
NaN === NaN; // false
Object.is(NaN, NaN); // true
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

## Existence and Booleans

## Default Values
