const prefix = 'map';
export const SET_CENTER = `${prefix}/SET_CENTER`;

export function setCenter(latLng) {
  return {
    type: SET_CENTER,
    latLng
  };
}
