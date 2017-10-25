const webpack = require('webpack');

const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
    devtool: 'source-map',
    entry: {
        filename: './src/SelzClient.js',
    },
    output: {
        filename: './dist/SelzClient.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015-native-modules'],
                },
            },
        ],
    },
    plugins: [
        // Uglify js
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false },
            sourceMap: true,
        }),

        // Env plugin
        new webpack.DefinePlugin({
            'proccess.env': { NODE_ENV: JSON.stringify(nodeEnv) },
        }),
    ],
};
