const webpack = require('webpack');
const path = require('path');

module.exports = {
	devServer: {
		contentBase: './public',
		headers: { 'Access-Control-Allow-Origin': '*' }
	},
	entry: [
		'webpack-dev-server/client?http://localhost:3001',
		'webpack/hot/only-dev-server',
		'./src/client/index.js'
	],
	output: {
		path: './public/js',
		filename: 'bundle.js',
		publicPath: "http://localhost:3001/js/",
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
        loaders: ['react-hot'],
        exclude: /node_modules/
			},
			{
				loader: 'babel-loader',
				test: /\.jsx?$/,
				exclude: /node_modules/,
				query: {
					presets: ['stage-0', 'react', 'es2015']
				}
			}
		]
	}
}
