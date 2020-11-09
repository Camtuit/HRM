import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Tooltip } from 'antd';
import RemovePopupCommon from '../commons/RemovePopup';

import HolidayRegistPopup from './HolidayRegistPopup';
import constant from '../../constants/htmlConstants';

import '../../css/HolidayTable.css';
import { togglePopup } from '../../actions/utilsAction';

function HolidayTable() {
  const toggledPopup = useSelector((state) => state.toggledPopup);
  const [valueHoliday, setValueHoliday] = useState();
  const dispatch = useDispatch();
  const handleTogglePopupAdd = () => {
    setValueHoliday();
    dispatch(togglePopup());
  };
  const handleTogglePopupEdit = () => {
    setValueHoliday({
      date: '2020-06-01',
      notes: 'Ngày Quốc tế thiếu nhi',
    });
    dispatch(togglePopup());
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
      render: () => (
        <div className="holiday-table-action">
          <Tooltip title={constant.TOOLTIP.TITLE.EDIT}>
            <span>
              <i
                onClick={handleTogglePopupEdit}
                className="fas fa-edit holiday-popup-common-icon"
              ></i>
            </span>
          </Tooltip>
          <HolidayRegistPopup
            active={toggledPopup}
            // onClose={onClosePopup}
            value={valueHoliday}
          />
          <RemovePopupCommon
            title="Delete request"
            content="Are you sure delete"
            onOk={() => {}}
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

      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}

export default HolidayTable;
