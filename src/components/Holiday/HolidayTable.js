import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Tooltip } from 'antd';
import axios from 'axios';
import RemovePopupCommon from '../commons/RemovePopup';

import HolidayRegistPopup from './HolidayRegistPopup';
import constant from '../../constants/htmlConstants';

import '../../css/HolidayTable.css';

function HolidayTable({ currentYear, currentPage, setCurrentPage }) {
  const [data, setData] = useState(null);
  const [totalRecord, setTotalRecord] = useState(null);
  const isModalOpen = useSelector((state) => state.modalReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    axios({
      method: 'get',
      url: ' http://api-java.dev-hrm.nals.vn/api/holidays',
      params: {
        page: currentPage,
        year: currentYear,
      },
    })
      .then(function (res) {
        const currentData = res.data.data.map(function (element, index) {
          return {
            key: element.id,
            no: index + 1,
            date: element.date,
            note: element.notes,
          };
        });
        setData(currentData);
        setTotalRecord(res.data.meta.pagination.total);
      })
      .catch(function (error) {
        setData(null);
      });
  }, [data, currentYear]);

  async function onChange(pagination) {
    await setCurrentPage(pagination.current - 1);
    console.log(pagination);
  }
  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
    },

    {
      title: 'Date',
      dataIndex: 'date',
    },

    {
      title: 'Note',
      dataIndex: 'note',
    },

    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => (
        <div className="holiday-table-action">
          <Tooltip title={constant.TOOLTIP.TITLE.EDIT}>
            <span>
              <i class="fas fa-edit holiday-popup-common-icon"></i>
            </span>
          </Tooltip>

          <RemovePopupCommon
            title="Delete request"
            content="Are you sure delete"
            onOk={() => {}}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="holiday-table">
      <h2 className="list-title">Holiday list</h2>

      <Button className="user-table-button" type="primary">
        {constant.BUTTON.EXPORT_FILE}
      </Button>

      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        pagination={{
          total: totalRecord,
          current: currentPage + 1,
        }}
      />
    </div>
  );
}

export default HolidayTable;
