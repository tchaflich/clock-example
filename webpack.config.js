const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.tsx', 
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/, 
            },
            {
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'], 
            },
            {
                test: /\.(ico)$/,
                loader: "file-loader"
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "./dist"),
        clean: true
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Clock example",
        template: "public/template.html",
        favicon: "public/favicon.ico"
    })],
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
            watch: true
        },
        compress: true,
        port: 3000,
        hot: true
    },
    devtool: 'eval-source-map', 
}