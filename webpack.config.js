
var webpack = require('webpack');

module.exports = {
    debug: true,
    devtool: "source-map",
    entry: {
        app: "./app.js",
        common: [ "react", "react-dom", "react-router" ] 
    },
    output: {
        filename: "[name].js",
        chunkFilename: '[id].chunk.js',
        path: __dirname + "/dist",
        publicPath: "/dist/",
        sourceMapFilename: "[file].map"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        root: __dirname
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("common", "common.js")
    ]
}