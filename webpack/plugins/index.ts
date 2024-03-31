import {resolve} from 'path';

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import NodemonPlugin from 'nodemon-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import {HotModuleReplacementPlugin, ProgressPlugin} from 'webpack';

// import {webpackDir} from '../utils/env';


export const nodemonPlugin = new NodemonPlugin();

export const progressPlugin = new ProgressPlugin();

export const dotenvPlugin = new Dotenv();

export const htmlWebpackPlugin = new HtmlWebpackPlugin({
	filename: 'index.html',
	inject: 'body',
	template: resolve(process.cwd(), 'webpack', 'template', 'index.ejs'),
});

export const tsconfigPathsPlugin = new TsconfigPathsPlugin();

export const reactRefreshWebpackPlugin = new ReactRefreshWebpackPlugin();

export const hotModuleReplacementPlugin = new HotModuleReplacementPlugin();
