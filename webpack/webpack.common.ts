import {resolve} from 'path';

import {Configuration} from 'webpack';

import * as plugins from './plugins';
import * as rules from './rules';


const config: Configuration = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',
	stats: {
		children: true,
		errors: true,
		errorDetails: true,
	},
	module: {
		rules: [
			rules.typescriptRule,
			rules.graphQLRule,
			rules.fontLoader,
		],
	},
	plugins: [
		plugins.progressPlugin,
		plugins.dotenvPlugin,
	],
	resolve: {
		extensions: ['.js', '.ts', '.tsx'],
		plugins: [
			plugins.tsconfigPathsPlugin,
		],
		modules: [
			resolve(process.cwd(), 'client', 'js'),
			resolve(process.cwd(), 'node_modules'),
		],
	},
};

export default config;
