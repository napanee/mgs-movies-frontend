// require('ts-node/register');


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
		'@components(.*)$': '<rootDir>/client/js/components/$1',
		'@pages(.*)$': '<rootDir>/client/js/pages/$1',
	},
	setupFiles: [
	],
};
