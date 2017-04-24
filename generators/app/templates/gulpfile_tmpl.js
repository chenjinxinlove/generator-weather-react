var ftpConfig = require('./ftpConfig');
var pathN = ftpConfig.pathN;
var path = require('path');
var sftp = require('gulp-sftp');
var runSequence = require('gulp-sequence');
var gulpOpen = require('gulp-open');
var gutil = require('gulp-util');
var gulp = require('gulp'),
    zip = require('gulp-zip'),
    os = require('os'),
    ftp = require('gulp-ftp');

var browser = os.platform() === 'linux' ? 'Google chrome' : (
  os.platform() === 'darwin' ? 'Google chrome' : (
    os.platform() === 'win32' ? 'chrome' : 'firefox'));

gulp.task('zip',function () {
  gulp.src(['./dist/**/*'])
    .pipe(zip(pathN + '.zip'))
    .pipe(gulp.dest('./'))
});

gulp.task('ftp-ww',function () {
  gulp.src('dist/**/*')
    .pipe(sftp(ftpConfig.ww))
    .pipe(gutil.noop());
});

gulp.task('open-ww', function (done) {
  gulp.src('')
    .pipe(gulpOpen({
      app: browser,
      uri: ftpConfig.wwUrl + pathN + '/'
    }))
    .on('end', done);
});


gulp.task('ftp-wx',function () {
  gulp.src('dist/**/*')
    .pipe(ftp(ftpConfig.wx))
    .pipe(gutil.noop());
});

gulp.task('open-wx', function (done) {
    gulp.src('')
      .pipe(gulpOpen({
        app: browser,
        uri: ftpConfig.wxUrl + pathN + '/'
      }))
      .on('end', done);
});

//外网测试
gulp.task('ftp_ww', runSequence('ftp-ww', 'open-ww'));
//微信
gulp.task('ftp_wx', runSequence('ftp-wx', 'open-wx'));








