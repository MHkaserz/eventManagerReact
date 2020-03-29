// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserIcon, ThemeIcon, BookingsIcon, EventsIcon, DarkIcon, LightIcon, DefaultIcon } from '../../assets/scripts/svgs';

// Assests
import logo from '../../assets/imgs/navbar/logostroke.png';

// CSS
import './MainNavbar.css';

// The navigation bar
const mainNavbar = props => (
	<div>
		<nav className="navbar">
			<ul className="navItems">
				<li className="navItem">
					<NavLink to="/events">
						<EventsIcon></EventsIcon>
					</NavLink>
				</li>
				<li id="bookingsNav" className="navItem">
					<NavLink to="/bookings">
						<BookingsIcon></BookingsIcon>
					</NavLink>
				</li>
				<li className="navItem hasDropdown">
					<a href="#theme"><ThemeIcon></ThemeIcon></a>
					<ul className="dropdown">
						<li className="dropdownItem"> 
							<a id="dark" href="#dark">
								<DarkIcon></DarkIcon>
							</a> 
						</li>
						<li className="dropdownItem"> 
							<a id="light" href="#light">
								<LightIcon></LightIcon>
							</a> 
						</li>
						<li className="dropdownItem"> 
							<a id="default" href="#default">
								<DefaultIcon></DefaultIcon>
							</a> 
						</li>
					</ul>
				</li>
				<li id="loginNav" className="navItem">
					<NavLink to="/auth">Login</NavLink>
				</li>
				<li id="profileNav" className="navItem">
					<NavLink to="/profile">
						<UserIcon></UserIcon>
          			</NavLink>
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