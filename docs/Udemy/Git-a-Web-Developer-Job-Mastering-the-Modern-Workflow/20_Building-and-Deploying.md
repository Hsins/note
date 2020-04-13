---
pageClass: udemy
---

# Building and Deploying

## [Lecture] Preparing Our Files for Go Live (Part 1)

在部屬我們的項目之前，必須知道的是雖然我們所有開發過程中的檔案（包含各個獨立模組的 CSS 與 JavaScript 檔案）都存放在 `/app/` 資料夾中，但對於用戶來說只需要那些經過處理之後的檔案，我們可以透過 Gulp 自動將這些檔案壓縮並存放在 `/dist/` 資料夾中。創建一個 `build.js` 來撰寫我們的自動化流程：

```javascript
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin');

gulp.task('deleteDistFolder', function() {
  return del("./dist");
});

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task('usemin', ['deleteDistFolder'], function() {
  return gulp.src("./app/index.html")
    .pipe(usemin())
    .pipe(gulp.dest("./dist"));
});

gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin']);
```

## [Lecture] Preparing Our Files for Go Live (Part 2)

在這一單元中將完善所有的 Gulp 自動化流程：

```javascript
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "dist"
    }
  });
});

gulp.task('deleteDistFolder', function() {
  return del("./dist");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
  var pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ]

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./dist"));
});

gulp.task('optimizeImages', ['deleteDistFolder', 'icons'], function() {
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function() {
  return gulp.src("./app/index.html")
    .pipe(usemin({
      css: [function() {return rev()}, function() {return cssnano()}],
      js: [function() {return rev()}, function() {return uglify()}]
    }))
    .pipe(gulp.dest("./dist"));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'usemin']);
```

## [Lecture] Go Live! Deploying our Site to GitHub Pages

我們可以使用 Github Page 服務來託管我們的項目，但值得注意的是預設中他希望網站的根目錄是 `/docs/` 而非 `/dists/` 所以必須要修改一下 `build.js`：

```javascript
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  });
});

gulp.task('deleteDistFolder', ['icons'], function() {
  return del("./docs");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
  var pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ]

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./docs"));
});

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function() {
  gulp.start("usemin");
});

gulp.task('usemin', ['styles', 'scripts'], function() {
  return gulp.src("./app/index.html")
    .pipe(usemin({
      css: [function() {return rev()}, function() {return cssnano()}],
      js: [function() {return rev()}, function() {return uglify()}]
    }))
    .pipe(gulp.dest("./docs"));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);
```

除此之外還必須修改資源的路徑，在此不贅述，詳見項目內容。

## [Lecture] Git Tips - How to Handle (and Avoid) Merge Conflicts

在多數的狀況下 Git 可以自動幫我們合併分支，但在多人協作的同時可能因為在不同的時間提交不同的代碼而導致合併的衝突，這部分其實不太需要擔心，因為 Git 會告知我們哪一個檔案存在衝突，打開檔案後也可以清楚地知道哪個部分發生衝突，我們只需要手動修改衝突的部分再重新提交即可。為了避免衝突的發生，講師提供了一些小策略：

- **Tip 01**: Run the `git pull` command often.
- **Tip 02**: Communicate with your team.
- **Tip 03**: Standardize white space settings in text-editor.
- **Tip 04**: Think of `git merge` as a two-way street.