# Section 19 - Finishing Touches

## Table of Contents

- [Section 19 - Finishing Touches](#section-19---finishing-touches)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] Lazy Loading Images for Faster Page Loads](#lecture-lazy-loading-images-for-faster-page-loads)
  - [[Lecture] Lazy Loading & Our Custom Waypoints](#lecture-lazy-loading--our-custom-waypoints)
  - [[Lecture] Support for Responsive Images in Legacy Browsers](#lecture-support-for-responsive-images-in-legacy-browsers)
  - [[Lecture] Support for SVG Icons in Legacy Browsers (Part 1)](#lecture-support-for-svg-icons-in-legacy-browsers-part-1)
    - [Automatically Create a PNG Copy of SVG Icon Sprite](#automatically-create-a-png-copy-of-svg-icon-sprite)
    - [Only Send PNG Version to Browser that Doesn't Support SVG](#only-send-png-version-to-browser-that-doesnt-support-svg)
  - [[Lecture] Support for SVG Icons in Legacy Browsers (Part 2)](#lecture-support-for-svg-icons-in-legacy-browsers-part-2)
  - [[Lecture] Support for Flexbox Layout in Legacy Browsers](#lecture-support-for-flexbox-layout-in-legacy-browsers)

## [Lecture] Lazy Loading Images for Faster Page Loads

在瀏覽器載入頁面時，預設會將所有的資源都先載入，這樣會使得載入資源緩慢，我們可以使用 Lazy Loading 來在使用者瀏覽頁面到一定部分再載入圖片資源。首先安裝 `lazysizes` 套件：

```bash
# Install lazysizes
$ npm install lazysizes --save
```

使用時，必須替圖片標籤增添 `lazyload` 屬性，並改以 `data-srcset` 表示資源位置，如：

```html
<img class="lazyload" sizes="(min-width: 970px) 976px, 100vw" data-srcset="assets/images/first-trip-low-res.jpg 565w, assets/images/first-trip.jpg 976w, assets/images/first-trip-hi-dpi.jpg 1952w" alt="Couple walking down a street.">
```

這部分需要新增一個 `Vendor.js` 檔案：

```javascript
import 'lazysizes';
```

並修改 `webpack.config.js` 檔案：

```javascript
var path = require('path');

module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts/"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
```

## [Lecture] Lazy Loading & Our Custom Waypoints

使用 `lazyload` 載入圖片會使得 `waypoint` 在取得頁面區塊高度時產生錯誤，解決的方式是 **讓 `waypoint` 在每次載入 lazyload 圖片時重新測量**：

```javascript
import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.lazyImages = $(".lazyload");
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWaypoint();
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.lazyImages.on('load', function() {
      Waypoint.refreshAll();
    });
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass("site-header--dark");
        } else {
          that.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }

  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each(function() {
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "down") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%"
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction == "up") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });
    });
  }
}

export default StickyHeader;
```

## [Lecture] Support for Responsive Images in Legacy Browsers

在 HTML 中我們使用到了 `<picture>` 元素和 `srcset` …等性質，雖然在多數的瀏覽器中已經支持這些用法，但在一些比較老舊的瀏覽器中卻只支援 `<img src="cat.jpg">` 這樣的形式。在這一單元要介紹 `picturefill` 這個 JavaScript 庫，使得所有的瀏覽器都能支援新的 HTML 元素：

```bash
# Install picturefill
$ npm install picturefill --save
```

接著只需要在 `Vendor.js` 檔案中引入即可：

```javascript
import 'picturefill';
import 'lazysizes';
```

## [Lecture] Support for SVG Icons in Legacy Browsers (Part 1)

多數的瀏覽器都支援 SVG 圖片格式，但仍有少部分的瀏覽器不支援，在這一單元要設定 PNG Fallback 來讓不支援 SVG 檔案格式的瀏覽器可以載入圖片。大致的思路是 **預設採用 SVG 圖片格式，對於不支援 SVG 的瀏覽器則改為使用 PNG 圖片格式**：

1. 透過 Gulp 自動生成 PNG 檔案。
2. 使用 Modernizr 測試瀏覽器是否支援 SVG 檔案，若不支原則採用 PNG 圖片。

### Automatically Create a PNG Copy of SVG Icon Sprite

首先透過 npm 安裝 gulp-svg2png：

```bash
# Install gulp-svg2png
$ npm install gulp-svg2png --save-dev
```

接著在 `./gulp/tasks/sprites.js` 增添 Gulp 任務：

```javascript
var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del'),
    svg2png = require('gulp-svg2png');

var config = {
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
}

gulp.task('beginClean', function() {
  return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('createPngCopy', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.svg')
    .pipe(svg2png())
    .pipe(gulp.dest('./app/temp/sprite/css'));
});

gulp.task('copySpriteGraphic', ['createPngCopy'], function() {
  return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
  return del('./app/temp/sprite');
});

gulp.task('icons', ['beginClean', 'createSprite', 'createPngCopy', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);
```

### Only Send PNG Version to Browser that Doesn't Support SVG

首先透過 npm 安裝 gulp-modernizr：

```bash
# Install gulp-modernizr
$ npm install gulp-modernizr --save-dev
```

接著在創建 `./gulp/tasks/modernizr.js` 檔案：

```javascript
var gulp = require('gulp'),
    modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() {
  return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
    .pipe(modernizr({
      "options": [
        "setClasses"
      ]
    }))
    .pipe(gulp.dest('./app/temp/scripts/'));
});
```

## [Lecture] Support for SVG Icons in Legacy Browsers (Part 2)

在這一部分要修改 `sprites.css` 的模板檔案：

```css
/* Do not edit modules/_sprite directly as it is generated automatically by Gulp.
Instead edit gulp/templates/sprite */

{{#shapes}}
  {{#first}}
    .icon {
      background-image: url('/assets/images/sprites/{{{sprite}}}');
    }

    .icon {
      background-image: url('/assets/images/sprites/{{#replaceSvgWithPng}}{{{sprite}}}{{/replaceSvgWithPng}}');
    }
  {{/first}}

  .icon--{{base}} {
    width: {{width.outer}}px;
    height: {{height.outer}}px;
    background-position: {{position.relative.xy}};
  }
{{/shapes}}
```

其中替換副檔名的腳本寫在 `sprites.js` 中：

```javascript
var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del'),
    svg2png = require('gulp-svg2png');

var config = {
  mode: {
    css: {
      variables: {
        replaceSvgWithPng: function() {
          return function(sprite, render) {
            return render(sprite).split('.svg').join('.png');
          }
        }
      },
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
}

gulp.task('beginClean', function() {
  return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('createPngCopy', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.svg')
    .pipe(svg2png())
    .pipe(gulp.dest('./app/temp/sprite/css'));
});

gulp.task('copySpriteGraphic', ['createPngCopy'], function() {
  return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
  return del('./app/temp/sprite');
});

gulp.task('icons', ['beginClean', 'createSprite', 'createPngCopy', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);
```

## [Lecture] Support for Flexbox Layout in Legacy Browsers

同理，這一單元則處理 `flexbox` 的瀏覽器支援，詳見項目內容。