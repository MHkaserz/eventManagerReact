// Imports
import React, { Component } from 'react';
import { connect } from "react-redux";

// Componenets
import Modal from '../components/Modal/Modal';
import Backdrop from '../components/Backdrop/Backdrop'

// CSS
import './Events.css';

class Events extends Component {
	// Handlers
	initiateCreateEvent = () => {
		this.props.dispatch({ type: "CREATING" });
	};

	cancel = () => {
		this.props.dispatch({ type: "CANCEL" });
	};

	confirm = () => {
		this.props.dispatch({ type: "CANCEL" });
	};

	render() {
		return(
			<React.Fragment>
				{this.props.creating && <Backdrop></Backdrop>}
				{this.props.creating && <Modal
					title="ADD EVENT"
					onCancel={this.cancel}
					onConfirm={this.confirm}
					> </Modal>}
				<div className="eventsContainer">
					{this.props.isLogged && <button id="eventCreateButton" onClick={this.initiateCreateEvent}> Create event </button>}
				</div>
			</React.Fragment>
		);
	}
}

// State handling
const mapStateToProps = (state) => ({
    isLogged: state.isLogged,
    switchTo: state.switchTo,
    token: state.token,
    userId: state.userId,
    creating: state.creating,
    tokenEx: state.tokenEx
})

export default connect(mapStateToProps)(Events);