// Imports
import React, { Component } from 'react';
import { connect } from "react-redux";

// Componenets
import Backdrop from '../components/Backdrop/Backdrop';
import BookingsList from '../components/Bookings/BookingsList/BookingsList';
import Loader from '../components/Loader/Loader';

class Bookings extends Component {
	// Life cycle hook
	componentDidMount() {
		this.fetchBookings();
	}

	// Handlers
	cancelBooking = () => {

	};

	cancel = () => {
		this.props.dispatch({ type: "CANCEL" });
	};

	// Fetch all events
	fetchBookings = () => {
		// Loader
		this.props.dispatch({ type: "LOADING" })

		// Prepare the query
		let requestBody;

		requestBody = {
		query: `
			query {
				bookings {
					_id bookFor { title date } bookBy { _id } updatedAt
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
				this.props.dispatch({ type: "FETCHEDBOOKINGS", bookings: resData.data.bookings });
			}
		}).catch(err => { 
			// TODO: Handle network error
			this.cancel();
			console.log(err); 
		});
	};

	render() {
		return(
			<React.Fragment>
				{this.props.isLoading ? 
					<div> <Loader /> <Backdrop /> </div>
					: <BookingsList bookings={this.props.bookings} currentUser={this.props.userId} onCancelBooking={this.cancelBooking} />}
			</React.Fragment>
		);
	}
}

// State handling
const mapStateToProps = (state) => ({
    events: state.events,
    bookings: state.bookings,
    isLogged: state.isLogged,
    switchTo: state.switchTo,
    token: state.token,
    userId: state.userId,
    tokenEx: state.tokenEx,
    creating: state.creating,
	isLoading: state.isLoading,
	selectedEvent: state.selectedEvent
})

export default connect(mapStateToProps)(Bookings);