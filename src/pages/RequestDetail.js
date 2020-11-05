import React from 'react';
import { useSelector } from 'react-redux';
import RequestDetailForm from '../components/Request/RequestDetailForm';

import constant from '../constants/constants';
import '../css/RequestDetail.css';

function RequestDetail() {
  const isSideBarOpen = useSelector(
    (state) => state.sideBarReducer.isSideBarOpen,
  );
  return (
    <>
      <div
        style={{
          marginLeft: isSideBarOpen
            ? constant.CHANGE_LAYOUT.MARGIN_LEFT_230
            : constant.CHANGE_LAYOUT.MARGIN_LEFT_56,
        }}
        className="request-detail-content"
      >
        <RequestDetailForm />
      </div>
    </>
  );
}

export default RequestDetail;
