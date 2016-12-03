var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// gulp task for scss compile
gulp.task('sass', function() {
    return gulp.src('src/app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/app/css/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('html', function() {
    return gulp.src('index.html')
        .pipe(browserSync.reload({
            stream: true
        }));
});

// gulp watch
gulp.task('watch', function() {
    // we watch '/src/app/scss/**/*.scss'
    // run 'gulp sass' when any one of these files changed
    gulp.watch('src/app/scss/**/*.scss', ['sass']);

    // other watchers can be written here
    gulp.watch('index.html', ['html']);

});

// browser sync
gulp.task('browserSync', function() {
    return browserSync.init({
        server: {
            baseDir: ''
        },
    });
});


gulp.task('default', ['watch', 'browserSync']);