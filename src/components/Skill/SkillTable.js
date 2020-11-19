import React, { useEffect, useState } from 'react';
import { Table, Tooltip } from 'antd';
import '../../css/SkillTable.css';
import { useDispatch, useSelector } from 'react-redux';
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
    }
  }, [currentPage, currentName, toggledPopup]);

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
      dataIndex: 'no',
      key: 'no',
      width: 100,
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
        className="table"
        columns={columns}
        dataSource={data}
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
