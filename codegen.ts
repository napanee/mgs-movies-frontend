import type {CodegenConfig} from '@graphql-codegen/cli';


const config: CodegenConfig = {
	overwrite: true,
	schema: 'https://movies.martingschneider.de/graphql',
	documents: 'client/js/**/*.graphql',
	generates: {
		'./client/js/graphql-types.ts': {
			plugins: ['typescript'],
			config: {
				skipTypename: true,
				avoidOptionals: {
					field: true,
					inputValue: true,
					defaultValue: true,
				},
				scalars: {
					ID: 'number',
				},
			},
		},
		'./': {
			preset: 'near-operation-file',
			presetConfig: {
				baseTypesPath: './client/js/graphql-types.ts',
				extension: '.helper.ts',
			},
			plugins: ['typescript-operations', 'typescript-react-apollo'],
			config: {
				skipTypename: true,
			},
		},
	},
};

export default config;
