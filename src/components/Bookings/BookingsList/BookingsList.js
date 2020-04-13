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

	return (
		<ul className="listedBookings"> { bookings } </ul>
	);
};

export default bookingsList;