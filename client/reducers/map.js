import update from 'react-addons-update'
import { SET_MAP, SET_CENTER } from '../actions/map';

const initialState = {
  map: null,
  center: {
    lat: 59.938043,
    lng: 30.337157,
  }
};

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MAP:
      return update(state, {
        map: {$set: action.map}
      });

    case SET_CENTER:
      return update(state, {
        center: {
          $set: {
            lat: action.lat,
            lng: action.lng,
          },
        },
      });

    default:
      return state;
  }
}
