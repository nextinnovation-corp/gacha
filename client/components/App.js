import React from 'react';
import GoogleMap from 'google-map-react';
import { connect } from 'react-redux'
import { googleMap } from '../../config';
import { getCurrentLocation } from '../actions/user';
import styles from './App.css';

const Marker = () => (
  <div>
    <i style={{fontSize: '96px'}} className="material-icons">
      restaurant
    </i>
  </div>
);

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentLocation();
  }

  render() {
    return (
      <main style={{position: 'relative', width: '100%', height: '100vh', margin: '0'}}>
        <GoogleMap
          bootstrapURLKeys={{
            key: googleMap.API_KEY,
            language: 'en',
          }}
          center={{
            lat: this.props.currentLocation.lat,
            lng: this.props.currentLocation.lng,
          }}
          defaultZoom={15}>
          <Marker
            lat={this.props.currentLocation.lat}
            lng={this.props.currentLocation.lng}
            text="hi"
          />
        </GoogleMap>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  currentLocation: state.user.currentLocation
});

const mapDispatchToProps = {
  getCurrentLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
