import React, { useState } from 'react';
import { Table, Button, Tooltip } from 'antd';
import '../../css/RequestTable.css';
import { Link } from 'react-router-dom';

export default function RequestTable() {
  const [panigationtop, setPanigationtop] = useState('topRight');
  const [panigationbottom, setpanigationbottom] = useState('bottomRight');
  const columns = [
    {
      title: 'No.',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: "Email's Request",
      dataIndex: 'email',
      key: 'email',
      sorter: {
        compare: (a, b) => a.email.length - b.email.length,
        multiple: 1,
      },
    },
    {
      title: 'Project Name',
      dataIndex: 'projectName',
      key: 'projectName',
    },
    {
      title: 'Device Name',
      dataIndex: 'deviceName',
      key: 'deviceName',
      sorter: {
        compare: (a, b) => a.deviceName - b.deviceName,
        multiple: 2,
      },
    },
    {
      title: 'Number of Device',
      dataIndex: 'numberOfDevice',
      key: 'numberOfDevice',
    },
    {
      title: 'Equipment Required Reason',
      dataIndex: 'equipmentRequiredReason',
      key: 'equipmentRequiredReason',
    },
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      width: 100,
      render: () => (
        <div className="request-table-action">
          <Link to="/skillregist" style={{ paddingRight: '10px' }}>
            <Tooltip placement="top" title="Accept">
              <span>
                <i class="fas fa-check-square"></i>
              </span>
            </Tooltip>
          </Link>
          <Link to="/skillregist" style={{ paddingRight: '10px' }}>
            <Tooltip placement="top" title="View">
              <span>
                <i class="far fa-eye"></i>
              </span>
            </Tooltip>
          </Link>
          <Link to="/skillregist" style={{ paddingRight: '10px' }}>
            <Tooltip placement="top" title="Reject">
              <span>
                <i class="fas fa-window-close"></i>
              </span>
            </Tooltip>
          </Link>
        </div>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      no: '1',
      email: 'nalsolution@nal.com',
      projectName: 'HRM',
      deviceName: 'iPhone 12',
      numberOfDevice: '01',
      equipmentRequiredReason: 'for testing',
    },
    {
      key: '1',
      no: '2',
      email: 'nalsolution@nal.com',
      projectName: 'HRM',
      deviceName: 'iPhone 1',
      numberOfDevice: '01',
      equipmentRequiredReason: 'for testing',
    },
    {
      key: '1',
      no: '3',
      email: 'nalsolution@nal.com',
      projectName: 'HRM',
      deviceName: 'iPhone 12',
      numberOfDevice: '01',
      equipmentRequiredReason: 'for testing',
    },
    {
      key: '1',
      no: '4',
      email: 'nalsolution@nal.com',
      projectName: 'HRM',
      deviceName: 'iPhone 12',
      numberOfDevice: '01',
      equipmentRequiredReason: 'for testing',
    },
    {
      key: '1',
      no: '5',
      email: 'nalsolution@nal.com',
      projectName: 'HRM',
      deviceName: 'iPhone 12',
      numberOfDevice: '01',
      equipmentRequiredReason: 'for testing',
    },
    {
      key: '1',
      no: '6',
      email: 'nalsolution@nal.com',
      projectName: 'HRM',
      deviceName: 'iPhone 12',
      numberOfDevice: '01',
      equipmentRequiredReason: 'for testing',
    },
    {
      key: '1',
      no: '7',
      email: 'nalsolution@nal.com',
      projectName: 'HRM',
      deviceName: 'iPhone 12',
      numberOfDevice: '01',
      equipmentRequiredReason: 'for testing',
    },
    {
      key: '1',
      no: '8',
      email: 'nalsolution@nal.com',
      projectName: 'HRM',
      deviceName: 'iPhone 12',
      numberOfDevice: '01',
      equipmentRequiredReason: 'for testing',
    },
    {
      key: '1',
      no: '9',
      email: 'nalsolution@nal.com',
      projectName: 'HRM',
      deviceName: 'iPhone 12',
      numberOfDevice: '01',
      equipmentRequiredReason: 'for testing',
    },
    {
      key: '1',
      no: '10',
      email: 'nalsolution@nal.com',
      projectName: 'HRM',
      deviceName: 'iPhone 12',
      numberOfDevice: '01',
      equipmentRequiredReason: 'for testing',
    },
    {
      key: '1',
      no: '11',
      email: 'balsolution@nal.com',
      projectName: 'HRM',
      deviceName: 'iPhone 12',
      numberOfDevice: '01',
      equipmentRequiredReason: 'for testing',
    },
    {
      key: '1',
      no: '12',
      email: 'nalsolution@nal.com',
      projectName: 'HRM',
      deviceName: 'iPhone 12',
      numberOfDevice: '01',
      equipmentRequiredReason: 'for testing',
    },
  ];
  return (
    <div className="request-table">
      <Button className="request-table-add" type="primary">
        <Link to="/skillregist">Add new</Link>
      </Button>
      <Table
        className="table-data"
        columns={columns}
        dataSource={data}
        size="small"
        pagination={{ position: [panigationtop, panigationbottom] }}
      />
    </div>
  );
}
