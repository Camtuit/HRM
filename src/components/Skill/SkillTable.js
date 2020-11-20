import React, { useEffect, useState } from 'react';
import { Table, Tooltip } from 'antd';
import '../../css/SkillTable.css';
import { useDispatch, useSelector } from 'react-redux';
import { NormalModule } from 'webpack';
import SkillRegistInput from './SkillRegistInput';
import RemovePopupCommon from '../commons/RemovePopup';
import {
  closeLoader,
  togglePopup,
  callLoader,
} from '../../actions/utilsAction';
import constant from '../../constants/htmlConstants';
import {
  deleteSkillById,
  displaySkills,
  fetchSkillById,
} from '../../apis/skillApi';
import { RESPONSE_CODE } from '../../constants/errorText';
import Alert from '../commons/AlertCommon';
import ButtonTableGroup from '../commons/ButtonTableGroup';
import types from '../../constants/apiResourceTypes';
import Toast from '../commons/ToastCommon';

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
  const [recordPerPage, setRecordPerpage] = useState(null);
  const [page, setPage] = useState(null);
  const [skills, setSkill] = useState([]);
  const dispatch = useDispatch();
  const handleTogglePopupAdd = () => {
    setValueSkill();
    dispatch(togglePopup());
  };
  const handleTogglePopupEdit = (id) => {
    try {
      dispatch(callLoader());
      fetchSkillById(id).then((res) => {
        if (res !== RESPONSE_CODE[404]) {
          setTimeout(() => {
            dispatch(togglePopup());
            setValueSkill(res.data.data);
            dispatch(closeLoader());
          }, constant.REQUEST_TIMEOUT);
        } else {
          Alert({
            type: constant.ALERT_COMMON.TYPE.ERROR,
            title: constant.ALERT_COMMON.TITLE.ERROR,
            content: RESPONSE_CODE[404],
          });
        }
      });
    } catch (error) {
      setData(null);
    }
  };
  useEffect(() => {
    try {
      if (!toggledPopup) {
        displaySkills(currentPage, currentName)
          .then((response) => {
            if (response !== RESPONSE_CODE[404]) {
              setSkill(response.data.data);
              setTotalRecord(response.data.meta.pagination.total);
              setRecordPerpage(response.data.meta.pagination.per_page);
              setPage(response.data.meta.pagination.current_page);
            } else {
              setData(null);
            }
          })
          .catch((error) => {
            return error;
          });
      }
    } catch (err) {
      setData(null);
      return err;
    }
  }, [currentPage, currentName, toggledPopup]);
  const skillData = skills.map((elm, index) => {
    const skillList = {
      key: elm.id,
      name: elm.name,
      updated: elm.updated_at,
    };
    skillList.number = index + 1;
    skillList.action = { id: elm.id, status: elm.status };
    return skillList;
  });
  async function onChange(pagination) {
    await setCurrentPage(pagination.current - 1);
  }
  const handleDeleteSkill = (id) => {
    try {
      deleteSkillById(id).then((res) => {
        if (res !== RESPONSE_CODE[422]) {
          Toast({ message: 'Deleted Successfull!' });
          const idIndex = data.findIndex((x) => x.key === id);
          data.splice(idIndex, 1);
          setCurrentPage('');
          setCurrentName('');
        }
      });
    } catch (error) {
      setData(null);
    }
  };
  const columns = [
    {
      title: 'No.',
      dataIndex: 'number',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Updated at',
      dataIndex: 'updated',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      fixed: 'center',
      align: 'center',
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
            content={`Are you sure delete ${value.name}`}
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
      <ButtonTableGroup
        type={types.SKILL}
        handleAddButton={() => handleTogglePopupAdd()}
      />
      <SkillRegistInput
        active={toggledPopup}
        value={valueSkill}
        currentPage={currentPage}
        currentName={currentName}
        setCurrentName={setCurrentName}
        setCurrentPage={setCurrentPage}
      />
      <Table
        pagination={{
          position: ['topRight', 'bottomRight'],
          total: totalRecord,
          current: currentPage + 1,
          pageSize: recordPerPage,
        }}
        className="table"
        columns={columns}
        dataSource={skillData}
        onChange={onChange}
      />
    </div>
  );
}
export default SkillTable;
