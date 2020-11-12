import React, { useEffect, useState } from 'react';
import { Table, Button, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import constant from '../../constants/htmlConstants';
import '../../css/UserTable.css';
import useFetchMany from '../../apis/useFetchMany';
import types from '../../constants/apiResourceTypes';

function UserTable({ query, onSearch = () => {}, match }) {
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ3OTRlZWFiMjc3NzdkNTU4YWI2ZGJlZmQyMzJjMDg4YmI5YjU3YzgwMWMzNzgzZjM4MmQ1NGEwZGQ0NDQ5OWVhZjA5YTgwOTQ1YWRkOGY3In0.eyJhdWQiOiIxIiwianRpIjoiZDc5NGVlYWIyNzc3N2Q1NThhYjZkYmVmZDIzMmMwODhiYjliNTdjODAxYzM3ODNmMzgyZDU0YTBkZDQ0NDk5ZWFmMDlhODA5NDVhZGQ4ZjciLCJpYXQiOjE2MDUxNjcxNjAsIm5iZiI6MTYwNTE2NzE2MCwiZXhwIjoxNjM2NzAzMTYwLCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.AE1eoB4maq39lqsJmiqGoV0Nf_ywSloPqT0LcPD62k2KjGygwsWukC0hVw1DaGq-WuEt8Bf3uiDCD58qlysmd25Ypjhwa83TfXDbLt_vtHTITQ2_BxbOPl4zciRoBbFjiOh31IDVmGl5oKgyCkzGLPVb1OtCLY6T85_3p915mC3BVUqkQfP-NeMgEfIBfJ9kgqLqpmJtvKpmlI6bKs30PefIachfqyE92lIVkR1-o702GsiHKv84sTjsB40EdmtO6tkZIdcXhogO2HkWxyWQPdIwcyyscrlF_P_tmz72LSkfRNZmQy2udgMXeEjWTq3JfIcQyAWD5vnQI8xftqataywVmwo-oTUJKwgvpwzsaWFczb32amI7Ani6-wVQA9NXKFdSNBfSrX4jxqSjif6H3-K_ZnWOzI02HwYtA_-ykzZsYxignorvw2wnkCZLNA1isNtW8Wpx16mxTNecXZHxszBW5mku1sKl3EueWzs3LzOt7ZRJdBRCmZtEmlAtbma8wM-6csAldjmxd-v0LuE-RbHHRl36LSMKRabpwRlAN8zxoeJ698b2-byVBFHTk5NhhQOksMy8rR6tpMayy-8ehufv3Cp0L48xLQJx3sb941kqSChMVozc1Ds0SDu3Qcj5iwkh0zrQ6nkTD1uCXCsfizCjQYxhLxAxajsyUhX5ukc';
  const [users, setUser] = useState([]);
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://api-php.dev-hrm.nals.vn/api/users',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setUser(response.data.data);
        // const getData = response.data.data.map((elm, index) => {
        //   return {
        //     no: index + 1,
        //     id: elm.id,
        //     name: elm.name,
        //     updated: elm.updated_at,
        //   };
        // });
        // setData(getData);
        // setTotalRecord(response.data.meta.pagination.total);
      })
      .catch((err) => {
        return err;
      });
  }, []);
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
        <Tooltip title={constant.TOOLTIP.TITLE.EDIT}>
          <span>
            <i className="fas fa-edit skill-popup-common-icon"></i>
          </span>
        </Tooltip>
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
