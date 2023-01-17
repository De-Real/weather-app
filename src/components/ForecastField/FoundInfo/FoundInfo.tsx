import React, { useEffect, useContext, useState } from 'react'
import searchContext from '../../../context/search-ctx'
import ForecastDuration from './ForecastDuration/ForecastDuration'
import { WeatherResponseInterface, WeatherForecast } from '../../../models/forecast.model'
import ChoosenDay from './ChoosenDay/ChoosenDay'
import './FoundInfo.scss'
import { useParams } from 'react-router-dom'
import historyContext from '../../../context/history-ctx'


const FoundInfo = () => {
	const [days, setDays] = useState<WeatherForecast[]>([]);

	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState(true);

	const { value } = useContext(searchContext);
	const { addHistoryRequest } = useContext(historyContext);


	useEffect(() => {
		const fetchData = async () => {

			setLoading(true);
			setError('');

			if (!value) {
				console.log('No provided value')
				// setError('No provided data');
				setLoading(false);
				return;
			}


			console.log("VALUE FOUND!!!", value);
			const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2fd38a87e8c84cf493c171558230501&q=${encodeURI(value)}&days=14`)

			if (!response.ok) {
				console.log(response.statusText);
				setError(response.statusText || 'Something went wrong');
				setLoading(false);
				return;
			}

			const results: WeatherResponseInterface = await response.json();


			if (results) {
				setDays(results.forecast.forecastday)
				setLoading(false);
				addHistoryRequest(value);
			} else {
				setError('No data found!')
				setLoading(false);
			}
		}
		fetchData();
	}, [value])


	const errorElement = error && <p>Error occured! Reason: {error}. Please try another city.</p>
	const loadingElement = loading && <img src='https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif' alt='Loading gif' />
	const mainElement = !error && !loading && <>
		<ChoosenDay days={days} />
		<ForecastDuration days={days} />
	</>

	if (!days.length && !error) {
		return null
	}
	return (
		<section className='found-info'>
			{errorElement}
			{loadingElement}
			{mainElement}
		</section>

	)
}

export default FoundInfo