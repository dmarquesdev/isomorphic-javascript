module.exports = {
	devServer: {
		contentBase: __dirname + '/public',
		headers: { 'Access-Control-Allow-Origin': '*' }
	},
	entry: [
		'webpack-dev-server/client?http://localhost:3001',
		'webpack/hot/only-dev-server',
		__dirname + '/src/client/index.js'
	],
	output: {
		path: __dirname + '/public/js',
		filename: 'bundle.js',
		publicPath: 'http://localhost:3001/js/',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
		        loaders: ['react-hot-loader'],
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
	}, 

		plugins: [
				new webpack.DefinePlugin({
						'process.env': {
								NODE_ENV: JSON.stringify('development') 
						}
				})
		]
};
