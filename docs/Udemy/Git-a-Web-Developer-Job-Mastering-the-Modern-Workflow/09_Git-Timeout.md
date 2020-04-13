---
pageClass: udemy
---

# Git Timeout

## [Lecture] Git Branches

我們可以將 **分支（branch）** 想像成是專案的不同版本，在開發過程中我們可以創建分支來進行開發、嘗試新的特性來避免影響到主要的專案，在創建新分支要先確認當前是否有尚未提交的紀錄：

```bash
# Show all branchs
$ git branch

# Add a new branch and switch to it
$ git branch count-to-ten
$ git checkout count-to-ten
```

上述的指令還可以替代成：

```bash
# Add a new branch and switch in one-line command
$ git checkout -b count-to-ten
```

在分支下進行的更動不會影響到其他分支，如果要使更動的部分也加到另外一個分支時，必須進行分支的合併：

```bash
# Swich to the master branch
$ git checkout master

# Merge branchs
$ git merge count-to-ten
```

在進行分支的合併之後，會連帶將提交的訊息也併入。通常在合併分支之後，為了保持專案的乾淨，建議將不必要使用到的分支進行刪除：

```bash
# Delete branch
$ git branch -d count-to-ten
```