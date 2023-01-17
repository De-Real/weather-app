import React from 'react'
import { WeatherForecast } from '../../../../models/forecast.model'
import ChoosenDayTitle from './ChoosenDayTitle';
import OverallDayInfo from './OverallDayInfo';

import './ChoosenDay.scss'
import ChoosenDayHours from './ChoosenDayHours';
import { useParams } from 'react-router-dom';

const ChoosenDay = ({ days }: { days: WeatherForecast[] }) => {

	const { dayId } = useParams();

	let filtered = days[0];

	if (dayId) {
		const foundDay = days.find((day) => {
			if (day.date_epoch.toString() === dayId) return true;
			return false;
		})
		if (foundDay) {
			filtered = foundDay;
		}
	}

	if (!filtered) return null;

	const day = filtered;

	return (
		<section className='choosen-day'>
			<ChoosenDayTitle forecast={day} />
			<OverallDayInfo forecast={day} />
			<ChoosenDayHours hours={day.hour} />
		</section>
	)
}

export default ChoosenDay