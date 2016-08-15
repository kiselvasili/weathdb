var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/app', //__dirname + '/app',
    output: {
        path: __dirname + '/build',
        filename: './bundle.js'
    },

    resolve: {
        extensions: ['', '.js']
    },

    devServer: {
        port: 8080,
        colors: true,
        hot: true
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', ['css?sourceMap'])
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.html'
        }),
        new CopyWebpackPlugin([{
            from: './app/img',
            to: 'img'
        }]),
       new ExtractTextPlugin('bundle.css')
    ]
};