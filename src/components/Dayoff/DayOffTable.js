import React from 'react';
import { Button, Table, Tooltip } from 'antd';
import '../../css/DayOffTable.css';
import { useHistory } from 'react-router';
import RemovePopupCommon from '../commons/RemovePopup';
import constant from '../../constants/htmlConstants';

function DayOffTable() {
  const history = useHistory();
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
  const COLUMNS = [
    {
      title: constant.TABLE.COLUMN_TITLE.NO,
      dataIndex: 'no',
    },

    {
      title: constant.TABLE.COLUMN_TITLE.NAME,
      dataIndex: 'name',
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
      title: constant.TABLE.COLUMN_TITLE.DATE_OFF,
      dataIndex: 'dateOff',
      sorter: {
        compare: (a, b) => a.dayOff - b.dayOff,
        multiple: 1,
      },
    },

    {
      title: constant.TABLE.COLUMN_TITLE.TYPE,
      dataIndex: 'type',
    },

    {
      title: constant.TABLE.COLUMN_TITLE.PO_NAME,
      dataIndex: 'poName',
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

  const DATA = [
    {
      key: '1',
      no: '1',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },
    {
      key: '2',
      no: '2',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },
    {
      key: '3',
      no: '3',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },
    {
      key: '4',
      no: '4',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },

    {
      key: '5',
      no: '5',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },

    {
      key: '6',
      no: '6',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },

    {
      key: '7',
      no: '7',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },

    {
      key: '8',
      no: '8',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },

    {
      key: '9',
      no: '9',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },

    {
      key: '10',
      no: '10',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },

    {
      key: '11',
      no: '11',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },

    {
      key: '12',
      no: '12',
      name: 'Nguyễn Văn A',
      email: 'nguyenvana@gmail.com',
      dateOff: '22-11-2020 ~ 22-11-2022',
      type: 'Morning',
      poName: 'po@nal.vn',
    },
  ];
  const handleChangeTable = (pagination, filters, sorter, extra) => {};

  return (
    <div className="dayoff-table">
      <Button
        className="dayoff-table-button"
        type="primary"
        onClick={handleChangeAddNewDayOff}
      >
        {constant.BUTTON.ADD_NEW_DATE_OFF}
      </Button>
      <Button className="dayoff-table-button" type="primary">
        {constant.BUTTON.EXPORT}
      </Button>

      <Table
        classNamme="dayoff-table-layout"
        columns={COLUMNS}
        dataSource={DATA}
        onChange={handleChangeTable}
        pagination={{
          position: [PAGINATION_POSITION.top, PAGINATION_POSITION.bottom],
        }}
      />
    </div>
  );
}

export default DayOffTable;
