import gulp from 'gulp';
import sequence from 'gulp-sequence';
import args from './util/args';
gulp.task('build', sequence('clean','css','pages','scripts',['browser','serve']));