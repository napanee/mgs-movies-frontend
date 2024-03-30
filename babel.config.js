module.exports = {
	'presets': [
		'@babel/preset-env',
	],
	'plugins': [
		[
			'@babel/plugin-transform-typescript', {
				allowDeclareFields: true,
			},
		],
		'tsconfig-paths-module-resolver',
	],
};
