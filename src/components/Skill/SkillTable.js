import React from 'react';
import { Table, Button } from 'antd';
import '../../css/SkillTable.css';
import { Link } from 'react-router-dom';

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
          <i className="fas fa-edit"> </i>
          <i className="fas fa-trash-alt" />
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
      <Button className="skill-table-add" type="primary">
        <Link to="/skillregist">Add new</Link>
      </Button>
      <Table className="table" columns={columns} dataSource={data} />
    </div>
  );
}
export default SkillTable;
