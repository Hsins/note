---
pageClass: udemy
---

# Gulp Essentials

## [Lecture] Gulp Introduction

### Gulp Overview

Gulp 是基於 node.js 的一款開源 **建構工具（Build Tool）** 和 **工作執行器（Task Runners）**，可以幫助我們在開發流程中自動化完成許多工作。在安裝 Gulp 時首先要進行 `gulp-cli` 工具的全局安裝與基於專案的 `gulp` 安裝：

```bash
# Install Gulp globally
$ npm install gulp-cli --global

# Install Gulp in project
$ npm install gulp --save-dev
```

注意此時的參數 `--save-dev` 將會將套件安裝在專案的 `devDependencies` 下，而參數 `--save` 則會將套件安裝在專案的 `dependencies` 下，後者通常放置的是運行在瀏覽器中必須的套件。使用 Gulp 之前必須在根目錄下創建 `gulpfile.js` 配置文件，一個典型的配置文件如下：

```javascript
var gulp = require('gulp');

gulp.task('default', function() {
  console.log("Hooray - You Create a Gulp Task!");
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.");
});
```

### Plugin: gulp-watch

除此之外，Gulp 還能夠透過 `gulp-watch` 插件來監聽檔案的變化來觸發任務，首先透過 npm 工具安裝 `gulp-watch`：

```bash
# Install gulp-watch plugin
$ npm install gulp-watch --save-dev
```

接著設定 `gulpfile.js` 配置文件，以下範例將會監聽 `index.html` 文件與 `stlyes` 文件夾下的 CSS 文件：

```javascript
var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("Hooray - You Create a Gulp Task!");
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('styles', function() {
  console.log("Imagine Sass or PostCSS tasks running here.");
});

gulp.task('watch', function() {
  watch('./app/index.html', function() {
      gulp.start('html');
  });
  watch('./app/assets/styles/**/*.css', function() {
      gulp.start('styles');
  });
});
```

## [Lecture] Gulp and PostCSS

### What is a CSS Workflow?

接下來的內容將討論三件事：

3. Postprocessors

#### 1. Autoprefixer

在 CSS 表中，有些屬性尚未被瀏覽器採用，因此必須透過 Autoprefixer 來替我們自動加上 CSS 供應商前綴（Vender Prefixes），比如我們只要編寫：

```css
.item {
  columns: 300px 2;
}
```

透過 `Autoprefixer` 可以轉換成：

```css
.item {
  -webkit-columns: 300px 2;
     -moz-columns: 300px 2;
          columns: 300px 2;
}
```

#### 2. Preprocessors

除此之外，通常也會使用 Sass、Less 或 Stylus…等 **CSS 預處理器（CSS Preprocessors）** 來方便我們進行 CSS 開發，比如：

【CSS Variables】

```css
$mainBlue: #2f5572;

. item {
  color: $mainBlue;
  border: 1px solid $mainBlue;
}
```

【Nested CSS】

```css
.feature-box a {
  display: block;
  padding: 15px;
}

.feature-box a {
  padding: 10px;
  line-height: 1.7;
}
```

```css
.feature-box {
  a {
    display: block;
    padding: 15px;
  }
  p {
    padding: 10px;
    line-height: 1.7;
  }
}
```

#### 3. Postprocessors

而 **CSS 後處理器（CSS Postprocessors）** 如 PostCSS 則可以替我們將 CSS 檔案進行打包。

### Important Gulp/Node Terms

在 Gulp 中，有三個重要的概念：

- `gulp.src()`
- `gulp.dest()`
- `pipe()`

其中 `gulp.src()` 放入來源檔案透過 `pipe()` 處理之後，由 `gulp.dest()` 指定目標位置。

### Hand-on: Write Code to Setup CSS workflow

首先改寫一下 `gulpfile.js` 檔案中的 `gulp.task()` 部分，下面的程式碼會使得每次修改並儲存 `./app/assets/styles/styles.css` 檔案時，在 `./app/temp/styles` 檔案夾中生成對應的檔案：

```javascript
gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(gulp.dest('./app/temp/styles'));
});
```

接下來，我們先透過 npm 安裝 `gulp-postcss`、`autoprefixer`、`postcss-simple-vars` 和 `postcss-nested` 插件：

```bash
# Install gulp-postcss plugin
$ npm install gulp-postcss --save-dev

# Install autoprefixer
$ npm install autoprefixer --save-dev

# Install postcss-simple-vars
$ npm install postcss-simple-vars --save-dev

# Install postcss-nested
$ npm install postcss-nested --save-dev
```

並修改 `gulpfire.js` 引入 `gulp-postcss`、`autoprefixer`、`postcss-simple-vars` 和 `postcss-nested` 插件，注意 `gulp-postcss` 中要使用陣列傳遞內容：

```javascript
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested');

gulp.task('default', function() {
  console.log("Hooray - You Create a Gulp Task!");
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
  	.pipe(postcss([cssvars, nested, autoprefixer]))
  	.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {
  watch('./app/index.html', function() {
      gulp.start('html');
  });
  watch('./app/assets/styles/**/*.css', function() {
      gulp.start('styles');
  });
});
```

修改 `./app/assets/styles/styles.css` 檔案並儲存：

```css
$mainBlue: #2f5572;

body {
  color: $mainBlue;
  padding: 10px;
  margin: 10px;
  columns: 300px 2;
}

.box {
  a {
  	display: block;
  	padding: 10px;
  }
}
```