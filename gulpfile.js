var gulp = require( 'gulp' );
var bump = require( 'gulp-bump' );
var git = require( 'gulp-git' );
var uglify = require( 'gulp-uglify' );
var rename = require( 'gulp-rename' );

gulp.task( 'default', [ 'uglify', 'copy' ], function() {
});

gulp.task( 'uglify', function() {
  gulp.src( './src/fullscreen-js.js')
  .pipe( uglify() )
  .pipe( rename({
    suffix: '.min'
  }))
  .pipe( gulp.dest( './dest' ) );
});

gulp.task( 'copy', function() {
  gulp.src( './src/fullscreen-js.js' )
  .pipe( gulp.dest( './dest' ) );
});

// Update bower, component, npm at once:
gulp.task( 'bump', function() {
  gulp.src(['./bower.json', './package.json'])
  .pipe(bump())
  .pipe(gulp.dest('./'));
});

gulp.task( 'tag', function() {
  var pkg = require( './package.json' );
  var v = 'v' + pkg.version;
  var message = 'Release ' + v;

  return gulp.src('./')
    .pipe(git.commit(message))
    .pipe(git.tag(v, message))
    .pipe(git.push('origin', 'master', '--tags'))
    .pipe(gulp.dest('./'));
});