// Imports
import React from 'react';

// Icons
import { SubmitIcon, CancelIcon } from '../../assets/scripts/svgs'

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
			<button title="Cancel" onClick={props.onCancel}> <CancelIcon /> </button>
			<button title="Submit" onClick={props.onConfirm}> <SubmitIcon /> </button>
		</section>
	</div>
);

// Exports
export default Modal;