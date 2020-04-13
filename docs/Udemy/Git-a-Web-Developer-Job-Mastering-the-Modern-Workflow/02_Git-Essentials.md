---
pageClass: udemy
---

# Git Essentials

## [Lecture] What is Git?

Git 是目前世界上最受歡迎的 **版本控制系統（Version Control System）** 之一，他可以有效地追蹤並管理檔案，並與其他人協作。

## [Lecture] See Git in Action

### Vocabulary in Git

我們會替每一個 **專案（Project）** 創建 **版本倉庫（repo, Repository）**，將存放的資料夾稱為 **工作資料夾（Working Directory）**。在 Git 我們將透過 `git commit` 來儲存當前檔案狀態到 **暫存區（Stage）**。

### Version Control Hosting

- `Git` 和 `GitHub` 是截然不同的東西。
- 透過 `git push` 可以將本地的目錄推送到版本託管網站上

## [Lecture] Git Your Hands Dirty

```bash
# Show The Working Tree Status
$ git status

# Stages All Changes
$ git add -A

# 提交更動
$ git commit -m <commit>
```

## [Lecture] Setup Your GitHub

這一小節有兩個主要的目的：創建 GitHub 帳號和創建課程項目的版本倉庫。創建帳號的過程不在這裡贅述，創建好帳號之後在 GitHub 上創建一個版本倉庫供課程項目使用，然後按照下面的內容從講師的倉庫中下載初始化檔案，並關聯到遠端版本庫：

```bash
# Clone the starter files from Brad's Repo
$ git clone https://github.com/LearnWebCode/travel-site-files.git

# Rename the folder name
$ rename travel-site-files "udemy_travel-site"

# Change and check the remote information
$ cd udemy_travel-site
$ git remote set-url origin https://github.com/Hsins/udemy_travel-site.git
$ git remote -v

# Push the files to remote repo
$ git push origin master
```

接著試著修改內容（修改 `/app/index.html` 文件，替 `<meta>` 屬性添加 `affordable travel`）並推送到遠端倉庫：

```bash
# Check git status after modified
$ git status

# Update what will be committed. Then add commit and push it!
$ git add -A
$ git status
$ git commit -m "Added new meta keywords."
$ git push origin master
```
