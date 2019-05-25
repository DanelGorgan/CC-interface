import React, {Component} from 'react';
import {Route, Switch} from 'react-router';

import Layout from './components/Layout';
import Home from './components/Home';
import Places from './components/Places';
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
                    <Route exact path={ROUTES.PLACES} component={Places}/>
                    <Route exact path={ROUTES.PLACE} component={Place}/>
                    <Route exact path={ROUTES.STATISTICS} component={Statistics}/>
                </Layout>
            </Switch>
        )
    }
}

export default App;
