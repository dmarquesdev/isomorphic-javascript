const webpack = require('webpack');

module.exports = {
		entry: __dirname + '/src/client/index.js', 
		output: {
				path: __dirname + '/public/js', 
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
