import React, { useState } from 'react';
import { Form, Table, Button, Modal, Input } from 'antd';
import '../../css/SkillTable.css';
import { Link } from 'react-router-dom';
import SkillRegistInput from './SkillRegistInput';
import SkillEditPopup from './SkillEditPopup';
import RemovePopupCommon from '../RemovePopupCommon';

function SkillTable() {
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
          <SkillEditPopup />
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
  ];

  return (
    <div className="skill-table">
      <SkillRegistInput />
      <Table className="table" columns={columns} dataSource={data} />
    </div>
  );
}
export default SkillTable;
