import React, { useState } from 'react'
import { WeatherHour } from '../../../../models/forecast.model'
import { determineWindDirection } from '../../../../util/determineWindDirection';
import { getPrecipitation } from '../../../../util/getPrecipitation';

import './ChoosenDayHour.scss'

const formatTime = (timeStr: string) => {
	const time = new Date(timeStr).toLocaleTimeString().split(':');
	return `${time[0]}:${time[1]}`
}


const ChoosenDayHour = ({ hour }: { hour: WeatherHour }) => {
	return (
		<li className='choosen-day-hour'>
			<div>
				<h3>{formatTime(hour.time)}</h3>
				<div><img src={hour.condition.icon} alt='Condition icon'></img></div>
				<p>{hour.temp_c}</p>
				<p>{hour.feelslike_c}</p>
				<p>{hour.pressure_mb}</p>
				<p>{hour.humidity}</p>
				<p className='choosen-day-hour__wind'>
					<span className='choosen-day-hour__image'>
						<img src={determineWindDirection(hour.wind_degree)} alt='WI' />
					</span>
					<span>{hour.wind_kph.toFixed(1)}</span>
				</p>

				<p>{getPrecipitation(hour.chance_of_snow, hour.chance_of_rain)}</p>
			</div>
		</li>
	)
}

export default ChoosenDayHour