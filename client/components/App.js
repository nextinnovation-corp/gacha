import React from 'react';
import GoogleMap from 'google-map-react';
import { connect } from 'react-redux'
import { googleMap } from '../../config';
import { getCurrentLocation } from '../actions/user';
import RestaurantMarker from './markers/RestaurantMarker';
import SearchBox from './search/SearchBox';
import './base.css';
import styles from './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentLocation();
  }

  render() {
    return (
      <main style={{position: 'relative', width: '100%', height: '100vh', margin: '0'}}>
        <SearchBox />
        <GoogleMap
          bootstrapURLKeys={{
            key: googleMap.API_KEY,
            language: 'en',
          }}
          center={{
            lat: this.props.currentLocation.lat,
            lng: this.props.currentLocation.lng,
          }}
          defaultZoom={18}>
          <RestaurantMarker
            lat={this.props.currentLocation.lat}
            lng={this.props.currentLocation.lng}
            name="집"
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
