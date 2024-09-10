import {join} from 'path';


const ROOT_DIR = __dirname.replace(/\/src\/config|\/dist/g, '');
const STATIC_ROOT = join(ROOT_DIR, 'dist', 'static');
const STATIC_URL = '/static/';

export {
	STATIC_ROOT,
	STATIC_URL,
};
