'use strict';
// Gọi thư viện sử dụng vào
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({ lazy: true });
var browserSync = require('browser-sync').create();
var taskPath = './tasks/';
var taskList = require('fs').readdirSync(taskPath);
// Load tất cả các task
taskList.forEach(function (taskFile) {
    require(taskPath + taskFile)(gulp, plugins, browserSync);
});

// Lệnh mặc định của Gulp
gulp.task('default', gulp.series(
		'clean',
		'copy-img',
		'copy-fonts',
		'copy-webfonts',
		'copy-favicon',
		'copy-files',
		'copy-data',
		'concat-css',
		'concat-js',
		'tao-sass',
		'tao-js',
		'tao-html',
		'base64',
		'watch',
		'browser-sync',
		function (done) {
			done();
		})
);
gulp.task('build', gulp.series(
		'clean',
		'copy-img',
		'copy-fonts',
		'copy-webfonts',
		'copy-favicon',
		'copy-files',
		'copy-data',
		// 'copy-files-prod',
		'concat-css',
		'concat-js',
		'tao-sass',
		'tao-js',
		'tao-html',
		// Xử lý Production
		'html-min',
		'css-min',
		'js-min',
		// 'inline',
		'base64',
		'autoprefixer',
		'browser-sync',
		function (done) {
			done();
		})
);
