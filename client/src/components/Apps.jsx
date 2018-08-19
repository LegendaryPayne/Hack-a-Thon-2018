import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import Login from './login';

class Apps extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={HelloWorld} />
<<<<<<< HEAD:client/src/components/app.jsx
                        <Route path="/login" component={Login} />
=======
                        <Route path="/" component={GoodbyeWorld} />
>>>>>>> e2c500743fd927495557ce13de00a95697528b93:client/src/components/Apps.jsx
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;