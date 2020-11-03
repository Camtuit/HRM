import React from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import '../css/HolidayTable.css';

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
          <i className="fas fa-edit" />
          <i className="fas fa-trash-alt" />
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
        Export file
      </Button>

      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}

export default HolidayTable;
