export const SEARCH_MAP_TAG_ID = 'searchMap';

export function initAutoComplete() {
  return dispatch => {
    const input = document.getElementById(SEARCH_MAP_TAG_ID);
    const autoComplete = new google.maps.places.Autocomplete(input);
    autoComplete.addListener('place_changed', () => {
      // const place = autoComplete.getPlace();
      // const lat = place.geometry.location.lat();
      // const lng = place.geometry.location.lng();
      // this.props.setCenter(lat, lng);
    });
  }
}
