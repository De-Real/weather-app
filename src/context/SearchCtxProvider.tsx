import React, { useState } from 'react';

import SearchContext from "./search-ctx";

const SearchContextProvider = ({ children }: { children: React.ReactNode }) => {

	const [value, setValue] = useState<string>('');
	const [forecastDays, setForecastDays] = useState(3);
	const [userLocation, setUserLocation] = useState<string | undefined>(undefined);

	const changeValue = (inputValue: string) => {
		console.log(inputValue)
		setValue(inputValue)
	}

	const setDaysValue = (daysValue: number) => {
		setForecastDays(daysValue);
	}

	const setUserLocationValue = (userLocationCity: string) => {
		setUserLocation(userLocationCity);
	}

	const searchContextValue = {
		value,
		days: forecastDays,
		userLocation,
		setUserLocationValue,
		changeValue,
		setDays: setDaysValue,
	}

	return <SearchContext.Provider value={searchContextValue}>
		{children}
	</SearchContext.Provider>
}

export default SearchContextProvider;