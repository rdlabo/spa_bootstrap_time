var gulp   = require('gulp'),
    riot   = require('gulp-riot'),
    eslint = require('gulp-eslint'),
    babel  = require('gulp-babel');

gulp.task('babel', () => {
   return gulp.src('src/js/*.js')
      .pipe(babel())
      .pipe(gulp.dest('src/'))
})

gulp.task('eslint', () => {
   return gulp.src('src/*.js')
      .pipe(eslint( { useEslintrc: false } ))
      .pipe(eslint.format());
});

gulp.task('riot', () => {
  return gulp.src('src/tag/*.jade')
      .pipe(riot({ template: 'jade' }))
      .pipe(gulp.dest('src/dest'))
})

gulp.task('watch', () => {
   gulp.watch('src/js/*.js', () => {
      gulp.run('babel')
   })

   gulp.watch('src/*.js', () => {
      gulp.run('eslint')
   })
   gulp.watch('src/tag/*.jade', () => {
      gulp.run('riot')
   })
})

gulp.task('default', ['babel', 'eslint', 'riot'])
