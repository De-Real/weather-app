import React, { useEffect } from 'react';
import RoutesNavigation from './RoutesNavigation';
const App: React.FC = () => {

	// useEffect(() => {
	// 	const fetchData = async () => {

	// 		const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=2fd38a87e8c84cf493c171558230501&q=Bila Tserkva&days=14');
	// 		if (!response.ok) {
	// 			console.log(response.statusText);
	// 		}

	// 		interface FOEf { results: { current: {}, forecast: { forecastday: [] } } }

	// 		const results = await response.json();

	// 		console.log(results.forecast.forecastday[0].hour[0]);

	// 	}
	// 	fetchData();
	// }, [])

	
	return (
		<main>
			<RoutesNavigation />
		</main>
	);
}

export default App;
