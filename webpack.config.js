
var webpack = require('webpack');

module.exports = {
    context: __dirname + "/app",
    entry: { 
        /* use absolute url, relative url or module name */
        app: "./app.js",
        common: [ "react", "react-dom" ]
    }, 
    output: {
        filename: "app.js",
        path: __dirname + "/dist",
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader?presets[]=es2015&presets[]=react"
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("common", "common.js")
    ]
}