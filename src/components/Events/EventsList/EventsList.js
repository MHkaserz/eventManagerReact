// Imports
import React from 'react';

// Componenets
import Event from './Event/Event';

// CSS
import './EventsList.css';

const eventsList = props => {
	const events = props.events.map(
		event => {
			return <Event eventId={event._id} title={event.title} price={event.price}/>
		}
	);

	return (
		<ul className="listedEvents"> { events } </ul>
	);
};

export default eventsList;