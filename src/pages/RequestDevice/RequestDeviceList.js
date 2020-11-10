import React from 'react';
import RequestDeviceSearchBox from '../../components/RequestDevice/RequestDeviceSearchBox';
import RequestDeviceTable from '../../components/RequestDevice/RequestDeviceTable';
import WrapperContent from '../../components/commons/WrapperContentPage';

export default function RequestDeviceList(props) {
  return (
    <WrapperContent>
      <h2 className="list-title">Request List</h2>
      <RequestDeviceSearchBox />
      <RequestDeviceTable {...props} />
    </WrapperContent>
  );
}
