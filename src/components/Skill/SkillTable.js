import React, { useEffect, useState } from 'react';
import { Table, Button, Tooltip } from 'antd';
import '../../css/SkillTable.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import SkillRegistInput from './SkillRegistInput';
import RemovePopupCommon from '../commons/RemovePopup';
import { togglePopup } from '../../actions/utilsAction';
import constant from '../../constants/htmlConstants';

function SkillTable({
  currentName,
  currentPage,
  setCurrentPage,
  setCurrentName,
}) {
  const [currentRecord, setCurrentRecord] = useState({});
  const [totalRecord, setTotalRecord] = useState(null);
  const [data, setData] = useState(null);
  const toggledPopup = useSelector((state) => state.toggledPopup);
  const [valueSkill, setValueSkill] = useState();
  const dispatch = useDispatch();
  const handleTogglePopupAdd = () => {
    setValueSkill();
    dispatch(togglePopup());
  };
  const handleTogglePopupEdit = (id) => {
    axios({
      method: 'GET',
      url: ` http://api-java.dev-hrm.nals.vn/api/skills/${id}`,
    })
      .then((res) => {
        setValueSkill(res.data.data);
        dispatch(togglePopup());
      })
      .catch((err) => {
        return err;
      });
  };
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://api-java.dev-hrm.nals.vn/api/skills/',
      params: {
        page: currentPage,
        name: currentName,
      },
    })
      .then((response) => {
        const getData = response.data.data.map((elm, index) => {
          return {
            no: index + 1,
            id: elm.id,
            name: elm.name,
            updated: elm.updated_at,
          };
        });
        setData(getData);
        setTotalRecord(response.data.meta.pagination.total);
      })
      .catch((err) => {
        setData(null);
      });
  }, [currentName, currentPage]);
  async function onChange(pagination) {
    await setCurrentPage(pagination.current - 1);
  }
  const handleDeleteSkill = (id) => {
    axios({
      method: 'DELETE',
      url: ` http://api-java.dev-hrm.nals.vn/api/skills/${id}`,
    })
      .then((res) => {
        const idIndex = data.findIndex((x) => x.key === id);
        data.splice(idIndex, 1);
        setCurrentPage('');
      })
      .catch((err) => {
        return err;
      });
  };
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
      render: (value) => (
        <div className="skill-table-action">
          <Tooltip title={constant.TOOLTIP.TITLE.EDIT}>
            <span>
              <i
                onClick={(id) => handleTogglePopupEdit(value.id)}
                className="fas fa-edit skill-popup-common-icon"
              ></i>
            </span>
          </Tooltip>
          <RemovePopupCommon
            title="Delete skill"
            content="Are you sure delete"
            onOk={() => {
              handleDeleteSkill(value.id);
            }}
          />
        </div>
      ),
    },
  ];
  return (
    <div className="skill-table">
      <Button
        className="skill-table-button"
        type="primary"
        onClick={handleTogglePopupAdd}
      >
        {constant.BUTTON.ADD}
      </Button>
      <SkillRegistInput
        active={toggledPopup}
        value={valueSkill}
        setCurrentName={setCurrentName}
        setCurrentPage={setCurrentPage}
      />
      <Table
        className="table"
        columns={columns}
        dataSource={data}
        size="small"
        onChange={onChange}
        pagination={{
          position: ['topRight', 'bottomRight'],
          total: totalRecord,
          current: currentPage + 1,
        }}
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
