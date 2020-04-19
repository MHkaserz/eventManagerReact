// Imports
import React from 'react';

// Componenets
import Booking from './Booking/Booking';

// CSS
import './BookingsList.css';

const bookingsList = props => {
	const bookings = props.bookings.map(
		booking => {
			return <Booking 
			key={booking._id}
			bookingId={booking._id}
			title={booking.bookFor.title} 
			date={booking.bookFor.date}
			updatedAt={booking.updatedAt}
			bookBy={booking.bookBy._id} 
			currentUser={props.currentUser}
			onCancelBooking={props.onCancelBooking} />
		}
	);

	if(!bookings[0]) {
		return (
			<ul className="listedBookings"> <li className="aBooking"> You got no bookings :c </li> </ul>
		);
	}

	return (
		<ul className="listedBookings"> { bookings } </ul>
	);
};

export default bookingsList;