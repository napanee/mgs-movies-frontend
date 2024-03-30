import {join} from 'path';

import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import NodemonPlugin from 'nodemon-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import {ProgressPlugin} from 'webpack';

import {webpackDir} from '../utils/env';


export const nodemonPlugin = new NodemonPlugin();

export const progressPlugin = new ProgressPlugin();

export const dotenvPlugin = new Dotenv();

export const htmlWebpackPlugin = new HtmlWebpackPlugin({
	filename: 'index.html',
	inject: 'body',
	template: join(webpackDir, 'template', 'index.ejs'),
});

export const tsconfigPathsPlugin = new TsconfigPathsPlugin();
