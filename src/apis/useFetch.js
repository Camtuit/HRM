import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import React, { useCallback, useEffect } from 'react';

import { get } from './apiMethods';

function userFetch(props) {
  const type = props.type.toLowerCase();
  const dispatch = useDispatch();
  const { data, apiCallStatus } = useSelector((state) => {
    return {
      data: state.type,
      apiCallStatus: state.apiCallStatus,
    };
  }, shallowEqual);

  const boundAction = useCallback(() => {
    return dispatch(get(type));
  }, [dispatch]);

  useEffect(() => {
    if (!data || data.length === 0) {
      boundAction();
    }
  }, [boundAction, data]);

  return {
    [type]: data,
    fetchData: boundAction,
    apiCallStatus,
  };
}

export default userFetch;
