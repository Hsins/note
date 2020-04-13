---
pageClass: udemy
---

# CSS Architecture

## [Lecture] CSS File Architecture

實際上我們在進行網頁開發時，必須依照設計師提供的設計稿來進行開發。在進行開發之前，由於 CSS 檔案將透過 Gulp 進行處理，先在 `index.html` 檔案中載入：

```html
<link href='temp/styles/styles.css' rel='stylesheet' type='text/css'>
```

### Gulp Plugin: postcss-import

在接下來的部分，各個部分的 CSS 樣式表可以在 `styles.css` 中使用 `@import "modules/_large_hero";` 引入，雖然 `import` 屬於 CSS 本身既有的特性，但我們可以透過 Gulp 工具來完成，首先要安裝 `postcss-import` 插件：

```bash
# Install postcss-import plugin
$ npm install postcss-import --save-dev
```

修改 `gulpfile.js` 檔案，引入 `postcss-import` 並將其增添到 `.pipe(postcss[...])` 中：

```javascript
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import');

gulp.task('default', function() {
  console.log("Hooray - You Create a Gulp Task!");
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
  	.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
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

### Global Style

首先處理能夠進行全局設定的部分，我們將這一部分的 CSS 樣式檔 `_globe.css` 存放在 `./app/assets/styles/base` 資料夾：：

```css
/* 設定字型與背景 */
body {
  font-family: 'Roboto', sans-serif;
  color: #333;
}

/* 限制圖片寬度最大不超過頁面寬度 */
img {
  max-width: 100%;
  height: auto;
}
```

### Unique Part Style

由於版面中已經沒有可以進行全局設定的部分，所以開始對於細節部分進行處理，比如圖片與文字的 banner 部分，觀察 `index.html` 檔案會發現此部分被放置在 `<div class="large-hero">...</div>` 中。我們將這一部分的 CSS 樣式檔 `_large-hero.css` 存放在 `./app/assets/styles/modules` 資料夾：

> 將檔名命名為以底線開頭是一種慣例，再告知其他協作的開發者這個 CSS 樣式檔並不會直接被使用，而是透過 `@import` 的方式導入。

```css
.large-hero {
  position: relative;
}

.large-hero__text-content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
  text-align: center;
}
```

> 關於垂直置中的方式有許多種，在這邊 Brad 採用的是設置 `top: 50%;` 使其起始點位在中央，再設置 `transform: translateY(-50%);` 將整體向上偏移高度的一半。

為了使文字可以顯示在圖片中央，修改 `index.html` 檔案使文字部分包裹在 `<div class="large-hero__text-content">...</div>` 中：

```html
<div class="large-hero">
  <img src="assets/images/hero--large.jpg">
  <div class="large-hero__text-content">
    <h1>Your clarity.</h1>
    <h2>One trip away.</h2>
    <p>We create soul restoring journeys that inspire you to be you.</p>
    <p><a href="#">Get Started Today</a></p>
  </div>
</div>
```

## [Lecture] What is BEM?

### B.E.M: Block Element Modifier

[BEM](http://getbem.com/) 是一種 CSS class 命名的設計模式，將介面切割成許多獨立的 **區塊（Block）**、**元素（Element）** 和 **修飾子（Modifier）**。這是一種模組化的設計概念，可以使頁面中的模組具有重用性，除此之外也能夠使模組之間進行區隔，避免造成命名空間的汙染和使用選擇器時的繼承嵌套風險。注意以下的命名規則：

```
-   單中劃線：作為連結字符使用，表示某個區塊或元素中多個單字間的連接記號。
__  雙下劃線：用來連結區塊和元素。
--  雙下劃線：用來描述區塊或元素的狀態。
```

舉例來說：

```html
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>
```

> 有些人會質疑這樣會使 HTML 不具備足夠的 **語意性（semantic）**，關於這部分可以參考 `Normalize.css` 的作者 Nicolas Gallagher 部落格中這篇 [About HTML Semantics Front-End Architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/) 一文的內容。

### Sample: Using B.E.M

接下來是一個簡單的範例，針對 `large-logo` 區塊中的元素進行樣式設定，首先添加類別名稱：

```html
<div class="large-hero">
  <img src="assets/images/hero--large.jpg">
  <div class="large-hero__text-content">
    <h1 class="large-hero__title">Your clarity.</h1>
    <h2 class="large-hero__subtitle">One trip away.</h2>
    <p>We create soul restoring journeys that inspire you to be you.</p>
    <p><a href="#">Get Started Today</a></p>
  </div>
</div>
```

接著修改 `_large-hero` 樣式表，透過 Gulp 工具可以替我們自動地去進行嵌套，在嵌套中的類別可以使用 `&__text-content` 撰寫，最後的 CSS 中會自動替我們補齊成 `large-hero__text-content`：

```css
.large-hero {
  position: relative;

  &__text-content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    text-align: center;
  }

  &__title {
    font-weight: 300;
    color: #2f5572;
    font-size: 4.8rem;
  }

  &__subtitle {
    font-weight: 300;
    color: #2f5572;
    font-size: 2.9rem;
  }
}
```

## [Lecture] Complete Two Blocks

### CSS Variables

在接下來的內容中，由於許多色碼會重複使用，建議在 `./app/assets/styles/base/` 資料夾下建立一個用來宣告 CSS 變數的樣式檔案 `variables.css`：

```css
$mainBlue: #2f5572;
$mainOrange: #d59541;
```

並在 `styles.css` 檔案中進行引入，由於各個模組都會使用到這些變數，所以要小心引入的順序：

```css
@import "normalize.css";
@import "base/_global";
@import "base/_variables";
@import "modules/_large-hero";
@import "modules/_btn";
```

### Large-Hero Block

```css
.large-hero {
  position: relative;

  &__text-content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    text-align: center;
  }

  &__title {
    font-weight: 300;
    color: $mainBlue;
    font-size: 4.8rem;
    margin: 0;
  }

  &__subtitle {
    font-weight: 300;
    color: $mainBlue;
    font-size: 2.9rem;
    margin: 0;
  }

  &__description {
    color: #FFF;
    font-size: 1.875rem;
    font-weight: 100;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, .1);
    max-width: 30rem;
    margin-left: auto;
    margin-right: auto;
  }
}
```

### Button Block

```css
.btn {
  background-color: $mainBlue;
  color: #FFF;
  text-decoration: none;
  padding: .75rem 1.2rem;
  display: inline-block;

  &--orange {
    background-color: $mainOrange;
  }

  &--large {
    font-size: 1.25rem;
    padding: 1.1rem 1.9rem;
  }
}
```

- `text-decoration`: 網頁文字的修飾線條，詳見 [MDN | text-decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)。