const path      = require('path');
const webpack   = require('webpack');

const NODE_ENV  = process.env.NODE_ENV || 'development';
const NODE_PATH = process.env.NODE_PATH || __dirname;

const config = {

    entry: [
        './src/app.js'
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: '/dist/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
            },
            {
                test: /.css/,
                loader: 'style!css',
                include: path.join(__dirname, 'src')
            }
        ]
    },

    devServer: {
        proxy: [{
            path: '/api/*',
            target: 'http://localhost:3001'
        }],
        port: '1336',
        historyApiFallback: true,
    },

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            NODE_PATH: JSON.stringify(NODE_PATH),
        }),
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ],

    devtool: NODE_ENV == 'development' ? 'eval' : null
};

// Production config
if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
