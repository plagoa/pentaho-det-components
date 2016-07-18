var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true,
    port: 8000
  });
});

gulp.task('reload', function() {
  gulp.src('./src/*.html')
  .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.html'], ['reload']);
  gulp.watch(['./src/**/*.js'], ['reload']);
  gulp.watch(['./src/**/*.css'], ['reload']);
});

gulp.task('default', ['connect', 'watch']);
