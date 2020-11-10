import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useCallback, useEffect } from 'react';

import { getManyAction } from '../actions/commonAction';
import { toLower } from '../helpers/apiHelper';

function useFetchMany(type = '', defaultQuery = '') {
  const dispatch = useDispatch();
  const stringType = toLower(type);
  const { data, apiCallStatus } = useSelector((state) => {
    return {
      data: state[stringType], // Exclude: request-devices
      apiCallStatus: state.apiCallStatus,
    };
  }, shallowEqual);

  const boundAction = useCallback(
    (query) => {
      return dispatch(getManyAction(type, query));
    },
    [dispatch, type],
  );

  useEffect(() => {
    boundAction(defaultQuery);
  }, []);

  return [data, boundAction, apiCallStatus];
}

export default useFetchMany;
