import {join} from 'path';

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {ProgressPlugin} from 'webpack';

import {deploymentEnv, webpackDir} from '../utils/env';


export const progressPlugin = new ProgressPlugin();

export const reactRefreshWebpackPlugin = new ReactRefreshWebpackPlugin();

let envFile;

switch(deploymentEnv) {
	case 'live':
		envFile = './.env.production';
		break;
	case 'staging':
		envFile = './.env.staging';
		break;
	default:
		envFile = './.env';
		break;
}
export const dotenvPlugin = new Dotenv({path: envFile});

export const htmlWebpackPlugin = new HtmlWebpackPlugin({
	filename: 'index.html',
	inject: 'body',
	template: join(webpackDir, 'template', 'index.ejs'),
});
