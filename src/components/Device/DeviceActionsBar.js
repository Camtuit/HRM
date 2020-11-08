import React from 'react';
import { Space, Tooltip } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import RemovePopupCommon from '../commons/RemovePopup';
import constants from '../../constants/htmlConstants';
import { deviceSizeFixed } from '../../constants/deviceSize';

function DeviceActionsBar({ item, path }) {
  console.log(item, path);
  const screenWidth = useSelector((state) => state.screenWidth);
  const isLaptop = screenWidth >= deviceSizeFixed.laptop;
  return (
    <div className="button-action">
      {isLaptop ? (
        <Space size="middle">
          <Link to={`${path}/${item.id}`}>Edit</Link>
          <Link role="button">Delete</Link>
          {item.status ? (
            <Link to={`${path}/${item.id}/details`}>Details</Link>
          ) : undefined}
        </Space>
      ) : (
        <>
          <Tooltip
            placement={constants.TOOLTIP.PLACEMENT.TOP}
            title={constants.TOOLTIP.TITLE.ADD}
          >
            <i className="fas fa-plus-square" onClick={() => {}} />
          </Tooltip>
          <Tooltip
            placement={constants.TOOLTIP.PLACEMENT.TOP}
            title={constants.TOOLTIP.TITLE.EDIT}
          >
            <i className="fas fa-edit" onClick={() => {}} />
          </Tooltip>
          <RemovePopupCommon
            title="Delete request"
            content="Are you sure delete"
            onOk={() => {}}
          />
        </>
      )}
    </div>
  );
}

export default DeviceActionsBar;
