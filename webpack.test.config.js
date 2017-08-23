const webpackConfig = require('./webpack.config');

module.exports = Object.assign({}, webpackConfig, {
    entry: './test/__resources__/index.js',
    devServer: {
        port: 9000,
        historyApiFallback: {
            index: 'test/__resources__/webpack-dev-server.html'
        }
    }
})
