const prefix = 'map';
export const SET_CENTER = `${prefix}/SET_CENTER`;

export function setCenter(lat: number, lng: number) {
  return {
    type: SET_CENTER,
    lat,
    lng,
  }
}
