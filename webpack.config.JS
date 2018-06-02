// Webpack v4
//const webpack = require('webpack');
const rules = require( './webpack.config.rules' )();
const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const WebpackMd5Hash = require( 'webpack-md5-hash' );


module.exports = {
    entry: {
        bundle: './src/index.js',
        style: './src/style.css'
    },
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: rules
    },
    plugins: [
        new CleanWebpackPlugin( 'dist', {} ),
        new MiniCssExtractPlugin( {
            filename: 'style.[contenthash].css',
            chunkFilename: "[id].css"
        } ),
        new HtmlWebpackPlugin( {
            inject: false,
            hash: true,
            title: 'ДругоФильтр',
            template: './src/index.html',
            filename: 'index.html'
        } ),
        new WebpackMd5Hash()
    ]
};