import React from 'react'
import { WeatherForecast } from '../../../../models/forecast.model'
import { convertTime12to24 } from '../../../../util/convertTime12To24';

import './OverallDayInfo.scss'

const OverallDayInfo = ({ forecast }: { forecast: WeatherForecast }) => {

	const { day, astro } = forecast;

	const formattedTime = ` Sunrise at ${convertTime12to24(astro.sunrise)}; Sunset at ${convertTime12to24(astro.sunset)}`

	return (
		<div className='overall-day-info'>
			<div className='overall-day-info__img'> <img src={day.condition.icon} alt='Weather Icon' /> </div>
			<div>
				<div className='overall-day-info__general'>
					<div className='overall-day-info__conditions'>
						<p>{day.condition.text}</p>
						<p className='overall-day-info__conditions-temperatures'> min: {day.mintemp_c} max: {day.maxtemp_c}</p>
					</div>
					<div className='overall-day-info__additional'>
						<p> Chance of precipitation {Math.max(day.daily_chance_of_snow, day.daily_chance_of_rain)}%</p>
						<p>Humidity percent {day.avghumidity}%</p>
					</div>
				</div>
				<div className='overall-day-info__sunny'>
					<p> Average visibility {day.avgvis_km} km</p>
					<p>{formattedTime}</p>
				</div>
			</div>


		</div>
	)
}

export default OverallDayInfo