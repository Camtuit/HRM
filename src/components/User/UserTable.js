import React, { useEffect, useState } from 'react';
import { Table, Button, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import constant from '../../constants/htmlConstants';
import '../../css/UserTable.css';
import { displayUsers } from '../../apis/userApi';

function UserTable(props) {
  const [totalRecord, setTotalRecord] = useState(null);
  const {
    fullName,
    contractStatus,
    contractDateBegin,
    contractDateEnd,
    page,
    setPage,
  } = props;
  const [users, setUser] = useState([]);
  useEffect(() => {
    try {
      displayUsers(
        fullName,
        contractStatus,
        contractDateBegin ? moment(contractDateBegin).format('YYYY-MM-DD') : '',
        contractDateEnd ? moment(contractDateEnd).format('YYYY-MM-DD') : '',
        page,
      ).then((res) => {
        setUser(res.data.data);
        setTotalRecord(res.data.meta);
      });
    } catch (e) {
      return e;
    }
  }, [page, fullName, contractDateEnd, contractStatus, contractDateBegin]);
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
      render: (value) => (value ? <span>Signed</span> : <span>Resigned</span>),
    },

    {
      title: 'Action',
      fixed: 'right',
      dataIndex: 'action',
      width: 100,
      render: (value) => (
        <Tooltip title={constant.TOOLTIP.TITLE.EDIT}>
          <span>
            <i className="fas fa-edit skill-popup-common-icon"></i>
          </span>
        </Tooltip>
      ),
    },
  ];

  async function onChangePage(pagination, filters, sorter, extra) {
    await setPage(pagination.current - 1);
  }
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
          total: totalRecord,
          current: page + 1,
          position: ['topRight', 'bottomRight'],
        }}
        columns={columns}
        dataSource={usersData}
        onChange={onChangePage}
      />
    </div>
  );
}

export default UserTable;
