---
pageClass: udemy
---

# The Vim Help System

## Getting Help

### Help Section

![Help Section](https://user-images.githubusercontent.com/26391143/78949435-20df2c00-7afe-11ea-9a00-71615d3faae9.png)

只需要在命令行模式中輸入 `:help` 就可以開啟說明文檔區，會將文檔分成如上圖所示的兩部份。實際上這個命令也可以直接進行主題或命令的檢索：

- `:help <COMMAND>` 開啟指令 `<COMMAND>` 的說明文檔
- `:help {subject}` 開啟主題 `{subject}` 的說明文檔

如果要關閉說明文檔區，只需要在命令行模式輸入 `:q` 即可。

### Navigation in Help Section

- <kbd>Ctrl + O</kbd> 在說明文檔中，檢索上一個主題
- <kbd>Ctrl + I</kbd> 在說明文檔中，檢索下一個主題
- <kbd>Ctrl + ]</kbd> 如果當前游標處為一個標籤（tags），跳轉到該主題的說明文檔
- <kbd>Ctrl + W + W</kbd> 在編輯區和說明文檔進行跳轉

### How To Read the Document

以下是使用 `:help ^g` 檢視關於 <kbd>Ctrl + G</kbd> 所列出的說明文件：

![Help Document: Ctrl + G](https://user-images.githubusercontent.com/26391143/78950445-520d2b80-7b01-11ea-883f-2cc9a31a0a07.png)

- 與 `CTRL-G` 具有相同功能的有 `:f`、`:fi` 和 `:file`
- 在 `:f[ile]` 中，被中括號 `[]` 所包住的內容是可選項，也就是說 `:f` 相當於 `:file` 的縮寫

## Completion: WildMenu

如果我們不知道命令時，可以按下 <kbd>Tab</kbd> 或 <kbd>Ctrl + D</kbd> 進行補全和查找，在補全匹配列表中可以透過 <kbd>Ctrl + P</kbd> 和 <kbd>Ctrl + N</kbd> 進行移動。

![WildMenu](https://user-images.githubusercontent.com/26391143/78950793-76b5d300-7b02-11ea-810b-1798b07d248a.gif)

補全匹配列表可以透過命令行模式進行設定：

- `:set wildmenu` 開啟補全匹配列表
- `:set nowildmenu` 關閉補全匹配列表