const path = require('path');

module.exports = {
	entry: {
		app: path.resolve(__dirname, 'app', 'app.js'),
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'bundles'),
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'stage-1'],
				},
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: 'html-loader',
				query: {
					attrs: false,
					minimize: true,
					removeAttributeQuotes: false,
					removeRedundantAttributes: false,
					removeEmptyAttributes: false,
				},
			},
		],
	},
	devtool: 'cheap-module-source-map',
};
