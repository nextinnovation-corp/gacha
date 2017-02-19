let map;  https://developers.google.com/maps/documentation/javascript/reference#Map
let autoCompleteService;
let placeService;

export function initAutoCompleteService(mapInstance) {
  map = mapInstance;
  autoCompleteService = new google.maps.places.AutocompleteService();
  placeService = new google.maps.places.PlacesService(mapInstance);
}

export function search(keyword) {
  return new Promise((res, rej) => {
    // https://developers.google.com/maps/documentation/javascript/reference#AutocompletionRequest
    const autoCompletionRequest = {
      bounds: map.getBounds(),
      input: keyword,
      geocode: ['geocode']
    };
    autoCompleteService.getPlacePredictions(autoCompletionRequest, (predictions, status) => {
      if (status !== 'OK') {
        console.error(status);
        rej();
        return ;
      }

      const firstPrediction = predictions[0];
      placeService.getDetails({
        placeId: firstPrediction.place_id
      }, (result, status) => {
        if (status !== 'OK') {
          console.error(status);
          rej();
          return ;
        }

        res(result);
      });
    })
  });
}
