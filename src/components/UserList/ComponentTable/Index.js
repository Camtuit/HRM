import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment';
import { Button, Tooltip, Modal, Switch } from 'antd';
import UserSearch from '../UserSearch';
import constant from '../../../constants/htmlConstants';
import ComponentTheadTable from './ComponentTheahTable';
import { displayUsers, changeUserStatusById } from '../../../apis/userApi';
import Toast from '../../commons/ToastCommon';
import ConfirmPopupCommon from '../../commons/ConfirmPopupCommon';
import ShowData from './ShowData';
import Pagination from './Pagination';

function Index({
  fullName,
  contractStatus,
  contractDateBegin,
  contractDateEnd,
  employeeStatus,
}) {
  const { t, i18n } = useTranslation();
  const [totalRecord, setTotalRecord] = useState(null);
  const [recordPerPage, setRecordPerPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [users, setUser] = useState([]);
  const [sort, setSort] = useState(null);
  const [direct, setDirect] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState({});

  const [page, setPage] = useState(1);
  console.log(page);
  const column = [
    {
      title: t('TABLE.COLUMN_TITLE.NO'),
      dataIndex: 'number',
    },

    {
      title: t('TABLE.COLUMN_TITLE.NAME'),
      dataIndex: 'full_name',
      sorter: true,
    },

    {
      title: t('LABEL.EMAIl'),
      dataIndex: 'email',
    },

    {
      title: t('LABEL.PHONE_NUMBER'),
      dataIndex: 'phone_number',
    },
    {
      title: t('LABEL.CONTRACT_DATE'),
      dataIndex: 'contract_date',

      sorter: true,
    },
    {
      title: t('TABLE.COLUMN_TITLE.EMPLOYEE_STATUS'),
      dataIndex: 'employee_status',
    },
    {
      title: t('TABLE.COLUMN_TITLE.STATUS'),
      dataIndex: 'contract_status',
    },

    {
      title: t('TABLE.COLUMN_TITLE.ACTION'),
      dataIndex: 'action',
      action: true,
    },
  ];

  useEffect(() => {
    console.log('pagessss', page);
    try {
      displayUsers(
        fullName,
        contractStatus,
        contractDateBegin
          ? moment(contractDateBegin).format(constant.FORMAT_DATE_PARAM)
          : '',
        contractDateEnd
          ? moment(contractDateEnd).format(constant.FORMAT_DATE_PARAM)
          : '',
        employeeStatus === undefined || null ? 1 : employeeStatus,
        page,
        sort,
        direct,
      ).then((res) => {
        console.log('fff', page);
        if (res.status === 200) {
          setUser(res.data.data);
          setTotalRecord(res.data.meta.pagination.total);
          setRecordPerPage(res.data.meta.pagination.per_page);
          setCurrentPage(res.data.meta.pagination.current_page);
          setLastPage(res.data.meta.pagination.last_page);
        }
        setIsLoading(false);
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
    rerender,
  ]);

  const usersData =
    users &&
    users.map((user, index) => {
      const usersFiltered = {
        key: user.id,
        full_name: user.full_name,
        email: user.email,
        phone_number: user.phone_number
          .replace(/\D+/g, '')
          .replace(/([0-9]{1,4})([0-9]{3})([0-9]{3}$)/gi, '$1 $2 $3'),
        contract_date: user.contract_date_begin
          ? `${moment(user.contract_date_begin).format(
              constant.FORMAT_DATE,
            )} - ${moment(user.contract_date_end).format(constant.FORMAT_DATE)}`
          : '',
        contract_status: user.contract_status,
        employee_status: user.active,
        number: index + (currentPage - 1) * recordPerPage + 1,
        action: { id: user.id, useName: user.full_name },
      };

      return usersFiltered;
    });

  return (
    <>
      <div className="search-box">
        <div className="row table-button" style={{ padding: '20px 0px' }}>
          <div
            className={`button-table-group col-10 ${
              usersData.length === 0 ? 'no-data' : ''
            }`}
          >
            <Link to="/user">
              <Button className="data-table-button" type="primary">
                {constant.BUTTON.ADD}
              </Button>
            </Link>

            <Button className="data-table-button" type="primary">
              {constant.BUTTON.EXPORT_FILE}
            </Button>

            <Button className="data-table-button" type="primary">
              {constant.BUTTON.EXPORT_WORKDAYS}
            </Button>
          </div>
          <div className="col-2">
            <Pagination
              onChagnePage={(numberPage) => setPage(numberPage)}
              userData={users}
              lastPage={lastPage}
              currentPage={currentPage}
              newsPerPage={recordPerPage}
            />
          </div>
        </div>
        <div>
          <table className="table table-light table-bordered table-hover">
            <ComponentTheadTable columns={column} />
            <ShowData
              usersDatas={usersData}
              columns={column}
              currentPage={currentPage}
              newsPerPage={recordPerPage}
            />
          </table>
        </div>
        <div style={{ paddingTop: ' 20px ' }}>
          <Pagination
            onChagnePage={(numberPage) => setPage(numberPage)}
            userData={users}
            lastPage={lastPage}
            currentPage={currentPage}
            newsPerPage={recordPerPage}
          />
        </div>
      </div>
    </>
  );
}
export default Index;
