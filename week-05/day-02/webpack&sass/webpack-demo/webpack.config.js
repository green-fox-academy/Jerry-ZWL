const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports ={
    entry: {
        app:['./src/index.js', './scss/main.scss']
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase: './dist',
        hot: true
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                  loader: 'css-loader?importLoaders=1',
                })
            },
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
              }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }

};    

