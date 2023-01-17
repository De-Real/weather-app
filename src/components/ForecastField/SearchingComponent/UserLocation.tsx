import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import searchContext from '../../../context/search-ctx'
import { capitalize } from '../../../util/capitalize'
import { addDash, removeDash } from '../../../util/dashChanger'
import './UserLocation.scss'


interface CityInterface {
	plus_code: {
		compound_code: string
	}
}

const UserLocation = () => {

	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const [position, setPosition] = useState<GeolocationPosition | null>(null);
	const [city, setCity] = useState('');

	const ctx = useContext(searchContext);
	const { city: searchingCity } = useParams();
	const navigate = useNavigate();

	useEffect(() => {

		setIsLoading(true);

		const successCallback: PositionCallback = (position) => {
			setPosition(position);
		};

		const errorCallback: PositionErrorCallback = ({ message }) => {
			console.error(message);
			setError(message);
			setIsLoading(false);
		};

		navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

	}, [])

	useEffect(() => {
		const getPosition = async () => {

			if (searchingCity) {
				ctx.changeValue(capitalize(removeDash(searchingCity)));
			}

			if (!position) {
				return;
			}

			const { latitude, longitude } = position.coords;

			const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyC71M9G3Cwr6MZt8gxTBAQbe_505td5U4s&language=en`)

			if (!response.ok) {
				setError(response.statusText);
				setIsLoading(false);
				return;
			}

			const results: CityInterface = await response.json();

			//LocationID City, Region, Country
			const formattedLocation = results.plus_code.compound_code.split(',');

			const cityName = formattedLocation[0]
				.split(' ')
				.filter((_, index) => index !== 0)
				.join(' ');

			if (!searchingCity) {
				navigate(`/home/${addDash(cityName)}`)
				ctx.changeValue(capitalize(cityName));
			}

			const fullLocation = formattedLocation.map((item, index) => {
				if (!index) {
					return cityName;
				}
				return item;
			})

			setCity(fullLocation.join(', '));
			setIsLoading(false);

		}

		getPosition();
	}, [])

	if (error) {
		console.error(error);
		return null;
	}

	const userCityElement = <span className='user-city'>{city}</span>;
	const loadingElement = <span>Loading...</span>

	return (
		<>
			<div className='user-location'> Your location: {isLoading ? loadingElement : userCityElement}</div>
		</>
	)
}

export default UserLocation