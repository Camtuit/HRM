import { SHOWED_MODAL } from '../constants/actionTypes';

// eslint-disable-next-line import/prefer-default-export
export function toggleModal() {
  // eslint-disable-next-line func-names
  return function (dispatch) {
    return dispatch({ type: SHOWED_MODAL });
  };
}
