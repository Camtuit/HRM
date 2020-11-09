import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useCallback, useEffect } from 'react';

import { getManyAction } from '../actions/commonAction';
import { toLower } from '../helpers/apiHelper';

function useFetchMany({ type, querry }) {
  const dispatch = useDispatch();
  const typeState = toLower(type);
  const { data, apiCallStatus } = useSelector((state) => {
    return {
      data: state[typeState], // Exclude: request-devices
      apiCallStatus: state.apiCallStatus,
    };
  }, shallowEqual);

  const boundAction = useCallback(() => {
    return dispatch(getManyAction(type, querry));
  }, [dispatch, type, querry]);

  useEffect(() => {
    if (!data || data.length === 0) {
      boundAction();
    }
  }, [boundAction, data]);

  return [data, boundAction, apiCallStatus];
}

export default useFetchMany;
