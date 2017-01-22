import React from 'react';
import GoogleMap from 'google-map-react';
import { connect } from 'react-redux'
import { googleMap } from '../../config';
import { setCenter } from '../actions/map';
import RestaurantMarker from './markers/RestaurantMarker';
import AddLocationButton from './buttons/AddLocationButton';
import MyLocationButton from './buttons/MyLocationButton';
import getCurrentPosition from '../utils/getCurrentPosition';
import Header from './header/Header';
import './base.css';
import s from './App.css';

class App extends React.Component {
  componentDidMount() {
  }

  onClickMyLocationButton = async (e) => {
    const position = await getCurrentPosition();
    this.props.setCenter(position.coords.latitude, position.coords.longitude);
  };

// <RestaurantMarker
//   lat={this.props.currentLocation.lat}
// lng={this.props.currentLocation.lng}
// name="집"
//   />

  render() {
    return (
      <div className={s.app}>
        <Header />
        <main className={s.map}>
          <MyLocationButton
            className={s.myLocationButton}
            onClick={this.onClickMyLocationButton}
          />
          <AddLocationButton className={s.addLocationButton} />
          <GoogleMap
            center={{
              lat: this.props.map.center.lat,
              lng: this.props.map.center.lng,
            }}
            defaultZoom={18}
            options={{
              zoomControl: false
            }}
          >
          </GoogleMap>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentLocation: state.user.currentLocation,
  map: state.map,
});

const mapDispatchToProps = {
  setCenter
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
