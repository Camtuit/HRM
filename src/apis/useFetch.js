import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useCallback, useEffect } from 'react';

import { loadAction } from '../actions/commonAction';

function useFetch(props) {
  const type = props.type.toLowerCase();
  const dispatch = useDispatch();
  const { data, apiCallStatus } = useSelector((state) => {
    return {
      data: state.type,
      apiCallStatus: state.apiCallStatus,
    };
  }, shallowEqual);

  const boundAction = useCallback(() => {
    return dispatch(loadAction(type));
  }, [dispatch, type]);

  useEffect(() => {
    if (!data || data.length === 0) {
      boundAction();
    }
  }, [boundAction, data]);

  return [type, boundAction, apiCallStatus];
}

export default useFetch;
