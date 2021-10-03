module.exports = {
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				exclude: /node_modules/,
				resolve: {
					extensions: ['.js', '.jsx'],
				},
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
			},
		],
	},
};
