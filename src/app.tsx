import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';
import {getDataFromTree, renderToStringWithData} from '@apollo/client/react/ssr';
import fetch from 'cross-fetch';
import express, {Application, ErrorRequestHandler} from 'express';
import session from 'express-session';
import logger from 'morgan';
import nunjucks from 'nunjucks';
import {StaticRouter} from 'react-router-dom/server';
import sessionFileStore from 'session-file-store';
import {ServerStyleSheet} from 'styled-components';
import {v4 as uuid} from 'uuid';

import App from '@components/app';

import {STATIC_ROOT, STATIC_URL} from './config/config';


const app: Application = express();
const FileStore = sessionFileStore(session);
const sessionTTL = 24 * 60 * 60;

nunjucks.configure('src/views', {
	autoescape: true,
	express: app,
	noCache: app.get('env') === 'development',
});

app.use(logger('dev'));
app.set('view engine', 'html');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
	genid: () => uuid(), // use UUIDs for session IDs,
	cookie: {maxAge: sessionTTL * 1000},
	store: new FileStore({ttl: sessionTTL}),
	secret: 'keyboard cat',
	resave: false,
	rolling: true,
	saveUninitialized: false,
}));
app.use(STATIC_URL, express.static(STATIC_ROOT));
app.get('*', async (req, res) => {
	const cache = new InMemoryCache();
	const link = new HttpLink({
		fetch,
		uri: 'http://localhost:3000/graphql',
	});
	const sheet = new ServerStyleSheet();
	const client = new ApolloClient({
		cache,
		link,
		ssrMode: true,
	});
	const component = sheet.collectStyles(
		<StaticRouter basename="/" location={req.url}>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</StaticRouter>
	);

	try {
		await getDataFromTree(component);
		const content = await renderToStringWithData(component);
		const styles = sheet.getStyleTags();

		res.status(200);
		res.render('base.html', {
			styles,
			apolloState: JSON.stringify(client.cache.extract()),
			content,
			static: STATIC_URL,
		});
	} catch (error) {
		/* eslint-disable no-console */
		console.log('############ ERROR ############');
		console.log(error);
		console.log('############ ERROR ############');
		console.log('######### ERROR DETAIL #########');
		console.log(error.networkError?.result?.errors);
		console.log('######### ERROR DETAIL #########');
		/* eslint-enable no-console */
	}
});
app.use((req, res) => {
	res.status(404).send('<h1>Page not found (404)</h1>');
});
app.use(((err, req, res) => {
	res.status(500).send(`
		<h1>Internal Server Error (500)</h1>
		${err}
	`);
}) as ErrorRequestHandler);

export default app;
