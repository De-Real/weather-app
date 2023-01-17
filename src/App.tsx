import React, { useEffect } from 'react';
import RoutesNavigation from './RoutesNavigation';
const App: React.FC = () => {

	useEffect(() => {
		document.title = 'Weather App'
	}, [])


	return (
		<main>
			<RoutesNavigation />
		</main>
	);
}

export default App;
