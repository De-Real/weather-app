import React, { useState, useContext, useEffect } from 'react'

import './ForecastDurationFilter.scss'
import searchContext from '../../../../context/search-ctx';

const ForecastDurationFilter = () => {
	const { days, setDays } = useContext(searchContext);
	const [value, setValue] = useState<string | undefined>();

	useEffect(() => {
		if (!value) {
			setValue(days.toString());
		}
	}, [days, value])

	const onValueChange = (e: React.FormEvent<HTMLSelectElement>) => {
		const value = e.currentTarget.value;
		setValue(value)
		setDays(+value)
	}

	return (
		<div className='forecast-duration'>
			<h2> Forecast duration </h2>
			<select className='forecast-duration__selection' onChange={onValueChange} value={value}>
				<option value='3'>3 days</option>
				<option value='7'>7 days</option>
				<option value='14'>14 days</option>
			</select>
		</div>
	)
}

export default ForecastDurationFilter