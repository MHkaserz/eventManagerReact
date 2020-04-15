// Imports
import React, { Component } from 'react';
import { connect } from "react-redux";

// Componenets
import Modal from '../components/Modal/Modal';
import Backdrop from '../components/Backdrop/Backdrop';
import EventsList from '../components/Events/EventsList/EventsList';
import Loader from '../components/Loader/Loader';

// Icons
import { CreateIcon } from '../assets/scripts/svgs';

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

	book = () => {
		// Get the current event
		const currentEventId = this.props.selectedEvent._id;

		// Prepare the query
		let requestBody;

		requestBody = {
		query: `
			mutation {
				bookEvent(eventId: "${currentEventId}") {
					_id createdAt updatedAt
				}
			}
		`
		};

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
				alert(resData.errors[0].message);
			} else {
				// Dispatch the state
				if(this.props.selectedEvent) { 
					// Alert the user and update state
					alert('Event booked successfully!');
					this.cancel();
				} else {
					if(!alert('Something went wrong')){window.location.reload();}
				}
			}
		}).catch(err => { 
			// TODO: Handle network error
			this.cancel();
		});
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
						_id title price description category date
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
				alert(resData.errors[0].message);
			} else {
				// Dispatch the state
				if(this.props.creating) { 
					// Alert the user and update state
					alert('Event created successfully!');

					// Update events without hitting the API
					const updatedEvents = this.props.events;
					updatedEvents.push({
						_id: resData.data.createEvent._id,
						title: resData.data.createEvent.title,
						price: resData.data.createEvent.price,
						description: resData.data.createEvent.description,
						category: resData.data.createEvent.category,
						date: resData.data.createEvent.date,
						owner: {
							_id: this.props.userId,
						}
					})

					// Update state
					this.props.dispatch({ type: "FETCHEDEVENTS", events: updatedEvents });
				} else {
					if(!alert('Something went wrong')){window.location.reload();}
				}
			}
		}).catch(err => { 
			// TODO: Handle network error
			this.cancel();
		});
	};

	// Fetch all events
	fetchEvents = () => {
		// Loader
		this.props.dispatch({ type: "LOADING" })

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
				alert(resData.errors[0].message);
			} else {
				this.props.dispatch({ type: "FETCHEDEVENTS", events: resData.data.events });
			}
		}).catch(err => { 
			// TODO: Handle network error
			this.cancel();
		});
	};

	showDetails = eventId => {
		const selectedEvent = this.props.events.find(event => event._id === eventId);
		this.props.dispatch({ type: "VIEWING", selectedEvent: selectedEvent });
	}

	render() {
		return(
			<React.Fragment>
				{(this.props.creating || this.props.isLoading) && <Backdrop />}
				{this.props.creating && <Modal
					title="ADD EVENT"
					buttonTitle="Confirm"
					isLogged={this.props.isLogged}
					onCancel={this.cancel}
					onConfirm={this.confirm}
					isCreating={this.props.creating}>
					<form className="eventForm">
						<div className="formHolder"> <input ref={this.titleElement} type="text" placeholder=" Title"/> </div>
						<div className="formHolder"> <input ref={this.dateElement} type="datetime-local"/> </div>
						<div className="formHolder"> <input ref={this.priceElement} type="number" placeholder=" Price"/> </div>
						<div className="formHolder"> <input ref={this.categoryElement} type="text" placeholder=" Category"/> </div>
						<div className="formHolder"> <textarea ref={this.descriptionElement} rows="4" placeholder=" Description"></textarea> </div>
					</form> 
				</Modal>}
				{this.props.selectedEvent && <Backdrop />}
				{this.props.selectedEvent && <Modal
					title={this.props.selectedEvent.title.toUpperCase()}
					buttonTitle="Book"
					isLogged={this.props.isLogged}
					onCancel={this.cancel}
					onConfirm={this.book}
					eventOwner={this.props.selectedEvent.owner._id}
					currentUser={this.props.userId}>
						{this.props.selectedEvent.category && <h2> {this.props.selectedEvent.category.toUpperCase()} </h2>}
						<p> {this.props.selectedEvent.description} </p>
				</Modal>}
				<div className="eventsContainer">
					{this.props.isLogged && <button title="Create an event" id="eventCreateButton" onClick={this.initiateCreateEvent}><CreateIcon></CreateIcon></button>}
				</div>
				{this.props.isLoading ? 
					<Loader />
					: <EventsList events={this.props.events} currentUser={this.props.userId} onDetail={this.showDetails} />}
			</React.Fragment>
		);
	}
}

// State handling
const mapStateToProps = (state) => ({
	events: state.events,
    isLogged: state.isLogged,
    switchTo: state.switchTo,
    token: state.token,
    userId: state.userId,
    tokenEx: state.tokenEx,
    creating: state.creating,
	isLoading: state.isLoading,
	selectedEvent: state.selectedEvent
})

export default connect(mapStateToProps)(Events);