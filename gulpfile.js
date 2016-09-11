require('es6-promise').polyfill();
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-clean-css');
var sassGlob = require('gulp-sass-glob');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task("sass", function(){
    gulp.src('./src/sass/styles.scss')
		.pipe(sassGlob())
		.pipe(sass({ style: 'expanded' }))
		.pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
		.pipe(minifycss())
		.pipe(gulp.dest('./dist'));
});

gulp.task("watch:sass", ['sass'], function(){
	gulp.watch('./src/sass/*.scss', ["sass"]);
});

/* ****** */
/* Carpet */
/* ****** */
gulp.task("watch:carpet", ['carpet'], function(){
  gulp.watch(['./src/components/*.jsx', './src/components/*.json'], ["carpet"]);
});
gulp.task('carpet', function () {
   return browserify({entries: './src/components/carpet.jsx', extensions: ['.jsx'], debug: true})
       .transform(babelify)
       .bundle()
       .pipe(source('./carpet.js'))
       .pipe(buffer())
       .pipe(gulp.dest('./dist'));
});

gulp.task('copy:fonts', function() {
    return gulp.src(['./src/fonts/firefly/*', './src/fonts/icomoon/fonts/*'])
	.pipe(gulp.dest('./dist/fonts'));
});

gulp.task('copy:images', function() {
    return gulp.src(['./src/images/*'])
	.pipe(gulp.dest('./dist/images'));
});


gulp.task('default', ['watch:sass', 'watch:carpet', 'copy:fonts', 'copy:images']);
