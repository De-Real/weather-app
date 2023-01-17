import React from 'react'
import { Link } from 'react-router-dom'
import { addDash } from '../../util/dashChanger'
import './ForecastHistoryItem.scss'

const ForecastHistoryItem = ({ city }: { city: string }) => {

	return (
		<li className='foreacast-history__item'>
			<Link to={`/home/${addDash(city)}`}>
				{city}
			</Link>
		</li>
	)
}

export default ForecastHistoryItem