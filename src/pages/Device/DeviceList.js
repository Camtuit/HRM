/* eslint-disable no-param-reassign */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, Space } from 'antd';

import { devices } from '../../helpers/dumbData';
import SearchBarDevice from './SearchBarDevice';

function DeviceList({ match }) {
  const data = devices.map((device, index) => {
    device.key = device.id;
    device.number = index + 1;
    device.action = { id: device.id, status: device.status };
    return device;
  });
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
      render: (value) => (
        <Space size="middle">
          <Link to={`${match.url}/${value.id}`}>Edit</Link>
          <Link role="button">Delete</Link>
          {value.status ? (
            <Link to={`${match.url}/${value.id}/details`}>Details</Link>
          ) : undefined}
        </Space>
      ),
    },
  ];
  return (
    <div className="wrapper-content">
      <div className="container container-device">
        <h2>Device List</h2>
        <SearchBarDevice />
        <div className="device-buttons">
          <Button className="button new-device" type="primary">
            Add new
          </Button>
        </div>
        <div className="table devices-table">
          <Table columns={columnsDevice} dataSource={data} />
        </div>
        <div className="device-buttons">
          <Button className="button export-device" type="primary">
            Export
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DeviceList;
