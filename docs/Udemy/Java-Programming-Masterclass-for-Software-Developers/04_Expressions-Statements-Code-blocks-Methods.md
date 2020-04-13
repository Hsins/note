# Section 04 - Java Tutorial: Expressions, Statements, Code blocks, Methods and more

- [Section 04 - Java Tutorial: Expressions, Statements, Code blocks, Methods and more](#section-04---java-tutorial-expressions-statements-code-blocks-methods-and-more)
  - [[Note] DiffMerge Tool](#note-diffmerge-tool)
  - [[Note] Overloading](#note-overloading)

## [Note] DiffMerge Tool

[DiffMerge](http://sourcegear.com/diffmerge/downloads.php) 是一款免費、跨平台的文件比較工具，具備圖形介面方便追蹤檢查文件、文件夾的更動，並且可以進行差異代碼的合併。可以參考 [Two Bit Labs | Using DiffMerge as your Git visual merge and diff tool](http://twobitlabs.com/2011/08/install-diffmerge-git-mac-os-x/) 中的設定將 DiffMerge 與 `git` 進行集成：

```bash
$ git config --global diff.tool diffmerge
$ git config --global difftool.diffmerge.cmd 'diffmerge "$LOCAL" "$REMOTE"'
$ git config --global merge.tool diffmerge
$ git config --global mergetool.diffmerge.cmd 'diffmerge --merge --result="$MERGED" "$LOCAL" "$(if test -f "$BASE"; then echo "$BASE"; else echo "$LOCAL"; fi)" "$REMOTE"'
$ git config --global mergetool.diffmerge.trustExitCode true
```

設定好之後，便可以使用以下命令來進行文件比對與合併：

```bash
# diff the local file.m against the checked-in version
$ git difftool file.m

# diff the local file.m against the version in some-feature-branch
$ git difftool some-feature-branch file.m

# diff the file.m from the Build-54 tag to the Build-55 tag
$ git difftool Build-54..Build-55 file.m

# Resolve merge conflicts, just run git mergetool:
$ git mergetool
```

## [Note] Overloading