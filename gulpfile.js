var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));

    // done();
});

gulp.task('sass:watch', function() {
  gulp.watch('./sass/*.sass', gulp.series('sass'));
});