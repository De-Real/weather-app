import React from 'react'
import LocationInput from './LocationInput'
import UserLocation from './UserLocation'

import './SearchingComponent.scss'

const SearchingComponent = () => {
	return (
		<section className='searching-section'>
			<UserLocation />
			<LocationInput />
		</section>
	)
}

export default SearchingComponent