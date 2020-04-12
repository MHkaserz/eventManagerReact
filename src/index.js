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
    creating: false,
    isLoading: false,
    selectedEvent: null
}

// Redux reducer // TODO: Maybe refactor or understand dispatch better
function reducer(state = initialState, action) {
	switch(action.type) {
        // Overlays
        case 'LOADING':
            return {    
                events: state.events,
                isLogged: state.isLogged,
                token: state.token,
                userId: state.userId,
                tokenEx: state.tokenEx,
                creating: false,
                isLoading: true,
                selectedEvent: state.selectedEvent
            };

        // Fetch handlers
        case 'FETCHEDEVENTS':
            return {
                events: action.events,
                isLogged: state.isLogged,
                switchTo: 'Register',
                token: state.token,
                userId: state.userId,
                tokenEx: state.tokenEx,
                creating: false,
                isLoading: false,
                selectedEvent: state.selectedEvent
            }

		// Auth actions
		case 'AUTHPASS':
			return {    
                events: state.events,
                isLogged: true,
                switchTo: state.switchTo,
                token: action.token,
                userId: action.userId,
                tokenEx: action.tokenEx,
                creating: false,
                isLoading: false,
                selectedEvent: state.selectedEvent
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
                creating: state.creating,
                isLoading: state.isLoading,
                selectedEvent: state.selectedEvent
            };

        case 'LOGIN':
            return {    
                events: state.events,
                isLogged: state.isLogged,
                switchTo: 'Register',
                token: state.token,
                userId: state.userId,
                tokenEx: state.tokenEx,
                creating: state.creating,
                isLoading: state.isLoading,
                selectedEvent: state.selectedEvent
            };

        // Modal forms actions
        case 'VIEWING':
            return {
                events: state.events,
                isLogged: state.isLogged,
                switchTo: state.switchTo,
                token: state.token,
                userId: state.userId,
                tokenEx: state.tokenEx,
                creating: state.creating,
                isLoading: state.isLoading,
                selectedEvent: action.selectedEvent
            };

        case 'CREATING':
            return {    
                events: state.events,
                isLogged: state.isLogged,
                switchTo: state.switchTo,
                token: state.token,
                userId: state.userId,
                tokenEx: state.tokenEx,
                creating: true,
                isLoading: false,
                selectedEvent: state.selectedEvent
            };

        case 'CANCEL':
            return {    
                events: state.events,
                isLogged: state.isLogged,
                switchTo: state.switchTo,
                token: state.token,
                userId: state.userId,
                tokenEx: state.tokenEx,
                creating: false,
                isLoading: state.isLoading,
                selectedEvent: null
            };

		// Default action
		default: return state;
	}
}

// Init Redux store
const store = createStore(reducer);

// Pass the store with the Provider to the App and render the root
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

