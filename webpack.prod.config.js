var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: __dirname + '/app',
    output: {
        path: __dirname + '/build',
        filename: './bundle.js'
    },

    resolve: {
      extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['ng-annotate','babel'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file?name=fonts/[name].[ext]'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css')
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            }
        }),
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.html'
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new CopyWebpackPlugin([{
            from: './app/img',
            to: 'img'
        }]),
       new ExtractTextPlugin('bundle.css')
    ]
};