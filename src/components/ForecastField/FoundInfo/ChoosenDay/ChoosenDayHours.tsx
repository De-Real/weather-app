import React from 'react'
import { WeatherHour } from '../../../../models/forecast.model'
import ChoosenDayHour from './ChoosenDayHour'

import './ChoosenDayHours.scss'

const ChoosenDayHours = ({ hours }: { hours: WeatherHour[] }) => {
	return (
		<div className='choosen-day-hours'>
			<h2 className='choosen-day-hours__title'> Hour forecast </h2>
			<div className='choosen-day-hours__forecast'>
				<div className='choosen-day-hours__detailed'>
					<p>Temperature C° </p>
					<p>Feels like</p>
					<p>Pressure</p>
					<p>Humidity, %</p>
					<p>Wind, km/h</p>
					<p>Precipitation chance</p>
				</div>
				<ul className='choosen-day-hours__items'>
					{hours.filter((_, index) => index % 3 === 0).map((hour) => {
						return <ChoosenDayHour key={Math.random()} hour={hour} />
					})}
				</ul>
			</div>
		</div>
	)
}

export default ChoosenDayHours