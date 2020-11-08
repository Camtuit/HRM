/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, Space } from 'antd';

import { devices } from '../../helpers/dumbData';
import SearchBarDevice from './SearchBarDevice';
import WrapperContent from '../../components/commons/WrapperContentPage';
import AddDevicePopup from '../../components/AddDevicePopup';
import DeviceActionsBar from '../../components/Device/DeviceActionsBar';
import { BUTTON } from '../../constants/textLabel';

function DeviceList({ match }) {
  const [toggledAddPopup, setToggleAddPopup] = useState(false);
  const data = devices.map((device, index) => {
    device.key = device.id;
    device.number = index + 1;
    device.action = { id: device.id, status: device.status };
    return device;
  });

  const handleOnClickAdd = () => {
    setToggleAddPopup(!toggledAddPopup);
  };

  const columnsDevice = [
    {
      title: 'No.',
      dataIndex: 'number',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Serial',
      dataIndex: 'serial',
    },
    {
      title: 'Input Date',
      dataIndex: 'input_date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (value) =>
        value ? <span>Assigned</span> : <span>Available</span>,
    },
    {
      title: 'Holder',
      dataIndex: 'holder',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (value) => <DeviceActionsBar item={value} path={match.url} />,
    },
  ];
  return (
    <>
      <WrapperContent>
        <div className="container container-device">
          <h2 className="list-title">Device List</h2>
          <SearchBarDevice />
          <div className="device-buttons">
            <Button
              className="button new-device"
              type="primary"
              onClick={handleOnClickAdd}
            >
              {BUTTON.ADD}
            </Button>
          </div>
          <div className="table device-table">
            <Table columns={columnsDevice} dataSource={data} />
          </div>
          <div className="device-buttons">
            <Button className="button export-device" type="primary">
              Export
            </Button>
          </div>
        </div>
      </WrapperContent>
      <AddDevicePopup
        onClickAddNew={handleOnClickAdd}
        toggled={toggledAddPopup}
      />
    </>
  );
}

export default DeviceList;
