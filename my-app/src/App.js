import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Layout from './components/Layout';
import Places from './components/places';
import Home from './components/Home';

import ROUTES from './constants/routes'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Layout>
                        <Route exact path={ROUTES.PLACES} component={Places}/>
                        <Route exact path='/' component={Home}/>
                    </Layout>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
