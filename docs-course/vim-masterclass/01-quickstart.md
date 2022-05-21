# Vim Quickstart

## Modes

![Vim Modes](https://user-images.githubusercontent.com/26391143/78915676-de4a2f00-7abe-11ea-96b4-5948f6c8b22d.png)

模式（mode）是讓 Vim 有別於其他編輯器的特性之一。在 Vim 中有四種主要的模式：

- 一般模式（Normal Mode）
- 輸入模式（Insert Mode）
- 命令行模式（Command-line Mode）
- 可視化模式（Visual Mode）

以下將簡單介紹這些模式與切換方式，關於詳細的內容則會在後面提到時再進行補充說明。

### Normal Mode

**一般模式（Normal Mode）** 是打開 Vim 編輯器時，預設進入的模式。在這個模式下敲擊鍵盤的動作會被 Vim 識別為命令而不會進行輸入，在其他模式下按下 <kbd>Esc</kbd> 鍵或 <kbd>Ctrl + [</kbd> 組合鍵可以返回到一般模式。

### Insert Mode

**輸入模式（Insert Mode）** 用於將輸入的內容讀入緩衝區中進行編輯，如果 `showmode` 選項是打開的，會在編輯器的底部顯示 `-- INSERT --` 提示：

![Insert Mode in Vim](https://user-images.githubusercontent.com/26391143/78915797-0cc80a00-7abf-11ea-9b23-2abe141b2135.png)

進入輸入模式的方式有很多，最常見的是在一般模式下使用以下按鍵進入：

- <kbd>i</kbd> 鍵表示 `insert`，在游標所在字元前開始輸入文字
- <kbd>a</kbd> 鍵表示 `append`，在游標所在字元後開始輸入文字
- <kbd>o</kbd> 鍵表示 `open`，在游標所在行下開一新行來輸入文字

### Command-Line Mode

**命令行模式（Command-line Mode）** 用於鍵入命令執行保存、搜尋、放棄修改與退出編輯器…等動作。在一般模式下按下 <kbd>:</kbd> 鍵、<kbd>:</kbd> 鍵或 <kbd>?</kbd> 鍵可以進入命令行模式。

### Visual Mod

可視化模式（Visual Mode）

## Quickstart

### Open Vim

在命令行下，可以直接使用 `vim` 命令開啟編輯器，或加上要編輯檔案的檔案名稱：

```bash
# Run Vim
$ vim

# Open File with Vim
$ vim HelloWorld.txt
```

### Quit Vim

編輯完檔案，要退出 Vim 時需要使用命令行模式：

|  命令  | 說明               |
| :----: | :----------------- |
|  `:q`  | 不保存，直接退出   |
| `:q!`  | 不保存，強制退出   |
|  `:w`  | 保存文件           |
| `:w!`  | 強制保存文件       |
| `:wq`  | 保存文件並退出     |
| `:wq!` | 強制保存文件並退出 |

其中：

- `q` 表示 `quit`
- `w` 表示 `write`
- `!` 表示 `force`
