import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';
import {hydrate, render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './components/app';


const app = document.getElementById('reactele');
const link = new HttpLink({uri: process.env.API_URL});
const cache = new InMemoryCache().restore(window.__APOLLO_STATE__);
const client = new ApolloClient({link, cache});
const renderMethod = module.hot ? render : hydrate;

renderMethod(
	<BrowserRouter basename="/">
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</BrowserRouter>,
	app
);
