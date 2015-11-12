# react-webpack-boilerplate
Webpack + React + Babel

## WebpackDevServer 配置 Hot Module Replace

配置这东西，没有为什么，跟着抄呗
	
```js
gulp.task("webpack-dev-server", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
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
    });
});
```


## Babel升级问题
注意babel-loader由5.x升级到6.x，设置有所变化。新版本的babel提出了preset的概念。这里用到了preset-es2015与preset-react。

可以作为loader的query string传入：

	{
    	test: /\.jsx?$/,
    	exclude: /node_modules/,
    	loader: "babel-loader?presets[]=es2015&presets[]=react"
	}

或者通过根目录的.babelrc文件进行配置

	{
		presets: ["es2015", "react"]
	}

注意Babel升级后取消了原有的require/import混用的功能，使用require时，别忘了获取其default属性

