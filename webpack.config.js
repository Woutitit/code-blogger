var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: __dirname,
	entry: './src/js/app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'app.js'
	},
	module: {
        rules: [
        { test: /\.js$/, exclude: /(node_modules|bower_components)/, use: { loader: 'babel-loader' }},
        { test: /\.css$/, use: ExtractTextPlugin.extract({ use: { loader: 'css-loader' }, fallback: "style-loader" })},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},
        {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
        {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/octet-stream"},
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"}
    ]
    },
    plugins: [ new ExtractTextPlugin('app.css') ]
};