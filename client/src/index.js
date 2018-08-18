import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

let key = 'AIzaSyA5RTu9UsqZebjVIMCFyAYkKImVPxEwtiw'

let script = `<script async defer src="https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap"></script>`

$("body").append(script)

ReactDOM.render(<App />, document.getElementById('root'));