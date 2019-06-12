# Section 23 - The Command Line

## Table of Contents

- [Section 23 - The Command Line](#section-23---the-command-line)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] A NOTE ON SOLUTIONS!](#lecture-a-note-on-solutions)
  - [[Lecture] Introduction to the Command Line](#lecture-introduction-to-the-command-line)
  - [[Lecture] `cd` and `ls`](#lecture-cd-and-ls)
  - [[Lecture] `touch` and `mkdir`](#lecture-touch-and-mkdir)
  - [[Lecture] Removing Files and Folders](#lecture-removing-files-and-folders)
  - [[Lecture] Command Line Exercise](#lecture-command-line-exercise)
    - [Demand](#demand)
    - [Solution](#solution)

## [Lecture] A NOTE ON SOLUTIONS!

Colt 在教學過程中所用到的代碼都可以在下面連結中取得：

- [Github | nax3t/webdevbootcamp](https://github.com/nax3t/webdevbootcamp)
- [Cloud9 | learnwithcolt/webdevbootcamp](https://ide.c9.io/learnwithcolt/webdevbootcamp)

## [Lecture] Introduction to the Command Line

在這邊 Colt 介紹了 **命令行（command line）** 的重要性。在這邊更直白地說，即使是我們所能見到的 **圖形使用者介面（GUI, Graphical User Interface）** 也是將很多命令行封裝寫在他的背後，很多可以透過圖形化介面完成的，百分之九十九都可以透過命令行完成，反之則否。

關於更多命令行的介紹與使用方式，可以參考：

- [Getting to Know the Command Line](https://www.davidbaumgold.com/tutorials/command-line/)
- [Survival guide for Unix newbies](http://matt.might.net/articles/basic-unix/)

除此之外，在命令行中可以透過 `man` 查看命令的說明文件：

```bash
$ man ls
```

## [Lecture] `cd` and `ls`

- `cd`：變更當前的目錄位置，即 **改變目錄（change directory）**
- `ls`：列出當前目錄下的所有檔案和目錄，即 **列出檔案塊（list segment）**

## [Lecture] `touch` and `mkdir`

- `touch`：用於更改文件訪問和修改時間，也被用於創建新文件。
- `mkdir`：創建目錄，即 **建立目錄（make directory）**

## [Lecture] Removing Files and Folders

- `rm`：用於刪除文件系統中的文件、目錄、設備文件、符號連結…等，源自 **刪除（remove）** 的縮寫。
- 加上 `-rf` 參數用以刪除文件夾。

## [Lecture] Command Line Exercise

### Demand

- Make a new folder named `"Animals"`
- Inside of `"Animals"` add 2 directories: `"AwesomeAnimals"` and `"SketchyAnimals"`
- Inside of `"AwesomeAnimals"` add the following files: `"Capybara.js"`, `"ArcticFox.html"` and `"TreeFrog.txt"`
- Inside of `"SketchyAnimals"` add the following files: `"BrownRecluse.html"` and `"BulletAnt.js"`
- Also inside of `"SketchyAnimals"` create a `"Snakes"` directory. Snakes are extra sketchy.
- Inside the `"Snakes"` directory create the following files: `"Cobra.css"` and `"ReticulatedPython.py"`
- You have a change of heart and decide that Bullet Ants are no longer sketchy. Remove the `"BulletAnt.js"` file.
- All animal life goes extinct.  Delete the entire `"Animals"` directory
- **BONUS: See if you can do this without ever changing directories(without using `cd`)**

### Solution

```bash
# Make a new folder named `"Animals"`
$ mkdir Animals

# Inside of `"Animals"` add 2 directories: `"AwesomeAnimals"` and `"SketchyAnimals"`
$ mkdir Animals/AwesomeAnimals
$ mkdir Animals/SketchyAnimals

# Inside of `"AwesomeAnimals"` add the following files: `"Capybara.js"`, `"ArcticFox.html"` and `"TreeFrog.txt"`
$ touch Animals/AwesomeAnimals/Capybara.js
$ touch Animals/AwesomeAnimals/ArcticFox.html
$ touch Animals/AwesomeAnimals/TreeFrog.txt

# Inside of `"SketchyAnimals"` add the following files: `"BrownRecluse.html"` and `"BulletAnt.js"`
$ touch Animals/SketchyAnimals/BrownRecluse.html
$ touch Animals/SketchyAnimals/BulletAnt.js

# Also inside of `"SketchyAnimals"` create a `"Snakes"` directory. Snakes are extra sketchy.
$ mkdir Animals/SketchyAnimals/Snakes

# Inside the `"Snakes"` directory create the following files: `"Cobra.css"` and `"ReticulatedPython.py"`
$ touch Animals/SketchyAnimals/Snakes/Cobra.css
$ touch Animals/SketchyAnimals/Snakes/ReticulatedPython.py

# You have a change of heart and decide that Bullet Ants are no longer sketchy. Remove the `"BulletAnt.js"` file.
$ rm Animals/SketchyAnimals/BulletAnt.js

# All animal life goes extinct.  Delete the entire `"Animals"` directory
$ rm -rf Animals
```