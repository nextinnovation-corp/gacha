import update from 'react-addons-update'
import { SET_CENTER } from '../actions/map';

const initialState = {
  center: {
    lat: 59.938043,
    lng: 30.337157,
  }
};

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CENTER:
      return update(state, {
        center: {
          lat: {$set: action.lat},
          lng: {$set: action.lng},
        },
      });

    default:
      return state;
  }
}
