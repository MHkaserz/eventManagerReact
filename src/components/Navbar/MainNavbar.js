// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// The navigation bar
const mainNavbar = props => (
	<header>

		<div className="navLogo">
			<h1> Eventee </h1>
		</div>

		<nav className="navItems">
			<ul>
				<li><NavLink to="/auth"> Profile </NavLink></li>
				<li><NavLink to="/events"> Events </NavLink></li>
				<li><NavLink to="/bookings"> Bookings </NavLink></li>
			</ul>
		</nav>

	</header>
);

// Exports
export default mainNavbar;