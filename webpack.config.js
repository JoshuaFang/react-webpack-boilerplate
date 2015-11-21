
var webpack = require('webpack');
var AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
    entry: {
        app: "./app/app.js",
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
        root: __dirname + "/app"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("common", "common.js"),
        new AssetsPlugin({ path: "./tmp", filename: "assets.json" })
    ]
}