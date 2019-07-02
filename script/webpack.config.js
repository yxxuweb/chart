'use strict';
const path = require('path');

function resolve(url) {
    return __dirname + '../../' + url;
}

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    entry: {
        main: './src/main.ts',
    },
    output: {
        filename: '[name].js',
        path: resolve('dist'),
    },
    module: {
        rules: [
            {
                test: /.ts(x?)$/,
                exclude: /node_modules/,
                include: /src/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                    }
                ],
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
};
