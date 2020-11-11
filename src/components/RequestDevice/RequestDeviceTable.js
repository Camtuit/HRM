import React, { useState } from 'react';
import { Table, Button, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import '../../css/RequestTable.css';
import RemovePopupCommon from '../commons/RemovePopup';
import { requestDevices } from '../../helpers/dumbData';
import { BUTTON } from '../../constants/textLabel';

export default function RequestDeviceTable({ match }) {
  const data = requestDevices.map((request, index) => {
    request.key = request.id;
    request.number = index + 1;
    request.action = { id: request.id };
    return request;
  });
  const columns = [
    {
      title: 'No',
      dataIndex: 'number',
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
      render: (value) => (
        <div className="request-table-action">
          <Tooltip placement="top" title="Approve">
            <span>
              <i class="fas fa-check-square"></i>
            </span>
          </Tooltip>

          <Link to="/request-device">
            <Tooltip placement="top" title="View">
              <Link to={`${match.url}/${value.id}`}>
                <span>
                  <i class="far fa-eye"></i>
                </span>
              </Link>
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
            onOk={() => {}}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="request-device-table">
      <Button className="request-device-table__add" type="primary">
        <Link to="/request-device">{BUTTON.ADD}</Link>
      </Button>
      <Button className="request-device-table__export" type="primary">
        {BUTTON.EXPORT}
      </Button>

      <Table
        className="request-table-list"
        columns={columns}
        dataSource={data}
        pagination={{
          position: ['topRight', 'bottomRight'],
        }}
      />
    </div>
  );
}
