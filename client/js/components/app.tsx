import {Route, Routes} from 'react-router-dom';

import Home from '@pages/home';

import GlobalStyles from '@theme/globalStyles';
import ResetStyles from '@theme/resetStyles';


const App = () => {
	return (
		<>
			<ResetStyles />
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
};

export default App;
