import React, { Component } from 'react';
import { render } from 'react-dom';
import {MDCTextField} from '@material/textfield';

const username = new MDCTextField(document.querySelector('.username'));
const password = new MDCTextField(document.querySelector('.password'));


class Login extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>Login</h1>;
    }
}

export default Login;