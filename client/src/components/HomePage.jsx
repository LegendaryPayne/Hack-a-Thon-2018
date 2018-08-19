import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],
            center: {
                  lat: 33.491,
                  lng: -86.851
            },
            zoom: 11
              };
    }

componentDidMount() {
    this.gogetdata()
}

    gogetdata() {
        fetch('/api/locations')
        .then(res => res.json())
        .then(data => {
            this.setState({
                locations:  data
            });           
        });      
      }
    
    render() {
        console.log(this.state.locations)
        return (
            <React.Fragment>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA5RTu9UsqZebjVIMCFyAYkKImVPxEwtiw" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
        </GoogleMapReact>
      </div>
            </React.Fragment>
        )
    }
}

export default HomePage;