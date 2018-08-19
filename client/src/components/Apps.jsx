import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home'
import Signup from './signup'

class Apps extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/signup" component={Signup} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Apps;