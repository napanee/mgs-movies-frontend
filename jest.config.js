const {pathsToModuleNameMapper} = require('ts-jest');
const {compilerOptions} = require('./tsconfig');


module.exports = {
	roots: ['<rootDir>/src'],
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleFileExtensions: ['js', 'ts', 'tsx', 'd.ts'],
	coveragePathIgnorePatterns: [
		'./server.ts',
		'.helper.ts',
	],
	collectCoverageFrom: [
		'**/*.{js,ts}',
	],
	moduleNameMapper: {
		'swiper/react': '<rootDir>/node_modules/swiper/swiper-react.d.ts',
		'swiper/modules': '<rootDir>/node_modules/swiper/types/modules/index.d.ts',
		'\\.(woff2)$': '<rootDir>/test/__mocks__/file.ts',
		...pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/'}),
	},
	setupFiles: [
		'<rootDir>/test/__mocks__/swiper.ts',
	],
};
