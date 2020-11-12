import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';

import { getAction } from '../actions/commonAction';
import { toLower } from '../helpers/apiHelper';

function useFetch(type = '') {
  const dispatch = useDispatch();
  const [data, setData] = useState(undefined);
  const { apiCallStatus } = useSelector((state) => state.apiCallStatus);

  const boundAction = useCallback(
    (id) => {
      return dispatch(getAction(type));
    },
    [dispatch, type],
  );
  console.log(data);
  return [data, boundAction, apiCallStatus];
}

export default useFetch;
