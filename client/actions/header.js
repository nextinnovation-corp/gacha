import { getMap, setCenter } from './map';

export const SEARCH_MAP_TAG_ID = 'searchMap';

type autoCompletedPlace = {
  geometry: Object
}

type place = {
  name: string
}

const getPlaceService = (() => {
  let placeService;

  return () => {
    if (placeService) {
      return placeService;
    }

    placeService = new google.maps.places.PlacesService(getMap());
    return placeService;
  }
})();

export function initAutoComplete() {
  // https://developers.google.com/maps/documentation/javascript/reference#AutocompletionRequest
  const autoCompleteService = new google.maps.places.AutocompleteService();

  return (dispatch, getState) => {
    const input = document.getElementById(SEARCH_MAP_TAG_ID);
    const autoComplete = new google.maps.places.Autocomplete(input);

    autoComplete.addListener('place_changed', () => {
      const place = autoComplete.getPlace();
      if (place.geometry) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        dispatch(setCenter(lat, lng));
      }

      autoCompleteService.getPlacePredictions({
        location: new google.maps.LatLng(
          getState().map.center.lat,
          getState().map.center.lng
        ),
        radius: 500000, // 500 km
        input: place.name,
        types: ['geocode']
      }, function (predictions, status) {
        // https://developers.google.com/maps/documentation/javascript/reference#PlacesServiceStatus
        if (status !== 'OK') {
          alert('getPlacePredictions Error: ' + status);
          return ;
        }

        const prediction = predictions[0];
        getPlaceService().getDetails({placeId: prediction.place_id}, (result, status) => {
          // https://developers.google.com/maps/documentation/javascript/reference#PlaceResult
          if (status !== 'OK') {
            alert('Error: ' + status);
            return ;
          }

          dispatch(setCenter(
            result.geometry.location.lat(),
            result.geometry.location.lng()
          ));
        });
      });
    });
  }
}
