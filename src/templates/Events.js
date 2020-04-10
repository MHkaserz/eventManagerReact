// Imports
import React, { Component } from 'react';
import { connect } from "react-redux";

// Componenets
import Modal from '../components/Modal/Modal';
import Backdrop from '../components/Backdrop/Backdrop'
import EventsList from '../components/Events/EventsList/EventsList';

// Icons
import { CreateIcon } from '../assets/scripts/svgs'

// CSS
import './Events.css';

class Events extends Component {
	// Grab the inputs and put them in props
	constructor(props) {
		super(props);
		this.titleElement = React.createRef();
		this.dateElement = React.createRef();
		this.priceElement = React.createRef();
		this.categoryElement = React.createRef();
		this.descriptionElement = React.createRef();
	};

	// Life cycle hook
	componentDidMount() {
		this.fetchEvents();
	}

	// Handlers
	initiateCreateEvent = () => {
		this.props.dispatch({ type: "CREATING" });
	};

	cancel = () => {
		this.props.dispatch({ type: "CANCEL" });
	};

	confirm = () => {
		// Get the input
		const title = this.titleElement.current.value;
		const price = +this.priceElement.current.value;
		const category = this.categoryElement.current.value;
		const description = this.descriptionElement.current.value;

		const date = this.dateElement.current.value;
		let eventDate;

		// Validate inputs before hitting the API
		if(title.trim().length === 0 || description.trim().length === 0 ||
			price <= 0 || date.trim().length === 0) {
			alert('Please fill all the fields properly');
			return;
		} else {
			eventDate = new Date(date).toISOString();
		}

		// Prepare the query
		let requestBody;

		if(this.props.creating) {
			requestBody = {
			query: `
				mutation {
					createEvent(eventInput: {title: "${title}", price: ${price}, description: "${description}", category: "${category}", date: "${eventDate}"}) {
						_id title price description category date owner { email name }
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
				'Content-type': 'application/json',
				'Authorization': `Bearer ${this.props.token}` 
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
				// Dispatch the state
				if(this.props.creating) { 
					alert('Event created successfully!');
					this.props.dispatch({ type: "CANCEL" });
					this.fetchEvents(); // TODO: Append created event to the state events
				} else {
					if(!alert('Something went wrong')){window.location.reload();}
				}
			}
		}).catch(err => { 
			// TODO: Handle network error
			console.log(err); 
		});
	};

	// Fetch all events
	fetchEvents = () => {
		// Prepare the query
		let requestBody;

		requestBody = {
		query: `
			query {
				events {
					_id title price description category date owner { _id email name }
				}
			}
		`
		};

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
				this.props.dispatch({ type: "FETCHEDEVENTS", events: resData.data.events });
			}
		}).catch(err => { 
			// TODO: Handle network error
			console.log(err); 
		});
	};

	render() {
		return(
			<React.Fragment>
				{this.props.creating && <Backdrop></Backdrop>}
				{this.props.creating && <Modal
					title="ADD EVENT"
					onCancel={this.cancel}
					onConfirm={this.confirm}
					><form className="eventForm">
						<div className="formHolder">
							<input ref={this.titleElement} type="text" placeholder=" Title"/> 
						</div>
						<div className="formHolder">
							<input ref={this.dateElement} type="datetime-local"/> 
						</div>
						<div className="formHolder">
							<input ref={this.priceElement} type="number" placeholder=" Price"/> 
						</div>
						<div className="formHolder">
							<input ref={this.categoryElement} type="text" placeholder=" Category"/> 
						</div>
						<div className="formHolder">
							<textarea ref={this.descriptionElement} rows="4" placeholder=" Description"></textarea>
						</div>
					</form> 
				</Modal>}
				<div className="eventsContainer">
					{this.props.isLogged && <button title="Create an event" id="eventCreateButton" onClick={this.initiateCreateEvent}><CreateIcon></CreateIcon></button>}
				</div>
				<EventsList events={this.props.events} />
			</React.Fragment>
		);
	}
}

// State handling
const mapStateToProps = (state) => ({
	events: state.events,
    isLogged: state.isLogged,
    token: state.token,
    userId: state.userId,
    tokenEx: state.tokenEx,
    creating: state.creating
})

export default connect(mapStateToProps)(Events);