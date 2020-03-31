// Imports
import React, { Component } from 'react';
import { connect } from "react-redux";

// Icons
import { UserIcon, PasswordIcon, LoginIcon, RegisterIcon } from '../assets/scripts/svgs'

// CSS
import './Auth.css';

class Auth extends Component {
	authorize = () => {
		this.props.dispatch({ type: "AUTHPASS" });
	};

	register = () => {
		this.props.dispatch({ type: "LOGOUT" });
	};

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
					<button	onClick={this.register} id="registerButton" type="button" title="Register">
						<RegisterIcon></RegisterIcon>
					</button>
					<button onClick={this.authorize} id="loginButton" type="button" title="Login">
						<LoginIcon></LoginIcon>
					</button>
				</div>
			</form>
		);
	}
}

// State handling
const mapStateToProps = (state) => ({
    isLogged: state.isLogged,
    theme: state.theme
})

export default connect(mapStateToProps)(Auth);