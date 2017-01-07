import update from 'react-addons-update'
import { GET_CURRENT_LOCATION }from '../actions/user';

const initialState = {
  currentLocation: {
    lat: 59.938043,
    lng: 30.337157,
  }
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_LOCATION:
      return update(state, {
        currentLocation: {
          lat: {$set: action.lat},
          lng: {$set: action.lng},
        },
      });

    default:
      return state;
  }
}
