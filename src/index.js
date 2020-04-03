// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { themeApplyCache, themeDefault, isCached } from './assets/scripts/helpers';

// CSS
import './index.css';

// Templates
import App from './App';

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
}

// Initial state
const initialState = {
    events: [],
    isLogged: false,
    switchTo: 'Register',
    token: '',
    userId: '',
    tokenEx: '',
    creating: false
}

// Redux reducer
function reducer(state = initialState, action) {
	switch(action.type) {
        // Fetch handlers
        case 'FETCHEDEVENTS':
            return {
                events: action.events,
                isLogged: state.isLogged,
                switchTo: state.switchTo,
                token: state.token,
                userId: state.userId,
                tokenEx: state.tokenEx,
                creating: false
            }

		// Auth actions
		case 'AUTHPASS':
			return {    
                events: state.events,
                isLogged: true,
                switchTo: 'Register',
                token: action.token,
                userId: action.userId,
                tokenEx: action.tokenEx,
                creating: false
            };

		case 'LOGOUT':
        	return initialState;

        // Auth form actions
        case 'REGISTER':
            return { switchTo: 'Login' };

        case 'LOGIN':
            return { switchTo: 'Register' };

        // Modal forms actions
        case 'CREATING':
            return {    
                events: state.events,
                isLogged: true,
                token: state.token,
                userId: state.userId,
                tokenEx: state.tokenEx,
                creating: true
            };

        case 'CANCEL':
            return {    
                events: state.events,
                isLogged: true,
                token: state.token,
                userId: state.userId,
                tokenEx: state.tokenEx,
                creating: false
            };

		// Default action
		default: return state;
	}
}

// Init Redux store
const store = createStore(reducer);

// Pass the store with the Provider to the App and render the root
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

