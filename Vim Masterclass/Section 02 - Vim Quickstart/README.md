# Section 02 - Vim Quickstart

- [Section 02 - Vim Quickstart](#section-02---vim-quickstart)
  - [[Note] Modes](#note-modes)
  - [[Note] Vim Quickstart](#note-vim-quickstart)

## [Note] Modes

**模式（mode）** 是 Vim/Vi 有別於其他編輯器的特性，在 Vim 編輯器中有三種主要的模式：

- **命令模式（Normal/Command Mode）**：為預設打開編輯器時進入的模式，在這個模式下敲擊鍵盤的動作會被 Vim 識別為命令而不會進行輸入，在其他模式下按下 <kbd>Esc</kbd> 鍵可以返回命令模式。
- **輸入模式（Insert Mode）**：進入輸入模式的方式有很多，最常見的是在命令模式下按下 <kbd>i</kbd> 鍵切換到輸入模式。
- **命令行模式（Command-line Mode）**：在命令模式下按下 <kbd>:</kbd> 鍵可以進入命令行模式，在此模式下可以輸入命令用來執行保存、放棄修改與退出編輯器…等動作。

## [Note] Vim Quickstart

這一節的內容是學習如何開啟與退出 Vim：

```bash
# Run Vim
$ vim

# Open file with Vim
$ vim [filename]
```

如果要退出 Vim 時，進入底線命令模式：

```
:q              不保存，直接退出
:q!             不保存，強制退出
:w              保存文件
:w!             強制保存文件
:wq             保存文件並退出
:wq!            強制保存文件並退出
```