// Imports
import React, { Component } from 'react';
import { UserIcon, PasswordIcon, LoginIcon, RegisterIcon } from '../assets/scripts/svgs'

// CSS
import './Auth.css';

class Auth extends Component {
	render() {
		return(
			<form className="authForm">
				<div className="formHolder">
					<label htmlFor="emailInput"> 
						<UserIcon></UserIcon>
					</label>
					<input type="email" id="emailInput" placeholder=" Email"/> 
				</div>
				<div className="formHolder">
					<label htmlFor="emailInput"> 
						<PasswordIcon></PasswordIcon>
					</label>
					<input type="password" id="passwordInput" placeholder=" Password"/>
				</div>
				<div className="formActions">
					<button	id="registerButton" type="button" title="Register">
						<RegisterIcon></RegisterIcon>
					</button>
					<button id="loginButton" type="submit" title="Login">
						<LoginIcon></LoginIcon>
					</button>
				</div>
			</form>
		);
	}
}

export default Auth;