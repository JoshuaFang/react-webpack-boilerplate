
var gulp = require("gulp");
var gutil = require("gulp-util");
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
var del = require('del');

requireDir('./tasks');

// delete all files
gulp.task("clean", function(cb){
    del("./dist").then(function(){ cb(); });
});

// production
gulp.task("build", function (cb) {
    runSequence(["convert-router", "clean"], "webpack:build", "compile-html", cb);
});

// use webpack dev server to hot replace module
gulp.task("default", function (cb) {
    runSequence(["convert-router", "clean"], "webpack-dev-server", "compile-html", cb);
});

// watch build files 
gulp.task("build-dev", function (cb) {
    runSequence(["convert-router", "clean"], "webpack:build-dev", "compile-html", function(){
        gulp.watch(["./app/**/*"], ["webpack:build-dev"]);
        cb();
    });
});