/* eslint-disable radix */
import React, { useEffect, useState } from 'react';
import { Button, Table, Tooltip } from 'antd';
import '../../css/DayOffTable.css';
import { useHistory, useLocation } from 'react-router';
import axios from 'axios';
import queryString from 'query-string';

import Alert from '../commons/AlertCommon';
import RemovePopupCommon from '../commons/RemovePopup';

import constant from '../../constants/htmlConstants';
import { RESPONSE_CODE } from '../../constants/errorText';

function DayOffTable() {
  const { search } = useLocation();
  // console.log('search', useLocation());
  const history = useHistory();
  const [data, setData] = useState([]);
  const [recordPerPage, setRecordPerPage] = useState(null);
  const [totalPage, setTotalRecord] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangeAddNewDayOff = () => {
    history.push('/dayoff');
  };
  const handleChangeEditDayOff = () => {
    history.push('/dayoff');
  };
  const handleChangeRemoveDayOff = () => {};
  const PAGINATION_POSITION = {
    top: 'topRight',
    bottom: 'bottomRight',
  };
  async function onChange(pagination, filters, sorter, extra) {
    // await setCurrentPage(pagination.current - 1);
    history.push(`/days-off?page=${pagination.current}`);
  }
  const COLUMNS = [
    {
      title: constant.TABLE.COLUMN_TITLE.NO,
      dataIndex: 'number',
    },

    {
      title: constant.TABLE.COLUMN_TITLE.NAME,
      dataIndex: 'full_name',
    },

    {
      title: constant.TABLE.COLUMN_TITLE.EMAIL,
      dataIndex: 'email',
    },

    {
      title: constant.TABLE.COLUMN_TITLE.DATE_OFF,
      dataIndex: 'vacation_day',
      sorter: {
        compare: (a, b) => a.dayOff - b.dayOff,
        multiple: 1,
      },
    },

    {
      title: constant.TABLE.COLUMN_TITLE.TYPE,
      dataIndex: 'vacation_type_name',
    },

    {
      title: constant.TABLE.COLUMN_TITLE.PO_EMAIL,
      dataIndex: 'po_email',
    },

    {
      title: constant.TABLE.COLUMN_TITLE.ACTION,
      key: 'empty',
      fixed: constant.TABLE.COLUMN_FIXED.RIGHT,
      width: 100,
      render: () => (
        <div className="dayoff-table-action">
          <Tooltip
            placement={constant.TOOLTIP.PLACEMENT.TOP}
            title={constant.TOOLTIP.TITLE.EDIT}
          >
            <i className="fas fa-edit" onClick={handleChangeEditDayOff} />
          </Tooltip>
          <RemovePopupCommon
            title="Delete request"
            content="Are you sure delete"
            onOk={() => console.log('true')}
          />
        </div>
      ),
    },
  ];
  useEffect(() => {
    const parsed = queryString.parse(search);
    console.log('parsed', parsed.page);
    try {
      axios
        .get('http://35.198.210.77:8080/api/days-off', {
          params: {
            page: parsed.page,
          },
        })
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
            setTotalRecord(res.data.meta.pagination.total);
            setRecordPerPage(res.data.meta.pagination.per_page);
            setCurrentPage(res.data.meta.pagination.current_page);
          } else {
            Alert({
              type: constant.ALERT_COMMON.TYPE.ERROR,
              title: constant.ALERT_COMMON.TITLE.ERROR,
              content: RESPONSE_CODE[404],
            });
          }
        })
        .catch((error) => {
          return error;
        });
    } catch (err) {
      setData([]);
    }
  }, [search]);

  return (
    <div className="dayoff-table">
      <Button className="dayoff-table-button" type="primary">
        {constant.BUTTON.EXPORT}
      </Button>

      <Table
        rowKey={'id'}
        classNamme="dayoff-table-layout"
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
      />
    </div>
  );
}

export default DayOffTable;
