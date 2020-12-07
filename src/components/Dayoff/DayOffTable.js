/* eslint-disable radix */
import '../../css/DayOffTable.css';
import React, { useEffect, useState } from 'react';
import { Breadcrumb, Button, Table, Tooltip } from 'antd';
import { useHistory, useLocation } from 'react-router';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Alert from '../commons/AlertCommon';
import RemovePopupCommon from '../commons/RemovePopup';

import constant from '../../constants/htmlConstants';
import { RESPONSE_CODE } from '../../constants/errorText';

import { displayDayOff, deleteDayOffById } from '../../apis/dayOffApi';
import { callLoader, closeLoader } from '../../actions/utilsAction';
import Toast from '../commons/ToastCommon';

function DayOffTable() {
  const { search } = useLocation();

  const { t, i18n } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [recordPerPage, setRecordPerPage] = useState(null);
  const [totalPage, setTotalRecord] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState(null);
  const [direct, setDirect] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const handleChangeEditDayOff = () => {
    history.push('/dayoff/edit');
  };
  const handleDeleteDayOff = (id) => {
    try {
      dispatch(callLoader());
      deleteDayOffById(id).then((res) => {
        Toast({ message: t('MESSAGE.Deleted_Successfull') });
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
        dispatch(closeLoader());
      });
    } catch (error) {
      Toast({ message: error });
    }
  };
  const PAGINATION_POSITION = {
    top: 'topRight',
    bottom: 'bottomRight',
  };
  const COLUMNS = [
    {
      title: t('TABLE.COLUMN_TITLE.NO'),
      dataIndex: 'number',
      align: constant.TABLE.COLUMN_FIXED.CENTER,
      width: constant.TABLE.SKILL_COLUMN_WIDTH.NO,
    },

    {
      title: t('TABLE.COLUMN_TITLE.NAME'),
      dataIndex: 'full_name',
      sorter: {},
    },

    {
      title: t('TABLE.COLUMN_TITLE.EMAIL'),
      dataIndex: 'email',
    },

    {
      title: t('TABLE.COLUMN_TITLE.DATE_OFF'),
      dataIndex: 'vacation_day',
      sorter: {},
    },

    {
      title: t('TABLE.COLUMN_TITLE.TYPE'),
      dataIndex: 'session_day_off',
      render: (value) => {
        if (value === 1) return t('TABLE.COLUMN_TITLE.FULL_DAY');
        if (value === 2) return t('TABLE.COLUMN_TITLE.MORNING');
        return t('TABLE.COLUMN_TITLE.AFTERNOON');
      },
    },

    {
      title: t('TABLE.COLUMN_TITLE.PO_EMAIL'),
      dataIndex: 'po_email',
    },

    {
      title: t('TABLE.COLUMN_TITLE.ACTION'),
      key: 'empty',
      fixed: constant.TABLE.COLUMN_FIXED.RIGHT,
      width: 100,
      render: (value) => (
        <div className="dayoff-table-action">
          <Tooltip title={t('toolip.TITLE.EDIT')}>
            <i className="fas fa-edit" onClick={handleChangeEditDayOff} />
          </Tooltip>
          <RemovePopupCommon
            title={t('MESSAGE.delete_request')}
            content={`${t('MESSAGE.delete')} ${value.vacation_day}?`}
            onOk={(id) => {
              handleDeleteDayOff(value.id);
            }}
          />
        </div>
      ),
    },
  ];
  async function onChange(pagination, filters, sorter, extra) {
    history.push(`/days-off?page=${pagination.current}`);
    setSort('fullName');
    if (sorter.order === constant.SORT.ASCEND) {
      setDirect(constant.SORT.ASC);
    } else {
      setDirect(constant.SORT.DESC);
    }
  }

  useEffect(() => {
    const parsed = queryString.parse(search);
    try {
      displayDayOff({ ...parsed, sort, direct })
        .then((res) => {
          if (res !== RESPONSE_CODE[404]) {
            const newData = res.data.data.map((item, index) => ({
              ...item,
              number:
                index +
                res.data.meta.pagination.current_page *
                  res.data.meta.pagination.per_page -
                9,
            }));
            setData(newData);
            // console.log(res.data.meta.pagination.total);
            setTotalRecord(res.data.meta.pagination.total);
            // console.log(totalPage);

            setRecordPerPage(res.data.meta.pagination.per_page);
            setCurrentPage(res.data.meta.pagination.current_page);
          } else {
            Alert({
              type: constant.ALERT_COMMON.TYPE.ERROR,
              title: constant.ALERT_COMMON.TITLE.ERROR,
              content: RESPONSE_CODE[404],
            });
          }
          setIsLoading(false);
        })
        .catch((error) => {
          return error;
        });
    } catch (err) {
      setData([]);
    }
  }, [search, sort, direct]);

  return (
    <div className="data-table">
      <div className="button-table-group">
        <Button className="data-table-button" type="primary">
          {t('button.export_file')}
        </Button>
      </div>
      <Table
        rowKey={'id'}
        bordered
        columns={COLUMNS}
        dataSource={data}
        onChange={onChange}
        pagination={{
          position: [PAGINATION_POSITION.top, PAGINATION_POSITION.bottom],
          pageSize: recordPerPage,
          total: totalPage,
          current: parseInt(currentPage),
        }}
        loading={isLoading}
      />
    </div>
  );
}

export default DayOffTable;
