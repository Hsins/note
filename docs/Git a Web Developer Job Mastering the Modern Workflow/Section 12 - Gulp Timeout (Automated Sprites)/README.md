# Section 12 - Gulp Timeout (Automated Sprites)

## Table of Contents

- [Section 12 - Gulp Timeout (Automated Sprites)](#section-12---gulp-timeout-automated-sprites)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] Automatic Sprites with Gulp (Part 1)](#lecture-automatic-sprites-with-gulp-part-1)
  - [[Lecture] Automatic Sprites with Gulp (Part 2)](#lecture-automatic-sprites-with-gulp-part-2)
  - [[Lecture] Automatic Sprites with Gulp (Part 3)](#lecture-automatic-sprites-with-gulp-part-3)

## [Lecture] Automatic Sprites with Gulp (Part 1)

網頁製作中我們經常會使用到圖標，那通常會是一個個的圖片檔案，縱使現在多使用檔案大小較小的 **可縮放向量圖形（SVG, Scalable Vector Graphics，SVG）** 檔，但每次加載圖片時還是會佔用需求，透過 CSS sprite 可以將項目中會使用到的圖標集合起來放在同一張圖片中，使用時再進行定位。在 Gulp 中提供了 `gulp-svg-sprite` 套件來幫助我們進行自動化，首先透過 NPM 工具安裝套件：

```bash
# Install gulp-svg-sprite
$ npm install gulp-svg-sprite --save-dev
```

接著在 `/gulp/tasks/` 資料夾下新增一個 `sprites.js`，一個最基礎簡單模板如下：

```javascript
var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite');

var config = {
  mode: {
    css: {
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
}

gulp.task('createSprite', function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});
```

這邊要注意到的是透過 SVG Sprite 使用圖標時，是將集合好的圖案透過 CSS 取得相對應的範圍，因此在透過 Gulp 自動化的過程中還要產生相對應的 CSS 樣式，設定好 `./gulp/templates/sprite.css` 模板檔案：

```css
{{#shapes}}
  {{#first}}
    .icon {
      background-image: url('/assets/images/sprites/{{{sprite}}}');
    }
  {{/first}}

  .icon--{{base}} {
    width: {{width.outer}}px;
    height: {{height.outer}}px;
    background-position: {{position.relative.xy}};
  }
{{/shapes}}
```

## [Lecture] Automatic Sprites with Gulp (Part 2)

我們期待透過 `gulp-svg-sprite` 生成的 `.svg` 檔和 `.css` 檔案可以自動複製一份到 `/assets/` 資料夾下，為了滿足既有的命名規則，這要透過 `gulp-rename` 插件完成：

```bash
# Install gulp-rename
$ npm install gulp-rename --save-dev
```

修改 `sprites.js` 檔案：

```javascript
var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename');

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

gulp.task('createSprite', function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteGraphic', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('icons', ['createSprite', 'copySpriteGraphic', 'copySpriteCSS']);
```

最後可以透過 `<span>` 元素在 HTML 中使用：

```html
<!-- Add icon use span (SVG sprite class) -->
<h2 class="section-title"><span class="icon icon--star section-title__icon"></span> Our <strong>Features</strong></h2>

<!-- Add icon use img element -->
<h2 class="section-title"><img class="section-title__icon" src="assets/images/icons/star.svg"> Our <strong>Features</strong></h2>
```

## [Lecture] Automatic Sprites with Gulp (Part 3)

在這一小節要完成 Gulp 自動生成 Sprites 檔案的部分，為了在生成新的 `.svg` 檔同時刪去舊有的，需要使用到 `del` 套件：

```bash
# Install del
$ npm install del --save-dev
```

修改 `sprites.js` 檔案：

```javascript
var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    rename = require('gulp-rename'),
    del = require('del');

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

gulp.task('copySpriteGraphic', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/**/*.svg')
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

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);
```

最後將 `index.html` 檔案中的 `<img>` 標籤都取代成特定類別的 `<span>` 標籤，提交當前分支的修改並合併分支：

```bash
$ git add -A
$ git commit -m "Completed automatic sprite generation."
$ git checkout master
$ git merge gulp-sprite
$ git push origin master
```