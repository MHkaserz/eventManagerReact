// Imports
import React from 'react';

// CSS
import'./Event.css';

const event = props => (
	<li key={props.eventId} className="anEvent">
      	{props.title} {props.price}
    </li>
);

export default event;