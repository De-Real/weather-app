import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import searchContext from '../../../../context/search-ctx'
import { WeatherForecast } from '../../../../models/forecast.model'
import { addDash } from '../../../../util/dashChanger'

import './ForecastDurationDay.scss'

const ForecastDurationDay = ({ day }: { day: WeatherForecast }) => {
	const ctx = useContext(searchContext);
	console.log(ctx.value);
	return (
		<li className='forecast-duration-day'>
			<Link to={`/home/${addDash(ctx.value)}/${day.date_epoch}`}>
				<div className='forecast-duration-day__location-details'>
					<span>{new Date(day.date).toLocaleDateString()}</span>
					<span> • </span>
					<span>{decodeURI(ctx.value)}</span>
				</div>
				<div className='forecast-duration-day__weather'>
					<div className='forecast-duration-day__image'><img src={day.day.condition.icon} alt='Weather icon'></img></div>
					<div className='forecast-duration-day__temperature'>
						<div className='forecast-duration-day__temperature-control'>
							<p><span>min</span><span>{day.day.mintemp_c}</span></p>
							<p><span>max</span><span>{day.day.maxtemp_c}</span></p>
						</div>
						<p className='forecast-duration-day__conditions'>{day.day.condition.text}.</p>
					</div>
				</div>


			</Link>
		</li>)
}

export default ForecastDurationDay