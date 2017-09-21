const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {app: './src/index.js'},
    devtool: 'inline-source-map',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer:{
        contentBase: './dist',
        hot:true

    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
          title: 'Development'
        }),
        new webpack.HotModuleReplacementPlugin()
      ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        },
        {
                test: /\.css$/,
                use: [
                       'style-loader',
                       'css-loader'
                     ]
        }
    ]
    }
};