import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useCallback } from 'react';

import { createAction } from '../actions/commonAction';

function usePost(type = '') {
  const dispatch = useDispatch();
  const { apiCallStatus } = useSelector((state) => state.apiCallStatus);

  const boundAction = useCallback(
    (data) => {
      return dispatch(createAction(type, data));
    },
    [dispatch, type],
  );
  return [boundAction, apiCallStatus];
}

export default usePost;
