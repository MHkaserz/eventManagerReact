// Imports
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// Templates
import Auth from './templates/Auth';
import Events from './templates/Events';
import Bookings from './templates/Bookings';

// Componenets
import MainNavbar from './components/Navbar/MainNavbar';

// CSS
import './App.css';

// Application start point
class App extends Component {
    // Handlers
    logout = () => {
        // localStorage.setItem('token', '');
        // localStorage.setItem('userId', '');
        // localStorage.setItem('tokenEx', '');
        // this.props.dispatch({ type: "LOGOUT" });
        window.location.href = "http://localhost:3000/auth";
    }

    // Render depending on state
    render() {
        if(this.props.isLogged){
            return (
                <BrowserRouter>
                    <React.Fragment>
                        <MainNavbar logout={this.logout} />
                        <main>
                            <Switch>
                                <Redirect from="/" to="/events" exact />
                                <Redirect from="/auth" to="/events" exact />
                                <Route path="/events" component={ Events } />
                                <Route path="/bookings" component={ Bookings } />
                            </Switch> 
                        </main>
                    </React.Fragment>
                </BrowserRouter>
            );
        } else {
            return (
                <BrowserRouter>
                    <React.Fragment>
                        <MainNavbar />
                        <main>
                            <Switch>
                                <Redirect from="/" to="/auth" exact />
                                <Redirect from="/bookings" to="/auth" exact />
                                <Route path="/auth" component={ Auth } />
                                <Route path="/events" component={ Events } />
                            </Switch> 
                        </main>
                    </React.Fragment>
                </BrowserRouter>
            );
        }
    }
}

// State handling
const mapStateToProps = (state) => ({
    isLogged: state.isLogged,
    switchTo: state.switchTo,
    token: state.token,
    userId: state.userId
})

//Exports
export default connect(mapStateToProps)(App);