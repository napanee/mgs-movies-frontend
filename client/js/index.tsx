import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';
import {hydrateRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import App from './components/app';


const container = document.getElementById('reactele');
const link = new HttpLink({uri: process.env.API_URL});
const cache = new InMemoryCache().restore(window.__APOLLO_STATE__);
const client = new ApolloClient({link, cache});

hydrateRoot(container!, (
	<BrowserRouter basename="/">
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</BrowserRouter>
));
