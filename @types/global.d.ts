import {NormalizedCacheObject} from '@apollo/client';


declare global {
	interface Window {
		__APOLLO_STATE__: NormalizedCacheObject;
	}

	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: 'development' | 'test' | 'production';
		}
	}
}
