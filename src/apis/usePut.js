import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

import { updateAction } from '../actions/commonAction';

function usePut(type = '') {
  const dispatch = useDispatch();
  const { apiCallStatus } = useSelector((state) => state.apiCallStatus);

  const boundAction = useCallback(
    (data) => {
      return dispatch(updateAction(type, data));
    },
    [dispatch, type],
  );

  return [boundAction, apiCallStatus];
}

export default usePut;
