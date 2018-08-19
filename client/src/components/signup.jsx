import React, { Component } from 'react';
import { render } from 'react-dom';

class Signup extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (

<React.Fragment>

<form class="text-center border border-light p-5">

<p class="h4 mb-4">Sign up</p>

<div class="form-row mb-4">

    <div class="col">
        
        <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name"/>
    </div>

    <div class="col">

        <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name"/>
    </div>

</div>

<input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail"/>


<input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
<small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
    At least 8 characters and 1 digit
</small>


<button class="btn btn-info my-4 btn-block" type="submit">Sign in</button>

<p>By clicking
    <em>Sign up</em> you agree to our
    <a href="" target="_blank">terms of service</a> and
    <a href="" target="_blank">terms of service</a>. </p>

</form>

</React.Fragment>
         
        );
    }
}

export default Signup;