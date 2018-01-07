import gulp from 'gulp';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';
import minifycss from 'gulp-minify-css';
import args from './util/args';
import livereload from 'gulp-livereload';
import cleanCss from 'gulp-clean-css';
import concat from 'gulp-concat';

gulp.task('css', ()=>{
  return gulp.src(['app/css/reset.css','app/css/layout.css','app/css/lottery.css'])
  .pipe(concat('main.css'))
  .pipe(cleanCss())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('server/public/css'))
  .pipe(gulpif(args.watch, livereload()));
})