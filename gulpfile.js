const gulp = require("gulp");
const ts = require("gulp-typescript");
const minify = require('gulp-minify');

const tsProject = ts.createProject('tsconfig.json');

gulp.task("default", function () {
    return tsProject.src()
            .pipe(tsProject())
            .js
            .pipe(minify())
            .pipe(gulp.dest('build'));
});