import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useCallback } from 'react';
import axiosClientPHP from '../helpers/tempHelperApiPHP';

import { createAction } from '../actions/commonAction';

function usePost(type = '') {
  const dispatch = useDispatch();
  // const { apiCallStatus } = useSelector((state) => state.apiCallStatus);

  const boundAction = useCallback(
    (data) => {
      return dispatch(createAction(type, data));
    },
    [dispatch, type],
  );
  return [boundAction];
}
export async function uploadAvatar(avatar) {
  try {
    return await axiosClientPHP.Post('uploadAvatar', avatar);
  } catch (e) {
    return RESPONSE_CODE[404];
  }
}
export default usePost;
