/**
 * @see https://webpack.js.org/guides/typescript/#loader
 */
export const typescriptRule = {
	test: /\.tsx?$/,
	loader: 'ts-loader',
	options: {
		transpileOnly: true,
	},
	exclude: /node_modules/,
};

export const graphQLRule = {
	test: /\.(graphql|gql)$/,
	exclude: /node_modules/,
	use: {
		loader: 'graphql-tag/loader',
	},
};

export const fontLoader = {
	test: /\.(woff|woff2|eot|ttf|svg)$/,
	use: {
		loader: 'url-loader',
	},
};
