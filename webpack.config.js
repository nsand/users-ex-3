const path = require('path');

const plugins = [];

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
	plugins.push(new webpack.optimize.UglifyJsPlugin({
		mangle: true,
		compress: {
			warnings: false,
		},
	}));
}

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
	plugins,
	devtool: 'cheap-module-source-map',
};
