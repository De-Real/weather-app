import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import RoutesLayout from './layouts/RoutesLayout'
import ForecastField from './pages/ForecastField'
import ForecastHistory from './pages/ForecastHistory'

const RoutesNavigation = () => {
	return (
		<Routes>
			<Route path='/' element={<RoutesLayout />}>
				<Route index element={<Navigate to='/home' />} />
				<Route path='home' element={<ForecastField />} />
				<Route path='/home/:city/:dayId' element={<ForecastField />} />
				<Route path='/home/:city' element={<ForecastField />} />
				<Route path='history' element={<ForecastHistory />} />
			</Route>
			<Route path="*" element={<div> Not found! </div>} />

		</Routes>
	)
}

export default RoutesNavigation