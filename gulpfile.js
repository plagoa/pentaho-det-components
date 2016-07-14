var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    connect = require('gulp-connect'),
    minifyCss = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');

gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true,
    port: 8000
  });
});

gulp.task('copy-html', function() {
  gulp.src('./src/**/*.html')
  .pipe(gulp.dest('./dist/'));
});

gulp.task('copy-lib', function() {
  gulp.src('./src/lib/**/*')
  .pipe(gulp.dest('./dist/lib/'));
});

gulp.task('minify-css', function() {
  gulp.src('./src/styles/*.css')
  .pipe(concatCss('main.css'))
  .pipe(minifyCss({compatibility: 'ie8'}))
  .pipe(gulp.dest('./dist/styles/'));
});

gulp.task('reload', function() {
  gulp.src('./src/*.html')
  .pipe(connect.reload());
});

gulp.task('sass', function() {
  gulp.src('./src/styles/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./src/styles/'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.html'], ['reload']);
  gulp.watch(['./src/**/*.js'], ['reload']);
  gulp.watch(['./src/styles/**/*.scss'], ['sass', 'reload']);
});

gulp.task('uglify', function() {
  return gulp.src('./src/scripts/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts/'));
});

gulp.task('default', ['connect', 'watch']);

gulp.task('dist', ['uglify', 'copy-lib', 'minify-css', 'copy-html']);
