const webpack = require('webpack');
const path = require('path');

module.exports = {
		entry: path.join(__dirname, '/src/client/index.js'),
		output: {
				path: path.join(__dirname, '/public/js'), 
				filename: 'bundle.min.js',
				publicPath: '/'
		},

		devtool: 'source-map',

		module: {
				rules: [
						{
								test: /\.jsx?/,
								exclude: /node_modules/,
								loader: 'babel-loader',
								query: {
										presets: ['es2015', 'react', 'stage-0']
								}
						}
				]
		},

		plugins: [
				new webpack.DefinePlugin({
						'process.env': {
								NODE_ENV: JSON.stringify('production')
						}
				}),
				new webpack.optimize.UglifyJsPlugin({ minimize: true })
		]
};
