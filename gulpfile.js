var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var del = require('del');
var watch = require('gulp-watch');
var pug = require('gulp-pug');

gulp.task("default", ["clean", "pug", "files"]);

gulp.task("pug", ["clean"], function() {
  return gulp.src('./views/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./pug-compiled'));
});
/*
gulp.task("pug2",['clean','pug'], function(){
  return gulp.src('./pug-files/*.pug')
    .pipe(pug.compile())
    .pipe(gulp.dest('./html'));
});
*/

gulp.task(
	'clean',
	function () {
	del('./pug-compiled/*');
  return true;
	}
);

gulp.task(
	'files',
	['clean', 'pug'],
	function () {
		return gulp
			.src([
				'./views/*.html',
        './pug-compiled/*.html'
			])
			.pipe(gulp.dest('./pug-compiled'));
	}
);


gulp.task(
	'watch',
	function () {
		gulp.start('default');
		watch([
			'./views/*',
			'./*.html'
		],
		function (events) {
			gulp.start('default');
		});
	}
);