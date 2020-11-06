import React, { useState } from 'react';
import { Form, Table, Button, Modal, Input } from 'antd';
import '../../css/SkillTable.css';
import { Link } from 'react-router-dom';
import SkillRegistInput from './SkillRegistInput';
import SkillEditPopup from './SkillEditPopup';
import RemovePopupCommon from '../RemovePopupCommon';

function SkillTable() {
  const [currentRecord, setCurrentRecord] = useState({});
  const [panigationtop, setPanigationtop] = useState('topRight');
  const [panigationbottom, setpanigationbottom] = useState('bottomRight');
  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Updated at',
      dataIndex: 'updated',
      key: 'updated',
    },
    {
      title: 'Action',
      key: 'empty',
      fixed: 'right',
      width: 100,
      render: () => (
        <div className="skill-table-action">
          <SkillEditPopup record={currentRecord} />
          <RemovePopupCommon
            title="Delete skill"
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
      name: 'PHP',
      updated: '10/10/2020 15:10:15',
    },
    {
      key: '2',
      no: '2',
      name: 'Angular',
      updated: '10/10/2020 15:10:15',
    },
    {
      key: '3',
      no: '3',
      name: 'Reactjs',
      updated: '10/10/2020 15:10:15',
    },
    {
      key: '4',
      no: '4',
      name: 'Node',
      updated: '10/10/2020 15:10:15',
    },
    {
      key: '5',
      no: '5',
      name: 'Vuje',
      updated: '10/10/2020 15:10:15',
    },
    {
      key: '6',
      no: '6',
      name: 'Nodej',
      updated: '10/10/2020 15:10:15',
    },
    {
      key: '7',
      no: '7',
      name: 'css',
      updated: '10/10/2020 15:10:15',
    },
    {
      key: '8',
      no: '8',
      name: 'css',
      updated: '10/10/2020 15:10:15',
    },
    {
      key: '9',
      no: '9',
      name: 'css',
      updated: '10/10/2020 15:10:15',
    },
    {
      key: '10',
      no: '10',
      name: 'css',
      updated: '10/10/2020 15:10:15',
    },
    {
      key: '11',
      no: '11',
      name: 'css',
      updated: '10/10/2020 15:10:15',
    },
  ];

  return (
    <div className="skill-table">
      <SkillRegistInput />
      <Table
        className="table"
        columns={columns}
        dataSource={data}
        size="small"
        pagination={{ position: [panigationtop, panigationbottom] }}
        onRow={(record) => {
          return {
            onClick: () => {
              setCurrentRecord(record);
            },
          };
        }}
      />
    </div>
  );
}
export default SkillTable;
