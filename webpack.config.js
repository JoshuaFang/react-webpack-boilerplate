
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
                test: /router\.config\.js$/,
                loader: __dirname + "/loaders/router-converter.js"
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader?presets[]=es2015&presets[]=react"
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