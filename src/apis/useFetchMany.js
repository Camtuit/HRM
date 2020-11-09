import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useCallback, useEffect } from 'react';

import { getManyAction } from '../actions/commonAction';
import { toLower } from '../helpers/apiHelper';
import types from '../constants/apiResourceTypes';

function useFetchMany(type = '', query) {
  const dispatch = useDispatch();
  const stringType = toLower(type);
  const { data, apiCallStatus } = useSelector((state) => {
    return {
      data: state[stringType], // Exclude: request-devices
      apiCallStatus: state.apiCallStatus,
    };
  }, shallowEqual);

  const boundAction = useCallback(() => {
    return dispatch(getManyAction(type, query));
  }, [dispatch, type, query]);

  useEffect(() => {
    if (!data || data.length === 0) {
      boundAction();
    }
  }, [boundAction, data]);

  return [data, boundAction, apiCallStatus];
}

export default useFetchMany;
