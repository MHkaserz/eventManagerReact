// Imports
import React from 'react';

// CSS
import './Modal.css';

const Modal = props => (
	<div className="someModalForm">
		<header className="modalHeader"> 
			{props.title}
		</header>
		<section className="modalInputs"> 
			{props.children}
		</section>
		<section className="modalActions"> 
			<button onClick={props.onCancel}> Cancel </button>
			<button onClick={props.onConfirm}> Confirm </button>
		</section>
	</div>
);

// Exports
export default Modal;