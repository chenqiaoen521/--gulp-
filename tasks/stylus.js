import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';
import gulpStylus from 'gulp-stylus';

gulp.task('stylus', ()=>{
  return gulp.src('app/stylus/*.styl')
  .pipe(gulpStylus({
    compress: false
  }))
  .pipe(gulp.dest('app/css'))
  .pipe(gulpif(args.watch, livereload()));
})