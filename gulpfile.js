/********* Variables *********/

/** Paths **/
var destinationPath = 'dist/';
var assetsPath      = 'app/components/**'

/** Extensions **/
var styleRootExtension = '/*.scss'
var styleDestExtension = '/*.css'
var scriptExtension    = '/*.js'

/********* Dependencies *********/
var gulp    = require('gulp'); 
var jshint  = require('gulp-jshint');
var sass    = require('gulp-sass');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');
var connect = require('gulp-connect');

/************* Files *************/
gulp.task('styles', function() {
    return gulp.src('app/userinterfaces.scss')
        .pipe(sass())
        .pipe(gulp.dest('app'));
});

gulp.task('scripts', function() {
    return gulp.src(assetsPath + scriptExtension)
        .pipe(concat('userinterfaces.js'))
        .pipe(gulp.dest('app'))
        .pipe(rename('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app'));
});

/************* Others *************/
gulp.task('lint', function() {
    return gulp.src(assetsPath)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
    gulp.watch(assetsPath + scriptExtension, ['scripts']);
    gulp.watch([assetsPath + styleRootExtension, 'app/userinterfaces.scss'], ['styles']);
});

gulp.task('default', ['styles', 'scripts','watch']);
