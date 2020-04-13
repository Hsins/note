---
pageClass: udemy
---

# Vim Essentials

## Navigation

### Navigation by Direction

![VIM HJKL](https://user-images.githubusercontent.com/26391143/78918064-67169a00-7ac2-11ea-843d-a5bb198c0874.png =400x)

- <kbd>h</kbd> 或 <kbd>←</kbd> 向左移動光標
- <kbd>j</kbd> 或 <kbd>↓</kbd> 向下移動光標
- <kbd>k</kbd> 或 <kbd>↑</kbd> 向上移動光標
- <kbd>l</kbd> 或 <kbd>→</kbd> 向右移動光標

### Navigation by Page

- <kbd>Ctrl + F</kbd> 向下翻頁，其中 `F` 表示 `foward`
- <kbd>Ctrl + B</kbd> 向上翻頁，其中 `B` 表示 `backward`
- <kbd>Ctrl + D</kbd> 向下滾動半頁，其中 `D` 表示 `down`
- <kbd>Ctrl + U</kbd> 向上滾動半頁，其中 `U` 表示 `up`
- <kbd>Z + Enter</kbd> 將當前行翻動到適當位置

::: callout 💡 文件最下方的那些波浪（tildes）符號
如果移動到文件的最下方，會看到有許多波浪符號，比如像是這樣：

![Bottom Tildes](https://user-images.githubusercontent.com/26391143/78945811-cb9e1d00-7af3-11ea-936e-0b3a1903ca34.png)

實際上，這些波浪符號並不存在於檔案中，而是告知我們已經到了檔案的底部。
:::

### Navigation by Word

- <kbd>w</kbd> 移動到單字後方
- <kbd>W</kbd> 移動到單字後方，根據空白作為單字邊界
- <kbd>b</kbd> 移動到單字前方
- <kbd>B</kbd> 移動到單字前方，根據空白作為單字邊界

### Navigation by Line

- <kbd>0</kbd> 移動到行首
- <kbd>^</kbd> 移動到行首的第一個有效字元
- <kbd>$</kbd> 移動到行尾
- <kbd>gg</kbd> 移動到檔案開始行
- <kbd>G</kbd> 移動到檔案結尾行
- <kbd>[num]gg</kbd> 或 <kbd>[num]G</kbd> 移動到第 `[num]` 行

::: callout 💡 字元 ^ 和 $
如果接觸過正則表達式（Regular Expression）的話，字元 `^` 和 `$` 也正好是代表匹配模式的開頭和結尾。
:::

### Navigation with Command Line

- `:[num]` 移動到第 `[num]` 行
- `:$` 移動到檔案結尾行

## Information

### Show Information

- <kbd>Ctrl + G</kbd> 顯示檔案名稱、檔案狀態和行數
- <kbd>g</kbd> + <kbd>Ctrl + G</kbd> 顯示更多資訊

### The Ruler

- `:set ruler`
- `:set noruler`
- `:set ruler!`

## Deleting Text

### Delete by Character

- <kbd>x</kbd> 刪除當前游標位置上的一個字元
- <kbd>X</kbd> 刪除當前游標位置前的一個字元

### Operation and Motion

在 Vim 中 <kbd>d</kbd> 代表「刪除」這個操作（operation），他可以搭配數字和我們前面所提到各種「移動」的動作（motion）來實現效果：

- <kbd>dw</kbd> 向後刪除一個單字
- <kbd>dl</kbd> 向右一個位置進行進行刪除操作（刪除當前游標位置上的一個字元），相當於 <kbd>x</kbd>
- <kbd>dh</kbd> 向左一個位置進行進行刪除操作（刪除當前游標位置前的一個字元），相當於 <kbd>X</kbd>
- <kbd>dj</kbd> 向下刪除行（包括當前行和他的下一行）
- <kbd>dj</kbd> 向上刪除行（包括當前行和他的上一行）
- <kbd>d0</kbd> 刪除當前游標之前的所有內容（使游標位置在刪除之後成為行首）
- <kbd>d$</kbd> 刪除當前游標之後的所有內容（使游標位置在刪除之後成為行尾），相當於 <kbd>D</kbd>
- <kbd>dd</kbd> 刪除當前行
- <kbd>[num]dd</kbd> 刪除 `[num]` 行

## Thinking in Vim

在 Vim 中，這些操作可以整理成以下形式：

```
[count]operation{motion}`
[count]operation[count]{motion}`
```

舉個例子：

- <kbd>3w</kbd> 執行移動單字三次
- <kbd>d3w</kbd> 執行刪除操作，刪除的內容是三個移動單字動作
- <kbd>2d3w</kbd> 執行兩次刪除操作，刪除的內容是三個移動單字動作