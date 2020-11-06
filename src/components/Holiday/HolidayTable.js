import React from 'react';
import { Table, Button, Tooltip } from 'antd';
import '../../css/HolidayTable.css';
import RemovePopupCommon from '../RemovePopupCommon';
import HolidayRegistPopup from './HolidayRegistPopup';
import constant from '../../constants/constants';

function HolidayTable() {
  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
    },

    {
      title: 'Date',
      dataIndex: 'date',
    },

    {
      title: 'Note',
      dataIndex: 'note',
    },

    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => (
        <div className="holiday-table-action">
          <HolidayRegistPopup />
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
      date: '2/9/2020',
      note: 'lễ quốc khánh',
    },

    {
      key: '2',
      no: '2',
      date: '2/9/2020',
      note: 'lễ quốc khánh',
    },
  ];

  function onChange(pagination, filters, sorter, extra) {}

  return (
    <div className="holiday-table">
      <h2>Holiday list</h2>

      <Button className="user-table-button" type="primary">
        {constant.BUTTON.EXPORT_FILE}
      </Button>

      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}

export default HolidayTable;
