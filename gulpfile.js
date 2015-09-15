var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var paths = require('./_paths.json');
var sourcemaps = require('gulp-sourcemaps');
var templateCache = require('gulp-angular-templatecache');
var minifyHtml = require('gulp-minify-html');
var uglify = require('gulp-uglify');


// gulp.task('default', ['sass']);
gulp.task('build', ['vndr', 'bndl', 'tpl', 'sass', 'css', 'fonts', 'images', 'index']);

gulp.task('watch', function (file) {
   function fileChange(evt){
     console.log(gutil.colors.magenta('[Watcher] File ' + evt.path.replace(new RegExp('/.*(?=/)/'), '') + ' was ' + evt.type + ', bundling...'));
   }
   gulp.watch(paths.app.index.src, ['index']).on('change', function(evt){fileChange(evt)});
   gulp.watch(paths.app.tpl.src, ['tpl']).on('change', function(evt){fileChange(evt)});
   gulp.watch(paths.app.sass.src, ['sass']).on('change', function(evt){fileChange(evt)});
   gulp.watch(paths.app.css.src, ['css']).on('change', function(evt){fileChange(evt)});
   gulp.watch(paths.app.js.src, {verbose:true}, ['bndl']).on('change', function(evt){fileChange(evt)});
   gulp.watch(paths.app.images.src, ['images']).on('change', function(evt){fileChange(evt)});
   gulp.watch(paths.app.fonts.src, ['fonts']).on('change', function(evt){fileChange(evt)});
});

// Put all .tpl templates into template cache
gulp.task('tpl', function () {
  return gulp.src(paths.app.tpl.src)
    .pipe(minifyHtml({empty: true}))
    .pipe(templateCache(
      'tpl.min.js',{
        module: 'app.core',
        standAlone: false,
        moduleSystem: 'IIFE'
    }
    ))
    .pipe(gulp.dest(paths.app.tpl.dest));
});

// Bundle app scripts
gulp.task('bndl', function(done) {
  gulp.src(paths.app.js.src)
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.min.js'))
    //.pipe(uglify({mangle: false}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.app.js.dest))
    .on('end', done)
});

// Create a vendors bundle
gulp.task('vndr', function(done) {
  gulp.src(paths.vendors.src)
    .pipe(concat('vendors.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.vendors.dest))
    done()
});

gulp.task('sass', function(done) {
  gulp.src(paths.app.sass.src)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename('core.min.css'))
    .pipe(gulp.dest(paths.app.css.dest))
    done()
});

gulp.task('css', function(done) {
   gulp.src(paths.app.css.src)
      .pipe(minifyCss({
        keepSpecialComments: 0
      }))
      .pipe(rename('styles.min.css'))
      .pipe(gulp.dest(paths.app.css.dest))
      .on('end', done)
});

gulp.task('fonts', function(done) {
   gulp.src(paths.app.fonts.src)
      .pipe(gulp.dest(paths.app.fonts.dest))
      done()
});

gulp.task('images', function(done) {
   gulp.src(paths.app.images.src)
      .pipe(gulp.dest(paths.app.images.dest))
      done()
});

gulp.task('index', function(done) {
   gulp.src(paths.app.index.src)
      .pipe(minifyHtml({empty: true}))
      .pipe(gulp.dest(paths.app.index.dest))
      done()
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
