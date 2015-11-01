# react-webpack-boilerplate
Webpack + React + Babel

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

