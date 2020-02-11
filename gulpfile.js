"use strict";

const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const svgstore = require('gulp-svgstore');
const cheerio = require('gulp-cheerio');
const posthtml = require('gulp-posthtml');
const server = require('browser-sync').create();
const uglify = require('gulp-uglify');
const order = require('gulp-order');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

gulp.task("clean", function () {
  return del("build");
});

gulp.task("css", function () {
  return gulp.src("source/scss/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});


gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
    ]))
    .pipe(gulp.dest("build"));
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(gulp.dest("build/img"))
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
});

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp ( {quality: 90}))
    .pipe(gulp.dest("build/img/"));
});

gulp.task("sprite", function () {
  return gulp.src("build/img/*.svg")
    .pipe(cheerio({
      parserOptions: { xmlMode: true }
    }))
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img/"));
});

gulp.task("js", function() {
  return gulp.src("source/js/*.js")
    .pipe(sourcemaps.init())

    .pipe(order([
      '/source/js/utils.js',
      '/source/js/functions.js',
    ], { base: 'source/js' }))
    .pipe(concat('app.js'))
    .pipe(babel())
    .pipe(plumber())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("build/js"))
    .pipe(server.stream());
});

gulp.task("plugins", function() {
  return gulp.src([
    "source/js/plugins/*.js"
  ])
    .pipe(concat('plugins.js'))
    .pipe(uglify())
    .pipe(gulp.dest("build/js/"))
});

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}"
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"));
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/scss/**/*.{scss,scss}", gulp.series("css"));
  gulp.watch("source/img/*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch('source/js/**/*.js', gulp.series('js', 'refresh'));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("build", gulp.series(
  "clean",
  "copy",
  "css",
  "js",
  "plugins",
  "html",
  "images",
  "webp",
  "sprite"
));
gulp.task("start", gulp.series("build", "server"));
