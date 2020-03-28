// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assests/imgs/navbar/logostroke.png';

// CSS
import './MainNavbar.css';

// The navigation bar
const mainNavbar = props => (
	<div>
		<nav className="navbar">
			<ul className="navItems">
				<li className="navItem profile">
					<NavLink to="/profile">Profile</NavLink>
				</li>
				<li className="navItem">
					<NavLink to="/events">Events</NavLink>
				</li>
				<li className="navItem">
					<NavLink to="/bookings">Bookings</NavLink>
				</li>
				<li className="navItem hasDropdown">
					<a href="#void">Theme</a>
					<ul className="dropdown">
						<li className="dropdownItem"> <a id="dark" href="#dark">Dark</a> </li>
						<li className="dropdownItem"> <a id="light" href="#light">Light</a> </li>
						<li className="dropdownItem"> <a id="default" href="#default">Default</a> </li>
					</ul>
				</li>
				<li className="navItem login">
					<NavLink to="/auth">Login</NavLink>
				</li>
			</ul>
		</nav>
		
		<header>
			<div className="navLogo dark">
				<img src={logo} alt={'Logo'} className="logo" height="250" width="250"/>
				<h1>Eventee | Events Manager</h1>
				<p>React | Node | Express | GraphQL | MongoDB</p>
			</div>
		</header>
	</div>
);

// Exports
export default mainNavbar;