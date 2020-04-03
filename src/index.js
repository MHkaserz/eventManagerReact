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

// Redux reducer // TODO: Maybe refactor or understand dispatch better
function reducer(state = initialState, action) {
	switch(action.type) {
        // Fetch handlers
        case 'FETCHEDEVENTS':
            return {
                events: action.events,
                isLogged: state.isLogged,
                switchTo: 'Register',
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
                token: action.token,
                userId: action.userId,
                tokenEx: action.tokenEx,
                creating: false
            };

		case 'LOGOUT':
        	return initialState;

        // Auth form actions
        case 'REGISTER':
            return {    
                events: state.events,
                isLogged: state.isLogged,
                switchTo: 'Login',
                token: state.token,
                userId: state.userId,
                tokenEx: state.tokenEx,
                creating: state.creating
            };

        case 'LOGIN':
            return {    
                events: state.events,
                isLogged: state.isLogged,
                switchTo: 'Register',
                token: state.token,
                userId: state.userId,
                tokenEx: state.tokenEx,
                creating: state.creating
            };

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

