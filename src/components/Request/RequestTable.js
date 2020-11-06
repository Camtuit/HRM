import React, { useState } from 'react';
import { Table, Button, Tooltip, DeleteOutlined } from 'antd';
import '../../css/RequestTable.css';
import { Link } from 'react-router-dom';
import RemovePopupCommon from '../RemovePopupCommon';
import constant from '../../constants/constants';

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
          <Tooltip placement="top" title="Approve">
            <span>
              <i class="fas fa-check-square"></i>
            </span>
          </Tooltip>

          <Link to="/requestdevicedetail">
            <Tooltip placement="top" title="View">
              <span>
                <i class="far fa-eye"></i>
              </span>
            </Tooltip>
          </Link>

          <Tooltip placement="top" title="Reject">
            <span>
              <i class="fas fa-window-close"></i>
            </span>
          </Tooltip>

          <RemovePopupCommon
            title="Delete request"
            content="Are you sure delete"
            onOk={() => console.log('true')}
          />
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
      <div className="request-table-button">
        <h2>Request list</h2>
        <Button className="request-button-add" type="primary">
          <Link to="/">{constant.BUTTON.ADD}</Link>
        </Button>
        <Button className="request-button-add" type="primary">
          {constant.BUTTON.EXPORT_FILE}
        </Button>
      </div>
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
