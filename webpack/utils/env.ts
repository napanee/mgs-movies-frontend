import {join} from 'path';


export const deploymentEnv = process.env.DEPLOYMENT_ENV;
export const rootDir = join(__dirname, '..', '..');
export const webpackDir = join(__dirname, '..');
export const defaultPort = 8080;
export const devServerHost = '0.0.0.0';
