const prefix = 'user/';
export const GET_CURRENT_LOCATION = `${prefix}GET_CURRENT_LOCATION`;

export function getCurrentLocation() {
  return dispatch => {
    const geolocation = window.navigator.geolocation;
    if (geolocation) {
      geolocation.getCurrentPosition(position => {
        dispatch({
          type: GET_CURRENT_LOCATION,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      // research what browser support geolocation
      throw new Error();
    }
  };
}
