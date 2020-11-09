import { SHOWED_MODAL } from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function modalReducer(
  state = initialState.toggledModal,
  action,
) {
  if (action.type === SHOWED_MODAL) return !state;
  return state;
}
