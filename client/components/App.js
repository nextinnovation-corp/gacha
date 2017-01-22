import React from 'react';
import GoogleMap from 'google-map-react';
import { connect } from 'react-redux'
import { googleMap } from '../../config';
import { getCurrentLocation } from '../actions/user';
import RestaurantMarker from './markers/RestaurantMarker';
import AddLocationButton from './buttons/AddLocationButton';
import MyLocationButton from './buttons/MyLocationButton';
import Header from './header/Header';
import './base.css';
import s from './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentLocation();
  }

  render() {
    return (
      <div className={s.app}>
        <Header />
        <main className={s.map}>
          <MyLocationButton className={s.myLocationButton} />
          <AddLocationButton className={s.addLocationButton} />
          <GoogleMap
            bootstrapURLKeys={{
            key: googleMap.API_KEY,
            language: 'en',
          }}
            center={{
            lat: this.props.currentLocation.lat,
            lng: this.props.currentLocation.lng,
          }}
            defaultZoom={18}
            options={{
            zoomControl: false
          }}
          >
            <RestaurantMarker
              lat={this.props.currentLocation.lat}
              lng={this.props.currentLocation.lng}
              name="집"
            />
          </GoogleMap>
        </main>
      </div>
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
