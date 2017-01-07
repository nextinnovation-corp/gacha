import React from 'react';
import GoogleMap from 'google-map-react';
import { googleMap } from '../../config';
import styles from './App.css';

class App extends React.Component {
  render() {
    return (
      <main style={{position: 'relative', width: '100%', height: '100vh', margin: '0'}}>
        <GoogleMap
          bootstrapURLKeys={{
            key: googleMap.API_KEY,
            language: 'en',
          }}
          defaultCenter={{lat: 59.938043, lng: 30.337157}}
          defaultZoom={9}>
        </GoogleMap>
      </main>
    );
  }
}

export default App;
