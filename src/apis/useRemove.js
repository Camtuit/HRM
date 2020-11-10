import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

import { removeAction } from '../actions/commonAction';

function useRemove(type = '') {
  const dispatch = useDispatch();
  const { apiCallStatus } = useSelector((state) => state.apiCallStatus);

  const boundAction = useCallback(
    (id) => {
      return dispatch(removeAction(type, id));
    },
    [dispatch, type],
  );

  return [boundAction, apiCallStatus];
}

export default useRemove;
