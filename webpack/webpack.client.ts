import {join, resolve} from 'path';

import * as plugins from './plugins';

import {Configuration} from '../webpack.config';


const config: Configuration = {
	target: 'web',
	entry: {app: './js/index.tsx'},
	context: resolve(process.cwd(), 'client'),
	output: {
		filename: 'js/[name].js',
		chunkFilename: 'js/[name]-[chunkhash].js',
		path: join(process.cwd(), 'dist', 'static'),
		publicPath: '/static/',
	},
	plugins: [
		plugins.htmlWebpackPlugin,
	],
};

export default config;
