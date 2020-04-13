---
pageClass: udemy
---

# Q & A

## Switch Between Vim and Terminal

### Question

在開發的過程中，我們經常需要在編輯器與終端機之間進行切換，有什麼比較建議的方式來進行這樣的操作？會同時開啟兩個終端機視窗嗎？

### Solution

有許多方案都可以達到這樣的目的，比如說：

- 在提供分頁功能的終端機模擬器中，可以在一個終端機視窗中開啟多個分頁（tab）來進行切換。
- 開啟兩個終端機視窗，透過 <kbd>Alt + Tab</kbd> 快速鍵進行切換。
- 使用 [GNU Screen](https://www.gnu.org/software/screen/) 或 [tmux](https://github.com/tmux/tmux) 這類的命令行視窗管理程式。可以在一個終端機頁面中插入其他終端機視窗進行多工操作。

## When to use GUI of Vim?

### Question

在課程中除了介紹 Vim 的終端機介面之外，還有圖形化介面的 GVim，要如何選擇當中的哪一個？

### Solution

基本上，在選擇何時使用終端機介面或圖形化介面時，取決的關鍵在於：「我是不是經常需要在終端機中進行操作？」。舉例來說，如果我需要從網頁或其他圖形化介面應用程式中，進行文字的複製與貼上，那麼就會採用圖形化介面的 GVim 來進行編輯。
