const gulp = require('gulp');
const browserify = require('gulp-browserify');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const ts = require('gulp-typescript');
const uglify = require('gulp-uglify');
const Babelify = require('babelify');

gulp.task('clean', function () {
    return gulp
        .src([
            './tmp/',
            './build/'
        ], { read: false, allowEmpty: true })
        .pipe(clean());
});

gulp.task('transpile-ts', gulp.series('clean', function () {
    const tsproject = ts.createProject('./tsconfig.json');
    return tsproject
        .src()
        .pipe(tsproject()).js
        .pipe(gulp.dest('./tmp/js'));
}));

gulp.task('min-js', gulp.series('transpile-ts', function () {
    return gulp
        .src('./tmp/js/built-with.component.js')
        .pipe(browserify({transform: [Babelify.configure({presets: ['@babel/preset-env']})]}))
        .pipe(concat('built-with.component.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build'))
}));

gulp.task('default', gulp.series('min-js'));