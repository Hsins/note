# Getting Started

## Environment Setup

### Install Go

#### Linux

到官方網站的 [下載頁面](https://golang.org/dl/) 將最新版本的壓縮檔載下來，並解壓縮到 `/usr/local/go` 資料夾下：

```bash
$ tar -C /usr/local -xzf go$VERSION.$OS-$ARCH.tar.gz
```

添加系統 `/usr/local/go/bin` 到系統環境變數 `PATH` 下，添加以下內容到設定檔 `/etc/profile`、 `$HOME/.profile` 或 `~/.zshrc` 中：

```bash
export PATH=$PATH:/usr/local/go/bin
```

#### mac OS

影片中是到 [官網](https://golang.org/dl/) 下載二進制安裝包進行安裝，預設的路徑會是 `/usr/local/go/bin`。另外一個作法是透過 [Homebrew](https://brew.sh/index_zh-tw) 進行安裝：

```bash
$ brew install go
```

### Visual Studio Code

課程中採用的編輯器是 [Visual Studio Code](https://code.visualstudio.com/) 搭配 [VS Code Plugin: Go](https://marketplace.visualstudio.com/items?itemName=ms-vscode.Go) 插件，也可以挑選自己喜歡的編輯器。
