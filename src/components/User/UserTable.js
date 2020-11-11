import React from 'react';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import constant from '../../constants/htmlConstants';

import '../../css/UserTable.css';
import useFetchMany from '../../apis/useFetchMany';
import types from '../../constants/apiResourceTypes';

function UserTable({ query, onSearch = () => {}, match }) {
  const [users = [], loadAction, apiCallStatus] = useFetchMany(
    types.USERS,
    query,
  );
  const usersData = users.map((user, index) => {
    const usersFiltered = {
      key: user.id,
      full_name: user.full_name,
      email: user.email,
      phone_number: user.phone_number,
      contract_date_begin: user.contract_date_begin,
      contract_status: user.contract_status,
    };
    usersFiltered.number = index + 1;
    usersFiltered.action = { id: user.id, status: user.status };
    return usersFiltered;
  });

  const columns = [
    {
      title: 'No',
      dataIndex: 'number',
    },

    {
      title: 'Name',
      dataIndex: 'full_name',
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
      dataIndex: 'phone_number',
    },

    {
      title: 'Contract day',
      dataIndex: 'contract_date_begin',
      sorter: {
        compare: (a, b) => a.contractDay - b.contractDay,
        multiple: 1,
      },
    },

    {
      title: 'Contract status',
      dataIndex: 'contract_status',
      render: (value) =>
        value ? <span>Assigned</span> : <span>Available</span>,
    },

    {
      title: 'Action',
      fixed: 'right',
      dataIndex: 'action',
      width: 100,
      render: (value) => (
        <Link to={`${match.url !== '/' ? match.url : '/users'}/${value.id}`} />
      ),
    },
  ];

  function onChange(pagination, filters, sorter, extra) {}
  return (
    <div className="user-table">
      <Link to="/user">
        <Button className="user-table-button" type="primary">
          Add new
        </Button>
      </Link>

      <Button className="user-table-button" type="primary">
        Export file
      </Button>

      <Button className="user-table-button" type="primary">
        Export workdays
      </Button>

      <Table
        pagination={{
          position: ['topRight', 'bottomRight'],
        }}
        columns={columns}
        dataSource={usersData}
        onChange={onChange}
      />
    </div>
  );
}

export default UserTable;
