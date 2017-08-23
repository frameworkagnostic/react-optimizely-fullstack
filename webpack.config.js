const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'dist/static/index.js'
    },
    module: {
        loaders: [
            {
                test : /\.js?/,
                loader : 'babel-loader'
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract('css-loader!stylus-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('dist/static/index.css')
    ]
};
