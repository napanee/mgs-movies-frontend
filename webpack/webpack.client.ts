import {join, resolve} from 'path';

import * as plugins from './plugins';
import {defaultPort, devServerHost} from './utils/env';

import {Configuration} from '../webpack.config.babel';


const config: Configuration = {
	target: 'web',
	entry: {app: './js/index.tsx'},
	context: resolve(process.cwd(), 'client'),
	output: {
		filename: 'js/[name].js',
		chunkFilename: 'js/[name]-[chunkhash].js',
		path: join(process.cwd(), 'build', 'static'),
		publicPath: '/static/',
	},
};

// Development
if (process.env.NODE_ENV !== 'production') {
	config.plugins = [
		plugins.reactRefreshWebpackPlugin,
		plugins.htmlWebpackPlugin,
	];
	config.output = {
		publicPath: `http://${devServerHost}:${defaultPort}/`,
		filename: '[name].[fullhash].js',
	};
	config.devServer = {
		client: {
			overlay: false,
		},
		headers: {'Access-Control-Allow-Origin': '*'},
		historyApiFallback: true,
		host: devServerHost,
		hot: true,
		port: defaultPort,
	};
}

export default config;
