import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Tooltip } from 'antd';
import RemovePopupCommon from '../RemovePopupCommon';
import HolidayRegistPopup from './HolidayRegistPopup';
import constant from '../../constants/constants';

import '../../css/HolidayTable.css';
import { toggleModal } from '../../actions/showModal';

function HolidayTable() {
  const isModalOpen = useSelector((state) => state.modalReducer);
  // const showModal = () => {
  //   setVisible(true);
  // };
  const dispatch = useDispatch();
  console.log(isModalOpen);
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
              <i
                onClick={() => {
                  dispatch(toggleModal);
                }}
                class="fas fa-edit holiday-popup-common-icon"
              ></i>
            </span>
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

  const data = [
    {
      key: '1',
      no: '1',
      date: '2/9/2020',
      note: 'lễ quốc khánh',
    },

    {
      key: '2',
      no: '2',
      date: '2/9/2020',
      note: 'lễ quốc khánh',
    },
  ];

  function onChange(pagination, filters, sorter, extra) {}

  return (
    <div className="holiday-table">
      <h2>Holiday list</h2>
      <div className="hodiday-table-button">
        <Button type="primary">{constant.BUTTON.ADD}</Button>
        <Button type="primary">{constant.BUTTON.EXPORT_FILE}</Button>
      </div>

      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}

export default HolidayTable;
