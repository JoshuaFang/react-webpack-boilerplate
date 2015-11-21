
var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("../webpack.config.js");
var AssetsPlugin = require('assets-webpack-plugin');

gulp.task("webpack:build", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    myConfig.output.filename = "[name].[chunkhash].js";
    myConfig.output.chunkFilename = "[id].chunk.[chunkhash].js";
    myConfig.plugins = [
        new webpack.optimize.CommonsChunkPlugin("common", "common.[chunkhash].js"),
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new AssetsPlugin({ path: "./tmp", filename: "assets.json" })
    ];

    // run webpack
    webpack(myConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task("webpack:build-dev", function(callback) {
    var myDevConfig = Object.create(webpackConfig);
    myDevConfig.devtool = "sourcemap";
    myDevConfig.debug = true;
    // run webpack
    webpack(myDevConfig).run(function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build-dev", err);
        gutil.log("[webpack:build-dev]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task("webpack-dev-server", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    // dev config
    myConfig.devtool = "eval";
    myConfig.debug = true;
    // add HMR plugin
    myConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
    // add HMR entry !!important
    myConfig.entry.common.unshift("webpack-dev-server/client?http://localhost:8000","webpack/hot/dev-server");
    // Start a webpack-dev-server
    new WebpackDevServer(webpack(myConfig), {
        // url path for built files !!important
        publicPath: '/dist/',
        // enable HMR !!important
        hot: true,
        stats: {
            colors: true
        }
    }).listen(8000, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8000");
        callback();
    });
});
