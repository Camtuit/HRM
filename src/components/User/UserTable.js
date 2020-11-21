import React, { useEffect, useState } from 'react';
import { Table, Button, Tooltip, Select } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import constant from '../../constants/htmlConstants';
import '../../css/UserTable.css';
import { displayUsers } from '../../apis/userApi';
import Toast from '../commons/ToastCommon';
import initialState from '../../constants/initialState';

function UserTable({
  fullName,
  contractStatus,
  contractDateBegin,
  contractDateEnd,
  employeeStatus,
  page,
  setPage,
}) {
  const [totalRecord, setTotalRecord] = useState(null);
  const [recordPerPage, setRecordPerPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [users, setUser] = useState([]);
  const [sort, setSort] = useState(null);
  const [direct, setDirect] = useState(null);
  useEffect(() => {
    try {
      displayUsers(
        fullName,
        contractStatus,
        contractDateBegin ? moment(contractDateBegin).format('YYYY-MM-DD') : '',
        contractDateEnd ? moment(contractDateEnd).format('YYYY-MM-DD') : '',
        employeeStatus,
        page,
        sort,
        direct,
      ).then((res) => {
        setUser(res.data.data);
        setTotalRecord(res.data.meta.pagination.total);
        setRecordPerPage(res.data.meta.pagination.per_page);
        setCurrentPage(res.data.meta.pagination.current_page);
      });
    } catch (e) {
      Toast({ message: e });
    }
  }, [
    page,
    fullName,
    contractDateEnd,
    contractStatus,
    contractDateBegin,
    employeeStatus,
    sort,
    direct,
  ]);
  const usersData = users.map((user, index) => {
    const usersFiltered = {
      key: user.id,
      full_name: user.full_name,
      email: user.email,
      phone_number: user.phone_number,
      contract_date: [user.contract_date_begin, ' ~ ', user.contract_date_end],
      contract_status: user.contract_status,
      employee_status: user.active,
      number: index + (currentPage - 1) * recordPerPage + 1,
      action: { id: user.id, status: user.status },
    };
    return usersFiltered;
  });
  const columns = [
    {
      title: constant.TABLE.COLUMN_TITLE.NO,
      dataIndex: 'number',
    },

    {
      title: constant.TABLE.COLUMN_TITLE.NAME,
      dataIndex: 'full_name',
      sorter: {
        compare: (a, b) => a.name - b.name,
        multiple: 3,
      },
    },

    {
      title: constant.TABLE.COLUMN_TITLE.EMAIL,
      dataIndex: 'email',
    },

    {
      title: constant.TABLE.COLUMN_TITLE.PHONE_NUMBER,
      dataIndex: 'phone_number',
    },

    {
      title: constant.TABLE.COLUMN_TITLE.CONTRACT_DAY,
      dataIndex: 'contract_date',
      sorter: {
        compare: (a, b) => a.contractDay - b.contractDay,
        multiple: 1,
      },
    },

    {
      title: constant.TABLE.COLUMN_TITLE.EMPLOYEE_STATUS,
      dataIndex: 'employee_status',
      render: (value) => (
        <Select defaultValue={value} style={{ width: 100 }}>
          <Select.Option value={initialState.employee_status.active}>
            {constant.EMPLOYEE_STATUS.AVAILABLE}
          </Select.Option>
          <Select.Option value={initialState.employee_status.inActive}>
            {constant.EMPLOYEE_STATUS.IN_ACTIVE}
          </Select.Option>
        </Select>
      ),
    },

    {
      title: constant.TABLE.COLUMN_TITLE.CONTRACT_STATUS,
      dataIndex: 'contract_status',
      render: (value) => (value ? <span>Signed</span> : <span>Resigned</span>),
    },

    {
      title: constant.TABLE.COLUMN_TITLE.ACTION,
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
    await setPage(pagination.current);
    // console.log(sorter);
    await setSort('contract_date');
    await setDirect('asc');
  }

  return (
    <div className="user-table">
      <Link to="/user">
        <Button className="user-table-button" type="primary">
          {constant.BUTTON.ADD}
        </Button>
      </Link>

      <Button className="user-table-button" type="primary">
        {constant.BUTTON.EXPORT_FILE}
      </Button>

      <Button className="user-table-button" type="primary">
        {constant.BUTTON.EXPORT_WORKDAYS}
      </Button>

      <Table
        pagination={{
          total: totalRecord,
          current: page,
          pageSize: recordPerPage,
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
