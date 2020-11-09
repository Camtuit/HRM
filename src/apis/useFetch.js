import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useCallback, useEffect } from 'react';

import { getAction } from '../actions/commonAction';
import { toLower } from '../helpers/apiHelper';

function useFetch(type = '') {
  const dispatch = useDispatch();
  const stringType = toLower(type);
  const { data, apiCallStatus } = useSelector((state) => {
    return {
      data: state[stringType], // Exclude: request-devices
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
