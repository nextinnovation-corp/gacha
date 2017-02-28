// @flow
import React from 'react';
import s from './Map.css';
import { initMapService } from '../../services/mapService';
import { initAutoCompleteService } from '../../services/autoCompleteService';

export default class Map extends React.Component {
  componentDidMount() {
    const map = initMapService('map');
    initAutoCompleteService(map);
  }

  render() {
    return (
      <div id="map" className={s.map} />
    );
  }
}
