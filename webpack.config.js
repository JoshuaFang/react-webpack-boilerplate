module.exports = {
    context: __dirname + "/app",
    entry: "./app.js", 
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
    }
}