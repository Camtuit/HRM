import React from 'react';
import { Button, Table } from 'antd';
import '../../css/DayOffTable.css';
import { useHistory } from 'react-router';

function DayOffTable() {
  const history = useHistory();
  const handleChangeAddNewDayOff = () => {
    history.push('/dayoffregist');
  };
  const handleChangeEditDayOff = () => {
    history.push('/dayoffregist');
  };
  const handleChangeRemoveDayOff = () => {};
  const PAGINATION_POSITION = {
    top: 'topRight',
    bottom: 'bottomRight',
  };
  const COLUMNS = [
    {
      title: 'No',
      dataIndex: 'no',
    },

    {
      title: 'Name',
      dataIndex: 'name',
      sorter: {
        compare: (a, b) => a.name - b.name,
        multiple: 3,
      },
    },

    {
      title: 'Email',
      dataIndex: 'email',
    },

    {
      title: 'Date Off',
      dataIndex: 'dateOff',
      sorter: {
        compare: (a, b) => a.dayOff - b.dayOff,
        multiple: 1,
      },
    },

    {
      title: 'Type',
      dataIndex: 'type',
    },

    {
      title: "PO's Name",
      dataIndex: 'poName',
    },

    {
      title: 'Action',
      key: 'empty',
      fixed: 'right',
      width: 100,
      render: () => (
        <div className="skill-table-action">
          <i className="fas fa-edit" onClick={handleChangeEditDayOff} />
          <i className="fas fa-trash-alt" onClick={handleChangeRemoveDayOff} />
        </div>
      ),
    },
  ];

  const DATA = [
    {
      key: '1',
      no: '1',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },
    {
      key: '2',
      no: '2',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },
    {
      key: '3',
      no: '3',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },
    {
      key: '4',
      no: '4',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },

    {
      key: '5',
      no: '5',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },

    {
      key: '6',
      no: '6',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },

    {
      key: '7',
      no: '7',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },

    {
      key: '8',
      no: '8',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },

    {
      key: '9',
      no: '9',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },

    {
      key: '10',
      no: '10',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },

    {
      key: '11',
      no: '11',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },

    {
      key: '12',
      no: '12',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },
  ];
  const handleChangeTable = (pagination, filters, sorter, extra) => {};

  return (
    <div className="dayoff-table">
      <div className="dayoff-table-header">
        <h2>Dayoff List</h2>
        <div className="dayoff-table-button">
          <Button
            className="dayoff-table-button"
            type="primary"
            onClick={handleChangeAddNewDayOff}
          >
            Add new dayoff
          </Button>
          <Button className="dayoff-table-button" type="primary">
            Export
          </Button>
        </div>
      </div>

      <Table
        columns={COLUMNS}
        dataSource={DATA}
        onChange={handleChangeTable}
        pagination={{
          position: [PAGINATION_POSITION.top, PAGINATION_POSITION.bottom],
        }}
      />
    </div>
  );
}

export default DayOffTable;
