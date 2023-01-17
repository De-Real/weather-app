import React, { useContext } from 'react'
import historyContext from '../../context/history-ctx'
import ForecastHistoryItem from './ForecastHistoryItem'

import './ForecastHistoryItems.scss'

const ForecastHistoryItems = () => {

	//Get some info from context and render it

	const { historyRequests } = useContext(historyContext)

	return (
		<div className='forecast-history'>
			<ul className='forecast-history__items'>
				{historyRequests.map((city) => {
					return <ForecastHistoryItem key={Math.random()} city={city} />
				})}
			</ul>
		</div >
	)
}

export default ForecastHistoryItems