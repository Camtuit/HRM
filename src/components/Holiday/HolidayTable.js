import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Tooltip } from 'antd';
import axios from 'axios';
import RemovePopupCommon from '../commons/RemovePopup';

import HolidayRegistPopup from './HolidayRegistPopup';
import constant from '../../constants/htmlConstants';

import '../../css/HolidayTable.css';
import { togglePopup } from '../../actions/utilsAction';
import { callApi } from '../../apis/axiosService';

function HolidayTable({ currentYear, currentPage, setCurrentPage }) {
  const [data, setData] = useState(null);
  const [totalRecord, setTotalRecord] = useState(null);
  const toggledPopup = useSelector((state) => state.toggledPopup);
  const [valueHoliday, setValueHoliday] = useState();
  const dispatch = useDispatch();
  const handleTogglePopupAdd = () => {
    setValueHoliday();
    dispatch(togglePopup());
  };
  const handleTogglePopupEdit = (id) => {
    callApi({
      url: `/holidays/${id}`,
      method: 'GET',
    })
      .then((res) => {
        setValueHoliday(res.data);
        dispatch(togglePopup());
      })
      .catch((err) => {
        return err;
      });
  };
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
  }, [currentYear]);

  async function onChange(pagination) {
    await setCurrentPage(pagination.current - 1);
    console.log(pagination);
  }

  const handleDeleteHoliday = (id) => {
    callApi({
      url: `/holidays/${id}`,
      method: 'DELETE',
    })
      .then((res) => {
        const idIndex = data.findIndex((x) => x.key === id);
        data.splice(idIndex, 1);
      })
      .catch((err) => {
        return err;
      });
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
        className="table"
        columns={columns}
        dataSource={data}
        onChange={onChange}
        pagination={{
          position: ['topRight', 'bottomRight'],
          total: totalRecord,
          current: currentPage + 1,
        }}
      />
      <HolidayRegistPopup active={toggledPopup} value={valueHoliday} />
    </div>
  );
}

export default HolidayTable;
