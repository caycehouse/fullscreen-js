var gulp = require( 'gulp' );
var bump = require( 'gulp-bump' );
var git = require( 'gulp-git' );

// Update bower, component, npm at once:
gulp.task('bump', function(){
  gulp.src(['./bower.json', './package.json'])
  .pipe(bump())
  .pipe(gulp.dest('./'));
});

gulp.task( 'tag', function () {
  var pkg = require( './package.json' );
  var v = 'v' + pkg.version;
  var message = 'Release ' + v;

  return gulp.src('./')
    .pipe(git.commit(message))
    .pipe(git.tag(v, message))
    .pipe(git.push('origin', 'master', '--tags'))
    .pipe(gulp.dest('./'));
});