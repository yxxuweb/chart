'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(url) {
    return path.join(__dirname, '/../' + url);
}
module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    entry: {
        main: './src/main.tsx',
        vendors: [
            'react',
            'react-dom',
        ]
    },
    output: {
        filename: '[name].js',
        path: resolve('dist'),
        library: 'vendors_lib',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                include: resolve('src'),
                use: ['babel-loader', 'ts-loader'],
            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /.(png|jpg|gif|svg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /.(otf|woff|woff2|eot|ttf)$/,
                use: 'file-loader'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "../../dist"),
        port: 9000, //端口改为9000
        open:true // 自动打开浏览器，适合懒人
    },
    devtool: "source-map",
};
