import React, { useEffect, useState } from 'react';
import { Button, Table, Tooltip } from 'antd';
import '../../css/DayOffTable.css';
import { useHistory } from 'react-router';
import axios from 'axios';

import Alert from '../commons/AlertCommon';
import RemovePopupCommon from '../commons/RemovePopup';
import constant from '../../constants/htmlConstants';
import { RESPONSE_CODE } from '../../constants/errorText';

function DayOffTable() {
  const history = useHistory();
  const [data, setData] = useState([]);
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
  const handleChangeTable = (pagination, filters, sorter, extra) => {};
  const COLUMNS = [
    {
      title: constant.TABLE.COLUMN_TITLE.NO,
      dataIndex: 'id',
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
      dataIndex: 'vacation_day_begin',
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
      title: constant.TABLE.COLUMN_TITLE.PO_NAME,
      dataIndex: 'po_name',
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
    try {
      axios
        .get('https://5fbe81045923c90016e6b183.mockapi.io/api/dayoffs/dayOffs')
        .then((res) => {
          if (res !== RESPONSE_CODE[404]) {
            console.log(res.data);
            const newData = res.data.map((item, index) => ({
              ...item,
            }));
            setData(newData);
          } else {
            Alert({
              type: constant.ALERT_COMMON.TYPE.ERROR,
              title: constant.ALERT_COMMON.TITLE.ERROR,
              content: RESPONSE_CODE[404],
            });
          }
        });
    } catch (err) {
      setData([]);
      console.log(err);
    }
  }, []);
  return (
    <div className="dayoff-table">
      <Button className="dayoff-table-button" type="primary">
        {constant.BUTTON.EXPORT}
      </Button>

      <Table
        rowKey={'id'}
        classNamme="dayoff-table-layout"
        columns={COLUMNS}
        dataSource={data}
        onChange={handleChangeTable}
        pagination={{
          position: [PAGINATION_POSITION.top, PAGINATION_POSITION.bottom],
        }}
      />
    </div>
  );
}

export default DayOffTable;
