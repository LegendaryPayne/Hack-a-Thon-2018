import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home'
import HomePage from './HomePage'
import Login from './login'
import Signup from './signup'

class Apps extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <Navigation />
                    <div style={{marginTop: "4.66rem"}}></div>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Apps;