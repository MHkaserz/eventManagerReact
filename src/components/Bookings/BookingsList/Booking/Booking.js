// Imports
import React from 'react';

// Icons
import { CancelIcon } from '../../../../assets/scripts/svgs';

// CSS
import'./Booking.css';

const booking = props => (
	<li className="aBooking">
        <div>
            <h1> {props.title.toUpperCase()} - {new Date(props.date).toLocaleDateString()} </h1>
            <h2> Booked on: {new Date(props.updatedAt).toLocaleDateString()} </h2>
        </div>
      	<div>
      		<button className="bookingCancelButton" title="Cancel" onClick={props.onCancelBooking.bind(this, props.bookingId)}> <CancelIcon /> </button>
      	</div>
    </li>
);


export default booking;