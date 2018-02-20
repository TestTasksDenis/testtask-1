const gulp            = require('gulp');
const concat          = require('gulp-concat');
const uglify          = require('gulp-uglify');
const rename          = require('gulp-rename');
const sass            = require('gulp-sass');
const watch           = require('gulp-watch');
const sourcemaps      = require('gulp-sourcemaps');
const debug           = require('gulp-debug');
const babel           = require('gulp-babel');

// Paths
const ThemeName = "sponge";
const PathToTheme = `./src/theme/${ThemeName}`;
const PathToCss = `./public/css`;
const PathToJs = `./public/js`;

// Common Bundle
gulp.task('sass-common', function () {
    return gulp.src(`${PathToTheme}/${ThemeName}.scss`)
        .pipe(sourcemaps.init())
        .pipe(debug({title: 'Changed SASS File:'}))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            suffix: ".min",
            basename: "common"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(PathToCss))
        .pipe(debug({title: 'Generated CSS File:'}));
});

gulp.task('js-common', function() {
    return gulp.src(PathToTheme + '/**/*.js')
        .pipe(debug({title: 'Changed JavaScript File:'}))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('common.js'))
        .pipe(uglify())
        .pipe(rename({
            //prefix: "prefix-",
            //dirname: "subfolder/subfolder",
            //extname: ".md"
            suffix: ".min",
            basename: "common"
        }))
        .pipe(gulp.dest(PathToJs));
});

// Watchers
gulp.task('default', function (){
    gulp.watch(PathToTheme + '/**/*.scss', ['sass-common']);
    gulp.watch(PathToTheme + '/**/*.js', ['js-common']);
});