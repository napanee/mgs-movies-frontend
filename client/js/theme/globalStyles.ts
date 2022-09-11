import {createGlobalStyle} from 'styled-components';

import NunitoVFBeta from '~/fonts/NunitoVFBeta.woff2';


export default createGlobalStyle`
	@font-face {
		font-display: fallback;
		font-family: Nunito;
		font-weight: inherit;
		font-style: normal;
		src: url(${NunitoVFBeta}) format('woff2');
	}

	* {
		&,
		&::before,
		&::after {
			box-sizing: inherit;
		}

		&:focus {
			outline: none;
		}
	}

	html,
	body {
		// Allow better font smoothing:
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		font-family: Nunito, Verdana, Arial, sans-serif;
		font-weight: inherit;
		font-style: normal;
		font-variation-settings: 'wght' 100;
	}

	html {
		box-sizing: border-box;
		overflow-x: hidden;
	}

	body {
		width: 100vw;
		line-height: inherit;
	}

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
`;
