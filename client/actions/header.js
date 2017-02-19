import { setCenter } from './map';
import { search as _search } from '../services/autoCompleteService';

export function search(searchKeyword) {
  return async dispatch => {
    const result = await _search(searchKeyword);
    dispatch(setCenter(result.geometry.location));
  };
}
