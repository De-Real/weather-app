import { useContext } from 'react'
import searchContext from '../../../../context/search-ctx';
import { WeatherForecast } from '../../../../models/forecast.model'
import { getWeekDay } from '../../../../util/getWeekDay';

import './ChoosenDayTitle.scss';

const ChoosenDayTitle = ({ forecast }: { forecast: WeatherForecast }) => {

	const { value } = useContext(searchContext);
	const searchingLocation = decodeURI(value);

	const formattedDate = new Date(forecast.date);
	const localeDate = formattedDate.toLocaleDateString();

	const weekDay = getWeekDay(formattedDate);

	return (
		<h2 className='choosen-day-title'> Current weather of the day • {localeDate} • {searchingLocation} • {weekDay} </h2>
	)
}

export default ChoosenDayTitle