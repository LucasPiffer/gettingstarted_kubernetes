const gulp = require('gulp'),
  nodemon = require('gulp-nodemon');

gulp.task('start', () => {
   nodemon({
     script: "./app.js",
     env: {
       PORT: 8000
     }
   })
})
