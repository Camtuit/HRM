/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Tooltip } from 'antd';
import axios from 'axios';

import RemovePopupCommon from '../commons/RemovePopup';
import HolidayRegistPopup from './HolidayRegistPopup';
import constant from '../../constants/htmlConstants';
import useFetchMany from '../../apis/useFetchMany';
import { get } from '../../apis/apiMethods';
import useRemove from '../../apis/useRemove';
import types from '../../constants/apiResourceTypes';
import '../../css/HolidayTable.css';
import { meta } from '../../helpers/dumbData';

function HolidayTable({ currentYear, currentPage, setCurrentPage }) {
  const query = { page: currentPage, year: currentYear };
  const [holidays = [], fetchHolidays] = useFetchMany(types.HOLIDAYS, query);
  const [deleteHoliday] = useRemove(types.HOLIDAYS);
  const [toggledPopup, setToggledPopup] = useState(false);
  const [totalRecord, setTotalRecord] = useState(meta.pagination.total);
  const [valueHoliday, setValueHoliday] = useState();
  const dataFiltered = holidays.map(function (element, index) {
    return {
      key: element.id,
      no: index + 1,
      date: element.date,
      note: element.notes,
    };
  });
  const handleTogglePopupAdd = () => {
    setTotalRecord(meta.pagination.total);
    setToggledPopup(!toggledPopup);
  };
  const handleTogglePopupEdit = async (id) => {
    const res = await get('holidays', id);
    try {
      const holiday = res.data;
      setValueHoliday(holiday);
      handleTogglePopupAdd();
    } catch (error) {
      return error;
    }
  };

  async function onChange(pagination) {
    await setCurrentPage(pagination.current - 1);
  }

  const handleDeleteHoliday = (id) => {
    deleteHoliday(id);
  };

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
      render: (value) => (
        <div className="holiday-table-action">
          <Tooltip title={constant.TOOLTIP.TITLE.EDIT}>
            <span>
              <i
                onClick={(id) => handleTogglePopupEdit(value.key)}
                className="fas fa-edit holiday-popup-common-icon"
              ></i>
            </span>
          </Tooltip>
          <RemovePopupCommon
            title="Delete request"
            content="Are you sure delete"
            onOk={(id) => {
              handleDeleteHoliday(value.key);
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="holiday-table">
      <h2 className="list-title">Holiday list</h2>
      <Button
        className="user-table-button"
        type="primary"
        onClick={handleTogglePopupAdd}
      >
        {constant.BUTTON.ADD}
      </Button>
      <Button className="user-table-button" type="primary">
        {constant.BUTTON.EXPORT_FILE}
      </Button>

      <Table
        columns={columns}
        dataSource={dataFiltered}
        onChange={onChange}
        pagination={{
          total: totalRecord,
          current: currentPage + 1,
        }}
      />
      <HolidayRegistPopup
        active={toggledPopup}
        value={valueHoliday}
        handleTogglePopupAdd={handleTogglePopupAdd}
      />
    </div>
  );
}

export default HolidayTable;
