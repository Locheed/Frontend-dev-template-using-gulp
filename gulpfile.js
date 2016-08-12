var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    postcss       = require('gulp-postcss'),
    sourcemaps    = require('gulp-sourcemaps'),
    autoprefixer  = require('gulp-autoprefixer'),
    browserSync   = require('browser-sync').create(),
    runSequence   = require('run-sequence'),
    plumber       = require('gulp-plumber'),
    coffee        = require('gulp-coffee'),
    cssnano       = require('gulp-cssnano')
    useref        = require('gulp-useref'),
    uglify        = require('gulp-uglify'),
    gulpIf        = require('gulp-if'),
    del           = require('del');

// ** Default task to start watching filechanges of .sass, .scss and .js **
// ** LiveReload browser **
gulp.task('default', ['browserSync', 'sass'], function() {
      gulp.watch('src/sass/*.+(scss|sass)', ['sass']);
      gulp.watch('*.html', browserSync.reload);
      gulp.watch('src/js/**/*.js', browserSync.reload);
      // Other watchers
    });

// ** Build task to build project **
gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['sass', 'useref', 'fonts'],
    callback
  )
});

// ** Development plugins **
gulp.task('sass', function() {
  return gulp.src('src/sass/*.+(scss|sass)')
    .pipe(plumber({
        handleError: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))
    .pipe(sass()) // Using gulp-sass
    .pipe(plumber.stop())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
});

// ** Building plugins **
gulp.task('autoprefixer', function() {
  return gulp.src('./src/*.css')
    .pipe(plumber({
        handleError: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(sourcemaps.write('.'))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./dist'));
});

gulp.task('useref', function() {
  return gulp.src('src/*.html')
  .pipe(plumber({
        handleError: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))
  .pipe(useref())
  .pipe(gulpIf('*.js', uglify())) // Minifies only if it's a JavaScript file
  .pipe(gulpIf('*.css', cssnano())) // Minifies only if it's a CSS file
  .pipe(plumber.stop())
  .pipe(gulp.dest('dist'))
});

gulp.task('fonts', function() {       // Task copies possible fonts from src to dist
  return gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});

gulp.task('clean:dist', function() {
  return del.sync('dist');
});

// ** Error handling plugins **
gulp.src('./src/*.ext')
    .pipe(plumber())
    .pipe(coffee())
    .pipe(gulp.dest('./dist'));
