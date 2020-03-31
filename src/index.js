// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { themeApplyCache, themeDefault, manipulateClass, isCached } from './assets/scripts/helpers';

// CSS
import './index.css';

// Templates
import App from './App';

// Initial state
const initialState = {
	isLogged: 'false',
	theme: 'dark'
}

// Cache handling
window.onload = function(){
	// Load cached theme
    const theme = localStorage.getItem('theme');
    const isDefault = localStorage.getItem('isDefault');

    // Manage cached theme on reload
    isCached(theme, isDefault);

    // Manage theme events
    document.getElementById('dark').onclick = () => themeApplyCache('light', 'dark');
    document.getElementById('light').onclick = () => themeApplyCache('dark', 'light');
    document.getElementById('default').onclick = () => themeDefault();

    // Load cached auth
    const isLogged = localStorage.getItem('isLogged');
    if(isLogged === 'true'){
    	store.dispatch({ type: "AUTHPASS" });
    }
}

// Redux reducer
function reducer(state = initialState, action) {
	switch(action.type) {
		// Auth actions
		case 'AUTHPASS':
			manipulateClass('loginNav', 'hidden', 'add');
        	manipulateClass('profileNav', 'hidden', 'remove');
        	manipulateClass('bookingsNav', 'hidden', 'remove');
			return { isLogged: 'true' };

		case 'LOGOUT':
			manipulateClass('loginNav', 'hidden', 'remove');
        	manipulateClass('profileNav', 'hidden', 'add');
        	manipulateClass('bookingsNav', 'hidden', 'add');
        	return { isLogged: 'false' };

		// Theme actions
		case 'DARKTHEME': return { theme: 'dark' };
		case 'LIGHTTHEME': return { theme: 'light' };
		case 'DEFAULTTHEME': return { theme: 'default' };

		// Default action
		default: return state;
	}
}

// Init Redux store
const store = createStore(reducer);

// Pass the store with the Provider to the App and render the root
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

