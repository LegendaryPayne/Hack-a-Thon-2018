import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

import { render } from 'react-dom';

class Signup extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (

<React.Fragment>

<form className="text-center border border-light p-5">

<p className="h4 mb-4">Sign up</p>

<div className="form-row mb-4">

    <div className="col">
        
        <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="First name"/>
    </div>

    <div className="col">

        <input type="text" id="defaultRegisterFormLastName" className="form-control" placeholder="Last name"/>
    </div>

</div>

<input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="E-mail"/>


<input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
<small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
    At least 8 characters and 1 digit
</small>


<button className="btn btn-info my-4 btn-block" type="submit">Sign in</button>

<p>By clicking
    <em>Sign up</em> you agree to our
    <NavLink to="/somewhere"> terms of service.</NavLink>
    </p>

</form>

</React.Fragment>
         
        );
    }
}

export default Signup;