var gulp   = require('gulp'),
    riot   = require('gulp-riot'),
    eslint = require('gulp-eslint'),
    babel  = require('gulp-babel');

gulp.task('babel', () => {
   return gulp.src('build/js/*.js')
      .pipe(babel())
      .pipe(gulp.dest('build/'))
})

gulp.task('eslint', () => {
   return gulp.src('build/*.js')
      .pipe(eslint( { useEslintrc: false } ))
      .pipe(eslint.format());
});

gulp.task('riot', () => {
  return gulp.src('build/tag/*.jade')
      .pipe(riot({ template: 'jade' }))
      .pipe(gulp.dest('build/dest'))
})

gulp.task('watch', () => {
   gulp.watch('build/js/*.js', () => {
      gulp.run('babel')
   })

   gulp.watch('build/*.js', () => {
      gulp.run('eslint')
   })
   gulp.watch('build/tag/*.jade', () => {
      gulp.run('riot')
   })
})

gulp.task('default', ['babel', 'eslint', 'riot'])
