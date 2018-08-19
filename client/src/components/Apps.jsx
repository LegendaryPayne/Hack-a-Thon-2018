import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home'
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

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/" component={Signup} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Apps;