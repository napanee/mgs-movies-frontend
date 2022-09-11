import {useEffect, useState} from 'react';

import * as S from './styles';


const Home = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
	  setIsLoading(false);
	}, []);

	return (
		<S.Wrapper>
			<h1>Home {isLoading ? 'lädt...' : 'fertig!'}</h1>
		</S.Wrapper>
	);
};

export default Home;
