import React from 'react';
import '../../css/UserTable.css';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';

function UserTable() {
  const columns = [
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
      title: 'Phone number',
      dataIndex: 'phone',
    },

    {
      title: 'Contract day',
      dataIndex: 'contractDay',
      sorter: {
        compare: (a, b) => a.contractDay - b.contractDay,
        multiple: 1,
      },
    },

    {
      title: 'Contract status',
      dataIndex: 'contractStatus',
    },

    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a href="/#">Edit</a>,
    },
  ];

  const data = [
    {
      key: '1',
      no: '1',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      phone: '0935799853',
      contractDay: '20/10/2020',
      contractStatus: 'signed',
    },
    {
      key: '2',
      no: '2',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      phone: '0935799853',
      contractDay: '20/10/2020',
      contractStatus: 'signed',
    },
    {
      key: '3',
      no: '3',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      phone: '0935799853',
      contractDay: '20/10/2020',
      contractStatus: 'signed',
    },
    {
      key: '4',
      no: '4',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      phone: '0935799853',
      contractDay: '20/10/2020',
      contractStatus: 'signed',
    },

    {
      key: '5',
      no: '5',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      phone: '0935799853',
      contractDay: '20/10/2020',
      contractStatus: 'signed',
    },

    {
      key: '6',
      no: '6',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      phone: '0935799853',
      contractDay: '20/10/2020',
      contractStatus: 'signed',
    },

    {
      key: '7',
      no: '7',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      phone: '0935799853',
      contractDay: '20/10/2020',
      contractStatus: 'signed',
    },

    {
      key: '8',
      no: '8',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      phone: '0935799853',
      contractDay: '20/10/2020',
      contractStatus: 'signed',
    },

    {
      key: '9',
      no: '9',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      phone: '0935799853',
      contractDay: '20/10/2020',
      contractStatus: 'signed',
    },

    {
      key: '10',
      no: '10',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      phone: '0935799853',
      contractDay: '20/10/2020',
      contractStatus: 'signed',
    },

    {
      key: '11',
      no: '11',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      phone: '0935799853',
      contractDay: '20/10/2020',
      contractStatus: 'signed',
    },

    {
      key: '12',
      no: '12',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      phone: '0935799853',
      contractDay: '20/10/2020',
      contractStatus: 'signed',
    },
  ];

  function onChange(pagination, filters, sorter, extra) {}
  return (
    <div className="user-table">
      <h2>User list</h2>

      <Link to="/userregist">
        <Button className="user-table-button" type="primary">
          Add new user
        </Button>
      </Link>

      <Button className="user-table-button" type="primary">
        Export file
      </Button>

      <Button className="user-table-button" type="primary">
        Export workdays
      </Button>

      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}

export default UserTable;
