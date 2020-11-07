import React from 'react';
import { useSelector } from 'react-redux';
import RequestDeviceSearchBox from '../../components/RequestDevice/RequestDeviceSearchBox';
import RequestDeviceTable from '../../components/RequestDevice/RequestDeviceTable';

export default function RequestDeviceList(props) {
  const isSideBarOpen = useSelector(
    (state) => state.sideBarReducer.isSideBarOpen,
  );
  return (
    <div className="wrapper-content">
      <RequestDeviceSearchBox />
      <RequestDeviceTable {...props} />
    </div>
  );
}