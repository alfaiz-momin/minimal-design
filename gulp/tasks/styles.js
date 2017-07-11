var gulp = require('gulp'),
sass = require('gulp-sass'),
sassImport = require('gulp-sass-import'),
rename = require('gulp-rename'),
autoprefixer = require('autoprefixer');


gulp.task('styles',function(){
	return gulp.src('./app/assets/styles/style.scss')
	.pipe(sassImport({
		filename: './app/assets/styles/**',
		marker: '/*.scss'
	}))
	.pipe(sass())
	.pipe(rename('style.css'))
	.on('error', function(errorInfo){
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles/'));
});