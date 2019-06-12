# Section 07 - Mobile-first Essentials

## Table of Contents

- [Section 07 - Mobile-first Essentials](#section-07---mobile-first-essentials)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] What does "Mobile-first" Mean?](#lecture-what-does-%22mobile-first%22-mean)
    - [Mobile-First](#mobile-first)
    - [Begin Writing CSS the Mobile-First way](#begin-writing-css-the-mobile-first-way)
  - [[Lecture] Responsive Images](#lecture-responsive-images)
    - [Two Situation with responsive image](#two-situation-with-responsive-image)
    - [Hand-on: Begin adding responsive image to our travel website](#hand-on-begin-adding-responsive-image-to-our-travel-website)
  - [[Lecture] Tips for Testing Responsive Images](#lecture-tips-for-testing-responsive-images)

## [Lecture] What does "Mobile-first" Mean?

### Mobile-First

在以往的 **響應式網站設計（RWD, Responsive Web Design）** 中，是以桌面端設計為主再考慮移動設備的響應，但近幾年來的開發趨勢逐漸轉變為以移動端優先，因為：

- 近幾年移動設備的流量已經比桌面端要高。
- 以桌面端優先設計的響應式網站，往往導致項目臃腫與加載速度緩慢。

以移動端優先的概念進行設計，可以使我們更專注在內容與用戶的互動上，除此之外也能使移動端在瀏覽頁面時不用加載冗餘的資源。

### Begin Writing CSS the Mobile-First way

前端開發的三大語言 HTML、CSS 和 JavaScript 中，在進行響應式開發時最重要的是 CSS 樣式表部分，這部分涉及到 [@media](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) 屬性，透過後處理器的 `mixins` 套件可以使我們開發更有效率，首先安裝套件：

```bash
# Install postcss-mixins plugin
$ npm install postcss-mixins --save-dev
```

修改 `styles.js` 對 Gulp 工具的設定：

```javascript
var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString);
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
```

我們可以在 `./app/assets/styles/base/` 下創建 `_mixins.css` 來存放針對不同寬度進行響應式的 CSS 樣式，並在 `./app/assets/stlyes/styles.css` 中引入：

```css
@define-mixin atSmall {
  @media (min-width: 530px) {
    @mixin-content;
  }
}

@define-mixin atMedium {
  @media (min-width: 800px) {
    @mixin-content;
  }
}

@define-mixin atLarge {
  @media (min-width: 1200px) {
    @mixin-content;
  }
}
```

在使用時，則在選擇器中使用如下的代碼：

```css
@mixin atSmall {
  font-size: 2rem;
}

@mixin atMedium {
  font-size: 3.2rem;
}

@mixin atLarge {
  font-size: 4.8rem;
}
```

## [Lecture] Responsive Images

### Two Situation with responsive image

傳統 HTML 中的 `<img>` 標籤中的 `src` 屬性只能指派單一的圖片位置，這樣會造成兩個主要的問題：

- 無法針對螢幕寬度不同提供對應適當裁切的圖片。
- 使用行動載具瀏覽頁面時，使用者被迫下載較為龐大的檔案／寬頁面使用了解析度較差的圖片。

【Case 01】 Art Direction & Cropping Situation

如果要替不同寬度的頁面提供適當裁切的圖片，可以使用 `<picture>` 標籤搭配 `srcset` 屬性進行設定：

```html
<picture>
  <source srcset="images/dog-crop-large.jpg" media="(min-width: 1200px)">
  <source srcset="images/dog-crop-medium.jpg" media="(min-width: 760px)">
  <img src="images/dog-crop-small.jpg" alt="Puppy in the sand.">
</picture>
```

【Case 02】 Image Resolution & File Size Situation (faster load times)

針對不同解析度的圖片也可以使用 `srcset` 屬性進行設定，瀏覽器會自行挑選適當的照片在不同寬度下渲染，但建議開發者可以在寫 HTML 代碼時就先寫好對應的寬度：

```html
<img srcset="images/dog-resolution-small.jpg 570w, images/dog-resolution-medium.jpg 1200w, images/dog-resolution-large.jpg 1920w" alt="Puppy in the sand.">
```

### Hand-on: Begin adding responsive image to our travel website

上述的兩種方式可以結合使用，以下針對項目中的 `large-hero` 部分圖片進行設定：

```html
<picture>
  <source srcset="assets/images/hero--large.jpg 1920w, assets/images/hero--large-hi-dpi.jpg 3840w" media="(min-width: 1380px)">
  <source srcset="assets/images/hero--medium.jpg 1380w, assets/images/hero--medium-hi-dpi.jpg 2760w" media="(min-width: 990px)">
  <source srcset="assets/images/hero--small.jpg 990w, assets/images/hero--small-hi-dpi.jpg 1980w" media="(min-width: 640px)">
  <img src="assets/images/hero--small.jpg 640w, assets/images/hero--small-hi-dpi.jpg 1280" alt="Coastal view of ocean and mountains">
</picture>
```

## [Lecture] Tips for Testing Responsive Images

講師在這裡提供了兩個開發時如何去測試響應式圖片的像素大小的方式：

1. 替不同圖片像素圖片添增含有像素內容的檔案。
2. 利用 Google Chrome 的開發者工具。