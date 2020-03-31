// Imports
import React, { Component } from 'react';
import { connect } from "react-redux";

class Events extends Component {
	render() {
		return(
			<h1> Events </h1>
		);
	}
}

// State handling
const mapStateToProps = (state) => ({
    isLogged: state.isLogged,
    theme: state.theme
})

export default connect(mapStateToProps)(Events);