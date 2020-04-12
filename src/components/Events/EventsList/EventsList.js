// Imports
import React from 'react';

// Componenets
import Event from './Event/Event';

// CSS
import './EventsList.css';

const eventsList = props => {
	const events = props.events.map(
		event => {
			return <Event 
			key={event._id}
			eventId={event._id}
			title={event.title} 
			price={event.price}
			date={event.date}
			category={event.category}
			description={event.description}
			ownerId={event.owner._id} 
			currentUser={props.currentUser}
			onDetail={props.onDetail} />
		}
	);

	return (
		<ul className="listedEvents"> { events } </ul>
	);
};

export default eventsList;