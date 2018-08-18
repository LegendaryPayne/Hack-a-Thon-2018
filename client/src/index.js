import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import {MDCTextField} from '@material/textfield';

import {MDCRipple} from '@material/ripple';
new MDCRipple(document.querySelector('.cancel'));
new MDCRipple(document.querySelector('.next'));

const username = new MDCTextField(document.querySelector('.username'));
const password = new MDCTextField(document.querySelector('.password'));

ReactDOM.render(<App />, document.getElementById('root'));