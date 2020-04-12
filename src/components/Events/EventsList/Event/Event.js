// Imports
import React from 'react';

// Icons
import { InfoIcon, CheckIcon } from '../../../../assets/scripts/svgs';

// CSS
import'./Event.css';

const event = props => (
	<li className="anEvent">
      	<div>
      		<h1> { props.title.toUpperCase() } </h1>
      		<h2> ${ props.price } - { new Date(props.date).toLocaleDateString() }</h2>
      	</div> 
      	<div>
      		<button className="eventDetailsButton" title="Details" onClick={props.onDetail.bind(this, props.eventId)}> <InfoIcon /> </button>
      		{props.currentUser === props.ownerId ? <div className="ownerCheck" title="Owned"> <CheckIcon /> </div> : <div />}
      	</div>
    </li>
);

export default event;