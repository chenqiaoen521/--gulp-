import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';
import gs from 'gulp-stylus';

gulp.task('css', ()=>{
  return gulp.src('app/**/*.styl')
  .pipe(gs({
    compress: true
  }))
  .pipe(gulp.dest('server/public'))
  .pipe(gulpif(args.watch, livereload()));
})