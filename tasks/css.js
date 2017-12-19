import gulp from 'gulp';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';
import minifycss from 'gulp-minify-css';
import args from './util/args';
import livereload from 'gulp-livereload';

gulp.task('css', ()=>{
  return gulp.src('app/css/*.css')
  .pipe(rename({ suffix: '.min' }))
  .pipe(minifycss())
  .pipe(gulp.dest('server/public/css'))
  .pipe(gulpif(args.watch, livereload()));
})