import update from 'react-addons-update'
import { SET_CENTER } from '../actions/map';
import { setCenter, setZoom } from '../services/mapService';

export const defaultLatLng = {
  lat: 59.938043,
  lng: 30.337157
};

export const defaultZoom = 16;

const initialState = {
  center: defaultLatLng,
  zoom: defaultZoom
};

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CENTER:
      setCenter(action.latLng);
      setZoom(state.zoom);
      return update(state, {
        center: {
          $set: action.lanLng,
        },
      });

    default:
      return state;
  }
}
