import React, { useEffect, useState } from 'react';
import { Table, Button, Tooltip, Select } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import constant from '../../constants/htmlConstants';
import '../../css/UserTable.css';
import { displayUsers } from '../../apis/userApi';
<<<<<<< HEAD
import { useTranslation } from 'react-i18next';

function UserTable(props) {
  const { t, i18n } = useTranslation();
=======
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
>>>>>>> 14bd3de88fef9646fb8f75d4c9670e789fb1605c
  const [totalRecord, setTotalRecord] = useState(null);
  const [recordPerPage, setRecordPerPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [users, setUser] = useState([]);
  useEffect(() => {
    try {
      displayUsers(
        fullName,
        contractStatus,
        contractDateBegin ? moment(contractDateBegin).format('YYYY-MM-DD') : '',
        contractDateEnd ? moment(contractDateEnd).format('YYYY-MM-DD') : '',
        employeeStatus,
        page,
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
  ]);
  const usersData = users.map((user, index) => {
    const usersFiltered = {
      key: user.id,
      full_name: user.full_name,
      email: user.email,
      phone_number: user.phone_number,
      contract_date: [user.contract_date_begin, ' - ', user.contract_date_end],
      contract_status: user.contract_status,
      employee_status: user.active,
      number: index + (currentPage - 1) * recordPerPage + 1,
      action: { id: user.id, status: user.status },
    };
    return usersFiltered;
  });
  const columns = [
    {
<<<<<<< HEAD
      title: t('TABLE.COLUMN_TITLE.NO'),
=======
      title: constant.TABLE.COLUMN_TITLE.NO,
>>>>>>> 14bd3de88fef9646fb8f75d4c9670e789fb1605c
      dataIndex: 'number',
    },

    {
<<<<<<< HEAD
      title: t('TABLE.COLUMN_TITLE.NAME'),
=======
      title: constant.TABLE.COLUMN_TITLE.NAME,
>>>>>>> 14bd3de88fef9646fb8f75d4c9670e789fb1605c
      dataIndex: 'full_name',
      sorter: {
        compare: (a, b) => a.name - b.name,
        multiple: 3,
      },
    },

    {
<<<<<<< HEAD
      title: t('TABLE.COLUMN_TITLE.EMAIL'),
=======
      title: constant.TABLE.COLUMN_TITLE.EMAIL,
>>>>>>> 14bd3de88fef9646fb8f75d4c9670e789fb1605c
      dataIndex: 'email',
    },

    {
<<<<<<< HEAD
      title: t('TABLE.COLUMN_TITLE.PHONE_NUMBER'),
=======
      title: constant.TABLE.COLUMN_TITLE.PHONE_NUMBER,
>>>>>>> 14bd3de88fef9646fb8f75d4c9670e789fb1605c
      dataIndex: 'phone_number',
    },

    {
<<<<<<< HEAD
      title: t('TABLE.COLUMN_TITLE.CONTRACT_DAY'),
      dataIndex: 'contract_date_begin',
=======
      title: constant.TABLE.COLUMN_TITLE.CONTRACT_DAY,
      dataIndex: 'contract_date',
>>>>>>> 14bd3de88fef9646fb8f75d4c9670e789fb1605c
      sorter: {
        compare: (a, b) => a.contractDay - b.contractDay,
        multiple: 1,
      },
    },

    {
<<<<<<< HEAD
      title: t('TABLE.COLUMN_TITLE.STATUS'),
=======
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
>>>>>>> 14bd3de88fef9646fb8f75d4c9670e789fb1605c
      dataIndex: 'contract_status',
      render: (value) => (value ? <span>Signed</span> : <span>Resigned</span>),
    },

    {
<<<<<<< HEAD
      title: t('TABLE.COLUMN_TITLE.ACTION'),
=======
      title: constant.TABLE.COLUMN_TITLE.ACTION,
>>>>>>> 14bd3de88fef9646fb8f75d4c9670e789fb1605c
      fixed: 'right',
      dataIndex: 'action',
      width: 100,
      render: (value) => (
        <Tooltip title={t('toolip.TITLE.EDIT')}>
          <span>
            <i className="fas fa-edit skill-popup-common-icon"></i>
          </span>
        </Tooltip>
      ),
    },
  ];

  const onChangePage = (pagination, filters, sorter, extra) => {
    setPage(pagination.current);
  };
  return (
    <div className="user-table">
      <Link to="/user">
        <Button className="user-table-button" type="primary">
<<<<<<< HEAD
          {t('button.add')}
=======
          {constant.BUTTON.ADD}
>>>>>>> 14bd3de88fef9646fb8f75d4c9670e789fb1605c
        </Button>
      </Link>

      <Button className="user-table-button" type="primary">
<<<<<<< HEAD
        {t('button.export_file')}
      </Button>

      <Button className="user-table-button" type="primary">
        {t('button.export_workdays')}
=======
        {constant.BUTTON.EXPORT_FILE}
      </Button>

      <Button className="user-table-button" type="primary">
        {constant.BUTTON.EXPORT_WORKDAYS}
>>>>>>> 14bd3de88fef9646fb8f75d4c9670e789fb1605c
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
