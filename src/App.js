// Imports
import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { manipulateClass, themeCache, themeDefault, isCached } from './assets/scripts/helpers';

// Templates
import Auth from './templates/Auth';
import Events from './templates/Events';
import Bookings from './templates/Bookings';

// Componenets
import MainNavbar from './components/Navbar/MainNavbar';

// CSS
import './App.css';

// Executables on load
window.onload = function(){
    // Authentication check
    localStorage.setItem('isLogged', 'false');

    // Prepare theme DOMs
    const darkTh = document.getElementById('dark');
    const lightTh = document.getElementById('light');
    const defaultTh = document.getElementById('default');

    // Load cached theme
    const theme = localStorage.getItem('theme');
    const isDefault = localStorage.getItem('isDefault');

    // Load cached auth
    const isLogged = localStorage.getItem('isLogged');

    // Manage theme events
    darkTh.onclick = () => themeCache('light', 'dark');
    lightTh.onclick = () => themeCache('dark', 'light');
    defaultTh.onclick = () => themeDefault();

    // Manage cached theme on reload
    isCached(theme, isDefault);

    // Manage cached auth on reload
    if(isLogged === 'true') {
        manipulateClass('loginNav', 'hidden', 'add');
        manipulateClass('profileNav', 'hidden', 'remove');
        manipulateClass('bookingsNav', 'hidden', 'remove');
    } else {
        manipulateClass('loginNav', 'hidden', 'remove');
        manipulateClass('profileNav', 'hidden', 'add');
        manipulateClass('bookingsNav', 'hidden', 'add');
    }
}

// Application starting function
function App() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <MainNavbar></MainNavbar>
                <main>
                    <Switch>
                        <Redirect from="/" to="/auth" exact />
                        <Route path="/auth" component={ Auth } />
                        <Route path="/events" component={ Events } />
                        <Route path="/bookings" component={ Bookings } />
                    </Switch> 
                </main>
            </React.Fragment>
        </BrowserRouter>
    );
}

// Exports
export default App;
