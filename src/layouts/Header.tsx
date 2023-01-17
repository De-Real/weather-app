import React from 'react'

import { NavLink } from 'react-router-dom';
import './Header.scss'

const Header = () => {
	return (
		<header className='header'>
			<div className='header__logo'>
				MyWeather
			</div>
			<nav className='header__nav'>
				<ul className='header__links'>
					<li><NavLink to="/home">Home</NavLink></li>
					<li><NavLink to="/history">History</NavLink></li>
				</ul>
			</nav>
		</header >
	)
}

export default Header