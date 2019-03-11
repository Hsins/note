# Section 06 - Gulp Timeout

## Table of Contents

- [Section 06 - Gulp Timeout](#section-06---gulp-timeout)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] What is Browsersync?](#lecture-what-is-browsersync)
  - [Organizing our Gulpfile.js File](#organizing-our-gulpfilejs-file)
  - [[Lecture] Gulp Error Handling](#lecture-gulp-error-handling)

## [Lecture] What is Browsersync?

BrowserSync 可是監聽文件的變化並讓瀏覽器實時地響應變化，並且支持多終端設備的調試，首先透過 npm 工具安裝：

```bash
# Install browser-sync plugin
$ npm install browser-sync --save-dev
```

接著修改 `gulpfile.js` 檔案，引入 `browser-sync` 套件並在 `gulp.task('watch')` 任務中初始化：

```javascript
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    browserSync = require('browser-sync').create();

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

  // 初始化 browserSync，設定根資料夾
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  // 每當 index.html 更動時，重新載入頁面
  watch('./app/index.html', function() {
      browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
      gulp.start('cssInject');
  });
});

// 實時注入 styles.css 文件
gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
```

## Organizing our Gulpfile.js File

在這一小節中要做的事情是將我們的 `gulpfile.js` 進行模組化，首先在根目錄下創建資料夾 `./gulp/tasks` 並將代碼適當地寫入 `styles.js` 和 `watch.js` 中：

```javascript
// File: styles.js
var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});
```

```javascript
// File: watch.js
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
      browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
      gulp.start('cssInject');
  });
});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
```

這樣一來我們只需要在 `gulpfile.js` 裡面將這些文件引入即可：

```javascript
require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
```

## [Lecture] Gulp Error Handling

在 Gulp 運行的過程中，可能會因為無法正確處理錯誤而中止 `gulp watch` 的運行，這部分可以添加錯誤的處理機制：

```javascript
gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString);
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
```