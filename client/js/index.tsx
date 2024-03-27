import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';
import {hydrateRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

import App from './components/app';
import {theme} from './theme/theme';


const container = document.getElementById('reactele');
const link = new HttpLink({uri: process.env.API_URL});
const cache = new InMemoryCache().restore(window.__APOLLO_STATE__);
const client = new ApolloClient({link, cache});

hydrateRoot(container!, (
	<BrowserRouter basename="/">
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</ApolloProvider>
	</BrowserRouter>
));
