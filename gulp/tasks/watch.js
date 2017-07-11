var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


gulp.task('watch', function(){

	browserSync.init({
		server: {
			baseDir: 'app'
		}
	});
	//change the path if you want to work on another html page.
	watch('./app/index.html', function(){
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.scss', ['sass'], function(){
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function(){
		gulp.start('scriptsRefresh');
	});

}); 


gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/style.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function(){
	browserSync.reload();
});
