
var gulp = require("gulp");
var path = require("path");
var _ = require("lodash");
var fs = require("fs");

var srcFile = path.join(__dirname, "../app/index.html");
var destFile = path.join(__dirname, "../index.html");

gulp.task("compile-html", function (cb) {
    var filesJson = require("../tmp/assets.json");
    var contents = fs.readFileSync(srcFile);
    var tmpl = _.template(contents);
    var result = tmpl({ scripts: filesJson });
    fs.writeFileSync(destFile, result);
    cb();
});