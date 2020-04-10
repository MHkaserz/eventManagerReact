// Imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// Icons
import { LogoutIcon, LoginIcon, UserIcon, ThemeIcon, BookingsIcon, EventsIcon, DarkIcon, LightIcon, DefaultIcon } from '../../assets/scripts/svgs';

// Assests
import logo from '../../assets/imgs/navbar/logostroke.png';

// CSS
import './MainNavbar.css';

// The navigation bar
const mainNavbar = props => {
	return (
		<div className="navbarContainer">
			<nav className="navbar">
				<ul className="navItems">
					<li className="navItem" title="Events">
						<NavLink to="/events">
							<EventsIcon />
						</NavLink>
					</li>
					<li id="bookingsNav" className="navItem hidden" title="Bookings">
						<NavLink to="/bookings">
							<BookingsIcon />
						</NavLink>
					</li>
					<li className="navItem hasDropdown">
						<button title="Theme">
							<ThemeIcon />
						</button>
						<ul className="dropdown">
							<li className="dropdownItem"> 
								<button id="dark" title="Dark">
									<DarkIcon />
								</button> 
							</li>
							<li className="dropdownItem"> 
								<button id="light" title="Light">
									<LightIcon />
								</button> 
							</li>
							<li className="dropdownItem"> 
								<button id="default" title="Default">
									<DefaultIcon />
								</button> 
							</li>
						</ul>
					</li>
					<li id="loginNav" className="navItem" title="Login">
						<NavLink to="/auth">
							<LoginIcon />
						</NavLink>
					</li>
					<li id="profileNav" className="navItem hidden" title="Profile">
						<NavLink to="/profile">
							<UserIcon />
	          			</NavLink>
					</li>
					<li id="logoutNav" className="navItem hidden">
						<button title="Logout" onClick={props.logout}>
							<LogoutIcon />
						</button>
					</li>
				</ul>
			</nav>
			
			<header>
				<div className="navLogo dark">
					<img src={logo} alt={'Logo'} className="logo" height="220" width="220" />
					<h1>Eventee | Events Manager</h1>
					<p>React | Redux | Node | Express | GraphQL | MongoDB</p>
				</div>
			</header>
		</div>
	);
}

// Exports
export default mainNavbar;