// Imports
import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// Templates
import Auth from './templates/Auth';
import Events from './templates/Events';
import Bookings from './templates/Bookings';

// CSS
import './App.css';

// Application starting function
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect from="/" to="/auth" exact />
                <Route path="/auth" component={ Auth } />
                <Route path="/events" component={ Events } />
                <Route path="/bookings" component={ Bookings } />
            </Switch>
        </BrowserRouter>
    );
}

// Exports
export default App;
