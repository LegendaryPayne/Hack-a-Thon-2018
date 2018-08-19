import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home'

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
                        <Route exact path="/signup" component={Signup}/> 
                        <Route exact path="/login" component={Login}/> 
                        <Route exact path="/" component={Home}/> 
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Apps;