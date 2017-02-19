import { defaultLatLng, defaultZoom } from '../reducers/map';

let map;

export function initMapService(elementId) {
  return map = new google.maps.Map(document.getElementById(elementId), {
    center: defaultLatLng,
    zoom: defaultZoom
  });
}

export function setCenter(latLng) {
  map.setCenter(latLng);
}

export function setZoom(zoom) {
  map.setZoom(zoom);
}
