import {DefaultTheme} from 'styled-components';


export const theme: DefaultTheme = {
	borderRadius: '4px',
	palette: {
		common: {
			black: '#222831',
			white: '#ffffff',
		},
		primary: {
			main: '#726a95',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#709fb0',
			contrastText: '#ffffff',
		},
	},
	swiper: {
		index: 1,
		color: '#ffffff',
		pagination: {
			color: {
				main: '#ffffff',
				inactive: 'rgba(255, 255, 255, 0.4)',
			},
			index: 10,
		},
	},
};
