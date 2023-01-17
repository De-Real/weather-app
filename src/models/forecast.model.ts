export interface WeatherHour {
	time: string,
	temp_c: number,
	condition: {
		text: string,
		icon: string,
	},
	wind_kph: number,
	wind_degree: number,
	wind_dir: string,
	pressure_mb: number,
	precip_mm: number,
	humidity: number,
	cloud: number,
	feelslike_c: number,
	chance_of_rain: number,
	chance_of_snow: number,
	vis_km: number,
	gust_kph: number,
	uv: number

}

export interface WeatherForecast {
	date: string,
	date_epoch: number,
	day: {
		maxtemp_c: number,
		mintemp_c: number,
		avgtemp_c: number,
		maxwind_kph: number,
		totalprecip_mm: number,
		totalsnow_cm: number,
		avgvis_km: number,
		avghumidity: number,
		daily_chance_of_rain: number,
		daily_chance_of_snow: number,
		condition: {
			text: string,
			icon: string,
		},
	},
	astro: {
		sunrise: string,
		sunset: string,
	},
	hour: WeatherHour[]
}


export interface WeatherResponseInterface {
	current: {
		temp_c: string
	}

	location: {

	}

	forecast: {
		forecastday: WeatherForecast[];
	}
}