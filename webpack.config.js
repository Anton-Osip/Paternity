const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: {
		main: ['@babel/polyfill', './index.js'],
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, './dist'),
		open: true,
		compress: true,
		hot: true,
		port: 8080,
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: 'Paternity',
			template: path.resolve(__dirname, './src/index.html'),
		}),
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, './src/assets/img/logo/big-logo.png'),
					to: path.resolve(__dirname, './dist'),
				},
				{
					from: path.resolve(__dirname, './src/assets/img/logo/small-logo.png'),
					to: path.resolve(__dirname, './dist'),
				}
			],
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
	],
	module: {
		rules: [
			// scss
			{
				test: /\.s[ac]ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					'resolve-url-loader',
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
						},
					},
				],
			},
			// Images
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader'
			},
			// Fonts and SVG
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
				type: 'asset/inline',
			},
			// JavaScript
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
}
