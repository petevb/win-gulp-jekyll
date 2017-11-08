var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();

// Task for building blog when something changed:
// gulp.task('build', shell.task(['bundle exec jekyll serve']));
// If you don't use bundle:
// gulp.task('build', shell.task(['jekyll serve']));
// If you use  Windows Subsystem for Linux (thanks @SamuliAlajarvela):
gulp.task('vsts-build', shell.task(['bundle exec jekyll build']));

gulp.task('jk-serve', shell.task(['bundle exec jekyll serve --force_polling']));

// Task for serving blog with Browsersync
gulp.task('bs-serve', function() {
    browserSync.init({ server: { baseDir: '_site/' } });
    // Reloads page when some of the already built files changed:
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['jk-serve', 'bs-serve']);

gulp.task('test', () => {
    console.log("gulp script running");
});