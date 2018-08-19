import React, { Component } from 'react';
import { render } from 'react-dom';

class Navigation extends Component {

    constructor(props) {
        super(props);
    }
    

initMap() {
        let map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }


    render() {
        this.initMap()
        return (
            <React.Fragment>
<div id="map" style={{height: "100px"}}></div>
            </React.Fragment>
        )
    }
}

export default Navigation;