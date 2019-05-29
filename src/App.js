import React, {Component} from 'react';
import {Route, Switch} from 'react-router';

import Layout from './components/Layout';
import Home from './components/Home';
import Form from './components/Form';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import SignUp from './components/SignUp';
import Places from './components/Places';
import ReservationPlaces from './components/ReservationPlaces';
import {Place} from './components/Places';
import setAuthToken from "./utils/setAuthToken";
import Statistics from './components/Statistics';

import ROUTES from './constants/routes'

if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
}

class App extends Component {
    render() {
        return (
            <Switch>
                <Layout>
                    <Route exact path='/' component={Home}/>
                    <Route exact path={ROUTES.SIGN_IN} component={SignIn}/>
                    <Route exact path={ROUTES.SIGN_UP} component={SignUp}/>
                    <Route exact path={ROUTES.SIGN_OUT} component={SignOut}/>
                    <Route exact path={ROUTES.PLACES} component={Places}/>
                    <Route exact path={ROUTES.RESERVATION_PLACES} component={ReservationPlaces}/>
                    <Route exact path={ROUTES.PLACE} component={Place}/>
                    <Route exact path={ROUTES.FORM} component={Form}/>
                    <Route exact path={ROUTES.STATISTICS} component={Statistics}/>
                </Layout>
            </Switch>
        )
    }
}

export default App;
