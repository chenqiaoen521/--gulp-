import gulp from 'gulp';
import sequence from 'gulp-sequence';
import args from './util/args';
gulp.task('build', sequence('clean','stylus','pages','scripts',['css'],['browser','serve']));