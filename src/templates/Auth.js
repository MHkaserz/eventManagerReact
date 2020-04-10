// Imports
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { allowedIn, registering, loggingIn } from '../assets/scripts/helpers';

// Icons
import { SignIcon, UserIcon, PasswordIcon, SubmitIcon, RegisterIcon } from '../assets/scripts/svgs'

// CSS
import './Auth.css';

class Auth extends Component {
	// Grab the inputs and put them in props
	constructor(props) {
		super(props);
		this.emailElement = React.createRef();
		this.passwordElement = React.createRef();
		this.nameElement = React.createRef();
		this.birthElement = React.createRef();
	};

	// Handlers
	authorize = event => {
		// Prevernt the page from reloading on submit
		event.preventDefault();

		// Get the input
		const name = this.nameElement.current.value;
		const email = this.emailElement.current.value;
		const password = this.passwordElement.current.value;


		const birth = this.birthElement.current.value;
		let birthDate;

		// Validate inputs before hitting the API
		if(email.trim().length === 0 || password.trim().length === 0) {
			alert('Please fill all the fields properly');
			return;
		}

		// Validate in case of registering
		if(this.props.switchTo === 'Login') {
			if(birth.trim().length === 0 || name.trim().length === 0) {
				alert('Please fill all the fields properly');
				return;
			}
			birthDate = new Date(birth).toISOString();
		}

		// Prepare the query
		let requestBody;

		if(this.props.switchTo === 'Register') {
			requestBody = {
			query: `
				query {
					login(email: "${email}", password: "${password}") {
						userId token tokenExpiration
					}
				}
			`
			};
		}

		// TODO: Ask them to repeat password in a field that doesn't allow copy-paste
		if(this.props.switchTo === 'Login') {
			requestBody = {
			query: `
				mutation {
					createUser(userInput: {email: "${email}", password: "${password}", name: "${name}", birth: "${birthDate}"}) {
						_id email
					}
				}
			`
			};
		}

		// Hit the API
		fetch('http://localhost:8000/graphql', {
			method: 'POST',
			body: JSON.stringify(requestBody),
			headers: {
				'Content-type': 'application/json'
			}
		}).then(res => {
			// Handle bad requests
			if(res.status !== 200 && res.status !== 201) {
				throw new Error('Denied!');
			}
			// Parse good requests
			return res.json();
		}).then(resData => {
			// Handle the response data
			if(resData.errors) {
				// TODO: Handle errors
			} else {
				// Dispatch the state and token to Redux store and local storage
				if(this.props.switchTo === 'Register') { 
					allowedIn(resData);
					this.props.dispatch({ 
						type: "AUTHPASS", 
						token: resData.data.login.token, 
						userId: resData.data.login.userId, 
						tokenEx: resData.data.login.tokenEx 
					});
				} else {
					if(!alert('New user created! You may login!')){window.location.reload();}
				}
			}
		}).catch(err => { 
			// TODO: Handle network error
			console.log(err); 
		});
	};

	switchToRegister = () => {
		if(this.props.switchTo === 'Register') { 
			registering();
			this.props.dispatch({ type: "REGISTER" }); 
		}

		if(this.props.switchTo === 'Login') {
			loggingIn();
			this.props.dispatch({ type: "LOGIN" }); 
		}
	};

	render() {
		return(
			<form className="authForm" onSubmit={this.authorize} autoComplete="off">
				<div className="formHolder" id="emailInput">
					<label> <UserIcon /> </label>
					<input ref={this.emailElement} type="email" placeholder=" Email"/> 
				</div>
				<div className="formHolder" id="passwordInput">
					<label> <PasswordIcon /> </label>
					<input ref={this.passwordElement} type="password" placeholder=" Password"/>
				</div>
				<div className="formHolder hidden" id="nameInput">
					<label className="dummy"> <PasswordIcon /> </label>
					<input ref={this.nameElement} type="text" placeholder=" Name"/>
				</div>
				<div className="formHolder hidden" id="birthInput">
					<label className="dummy"> <PasswordIcon /> </label>
					<input ref={this.birthElement} type="date"/>
				</div>
				<div className="formActions">
					<button	onClick={this.switchToRegister} id="switchButton" type="button" title={this.props.switchTo}>
						<RegisterIcon /><SignIcon />
					</button>
					<button id="submitButton" type="submit" title="Submit">
						<SubmitIcon />
					</button>
				</div>
			</form>
		);
	}
}

// State handling
const mapStateToProps = (state) => ({
    isLogged: state.isLogged,
    switchTo: state.switchTo,
    token: state.token,
    userId: state.userId,
    tokenEx: state.tokenEx
})

export default connect(mapStateToProps)(Auth);