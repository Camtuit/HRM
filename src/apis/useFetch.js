import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useCallback, useEffect } from 'react';

import { getAction } from '../actions/commonAction';
import { toLower } from '../helpers/apiHelper';

function useFetch({ type, querry }) {
  const dispatch = useDispatch();
  const typeState = toLower(type);
  const { data, apiCallStatus } = useSelector((state) => {
    return {
      data: state.typeState, // Exclude: request-devices
      apiCallStatus: state.apiCallStatus,
    };
  }, shallowEqual);

  const boundAction = useCallback(() => {
    return dispatch(getAction(type));
  }, [dispatch, type]);

  useEffect(() => {
    if (!data || data.length === 0) {
      boundAction();
    }
  }, [boundAction, data]);

  return [data, boundAction, apiCallStatus];
}

export default useFetch;
