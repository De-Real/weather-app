import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import searchContext from '../../../../context/search-ctx';

import { WeatherForecast } from '../../../../models/forecast.model'
import ForecastDurationDay from './ForecastDurationDay';
import ForecastDurationFilter from './ForecastDurationFilter';

import './ForecastDuration.scss'

const ForecastDuration = ({ days }: { days: WeatherForecast[] | null }) => {
	const ctx = useContext(searchContext);

	if (!days) {
		return null;
	}

	const updatedDays = days.slice(0, ctx.days);

	const arrayMap = updatedDays.map((day) => {
		return <ForecastDurationDay key={day.date_epoch} day={day} />
	})

	return (
		<div>
			<ForecastDurationFilter />
			<div>
				<ul className='forecast-duration__items'>
					{arrayMap}
				</ul>
			</div>
		</div>

	)
}

export default ForecastDuration