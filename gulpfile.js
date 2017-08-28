const del = require('del');
const exec= require('child_process').exec;
const gulp = require('gulp');
var dist = {
  root: "./dist/",
};

function dev(done) {
  exec('node dev-server.js',null);
}
function build(done){
	exec('node build/build.js',null);
}
function clean(done) {
  del.sync(dist.root,{force:true});xsp
  done();
}
gulp.task('clean',clean);
gulp.task('dev', dev);
gulp.task('build', ['clean'],build);
