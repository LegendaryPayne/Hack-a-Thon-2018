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
                  lat: 59.95,
                  lng: 30.33
            },
            zoom: 11
              };
    }

    gogetdata() {
        fetch('/api/location')
        .then(res => res.json())
        .then(data => {
            this.setState({
                locations:  data
            });           
        });      
      }
    
    render() {
        console.log(this.state.locations)
        this.gogetdata()
        return (
            <React.Fragment>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA5RTu9UsqZebjVIMCFyAYkKImVPxEwtiw" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
            </React.Fragment>
        )
    }
}

export default HomePage;