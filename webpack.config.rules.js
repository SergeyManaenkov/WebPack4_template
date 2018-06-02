const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );

module.exports = function () {
    return [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        /*{
            test: /\.(css)$/,
            use: [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        },*/
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]'
                    }
                }
            ]
        }/*,
        {
            test: /\.hbs/,
            loader: 'handlebars-loader'
        }*/
    ];
};

