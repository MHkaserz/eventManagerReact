// Imports
import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

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
    // DOM Elements to handle themes
    const darkTh = document.getElementById('dark');
    const lightTh = document.getElementById('light');
    const defaultTh = document.getElementById('default');
    const body = document.body;

    // Event handlers
    darkTh.onclick = () => { 
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
    };

    lightTh.onclick = () => { 
        body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
    };

    defaultTh.onclick = () => {
        if(body.classList.contains('default')){
            body.classList.remove('default');
            localStorage.setItem('isDefault', false);
        } else { body.classList.add('default'); 
            localStorage.setItem('isDefault', true);
        }
    };

    // Apply cache on reload
    const theme = localStorage.getItem('theme');
    const isDefault = localStorage.getItem('isDefault');

    if(theme) { body.classList.add(theme); isDefault && body.classList.add('default') }
    else { body.classList.add('dark'); }
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
