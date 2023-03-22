const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	target: 'web',
	entry: ['./app.scss', './app.js'],
	output: { 
		filename: 'bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Hanover College",
			template: "./index.html",
			minify: {
				collapseWhitespace: true,
				keepClosingSlash: true,
				removeComments: true,
				removeRedundantAttributes: false,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true
			},
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: { name: 'bundle.css' },
					},
					{ loader: 'extract-loader' },
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [autoprefixer()],
							},
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								includePaths: ['./node_modules']
							},
							implementation: require('sass'),
							webpackImporter: false,
						},
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules|bower_components/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
				}
			},
		],
	},
};