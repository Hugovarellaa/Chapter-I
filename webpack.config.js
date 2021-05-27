const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin') ;

module.exports = {
    mode:'development',
    devtool: 'eval-source-map',
    entry: path.resolve(__dirname, 'src' , 'index.jsx'),
    output: {
        path :path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js' , '.jsx'],
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'public' , 'index.html')
        })
    ],
    devServer:{
        contentBase : path.join(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ],
    }

}