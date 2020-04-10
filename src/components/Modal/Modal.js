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
			<button onClick={props.onCancel}> <CancelIcon></CancelIcon> </button>
			<button onClick={props.onConfirm}> <SubmitIcon></SubmitIcon> </button>
		</section>
	</div>
);

// Exports
export default Modal;