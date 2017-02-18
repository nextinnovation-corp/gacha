import { googleMap } from '../../config';
import { initAutoComplete } from './header';

const prefix = 'map';
export const SET_CENTER = `${prefix}/SET_CENTER`;
export const SET_MAP = `${prefix}/SET_MAP';`

let map;

export function getMap() {
  return map;
}

export function initMap(tagId) {
  return dispatch => {
    const script = document.createElement('script');
    const callbackFunctionName = '__gacha_google_map_load_callback';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMap.API_KEY}&libraries=places&callback=${callbackFunctionName}`;
    script.async = true;
    script.defer = true;

    window[callbackFunctionName] = () => {
      map = new google.maps.Map(document.getElementById(tagId), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
      dispatch(setMap(map));
      dispatch(initAutoComplete());

      delete window[callbackFunctionName];
    };

    document.body.appendChild(script);
  }
}

function setMap(map) {
  return {
    type: SET_MAP,
    map
  }
}

export function setCenter(lat: number, lng: number) {
  map.setCenter({lat, lng});
  map.setZoom(18);

  return {
    type: SET_CENTER,
    lat,
    lng,
  }
}
