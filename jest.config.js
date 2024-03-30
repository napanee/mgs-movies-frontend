const {pathsToModuleNameMapper} = require('ts-jest');
const {compilerOptions} = require('./tsconfig');


module.exports = {
	roots: ['<rootDir>/src'],
	preset: 'ts-jest',
	testEnvironment: 'node',
	// transformIgnorePatterns: ['node_modules/(?!(sequelize|type-fest)/)'],
	moduleFileExtensions: ['js', 'ts', 'tsx', 'd.ts'],
	coveragePathIgnorePatterns: [
		'./server.ts',
	],
	collectCoverageFrom: [
		'**/*.{js,ts}',
	],
	moduleNameMapper: {
		...pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/'}),
	},
	setupFiles: [
	],
};
