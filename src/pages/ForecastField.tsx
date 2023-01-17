import React from 'react'
import FoundInfo from '../components/ForecastField/FoundInfo/FoundInfo'
import SearchingComponent from '../components/ForecastField/SearchingComponent/SearchingComponent'

const ForecastField: React.FC = () => {
	return (
		<div>
			<SearchingComponent />
			<FoundInfo />
		</div>
	)
}

export default ForecastField