import React, { useEffect, useState } from 'react';
import { Table, Tooltip } from 'antd';
import '../../css/SkillTable.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router';
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
  const [recordPerPage, setRecordPerPage] = useState(null);
  const [page, setPage] = useState([]);
  const [skillsData, setSkillData] = useState([]);
  const [getUrlPagination, setGetUrlPagination] = useState('');
  const toggledPopup = useSelector((state) => state.toggledPopup);
  const [valueSkill, setValueSkill] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

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
      setSkillData(null);
    }
  };
  useEffect(() => {
    try {
      if (!toggledPopup) {
        displaySkills(currentPage + 1, currentName)
          .then((res) => {
            if (res !== RESPONSE_CODE[404]) {
              setSkillData(res.data.data);
              setTotalRecord(res.data.meta.pagination.total);
              setRecordPerPage(res.data.meta.pagination.per_page);
              setPage(res.data.meta.pagination.current_page);
            } else {
              Alert({
                type: constant.ALERT_COMMON.TYPE.ERROR,
                title: constant.ALERT_COMMON.TITLE.ERROR,
                content: RESPONSE_CODE[404],
              });
              // setSkillData(null);
            }
          })
          .catch((error) => {
            return error;
          });
      }
    } catch (err) {
      setSkillData(null);
    }
  }, [currentPage, currentName, toggledPopup]);
  const getData = skillsData.map((elm, index) => {
    const skillLists = {
      number: index + page * recordPerPage - 9,
      id: elm.id,
      name: elm.name,
      updated: elm.updated_at,
    };
    return skillLists;
  });
  async function onChange(pagination) {
    await setCurrentPage(pagination.current - 1);
    history.push(`/skills?page=${pagination.current}`);
  }
  const handleDeleteSkill = (id) => {
    try {
      dispatch(callLoader());
      deleteSkillById(id).then((res) => {
        if (res !== RESPONSE_CODE[422]) {
          Toast({ message: 'Deleted Successfull!' });
          const idIndex = getData.findIndex((x) => x.id === id);
          getData.splice(idIndex, 1);
          dispatch(closeLoader());
        }
      });
    } catch (error) {
      setSkillData(null);
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
            onOk={(id) => {
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
        dataSource={getData}
        onChange={onChange}
        pagination={{
          position: ['topRight', 'bottomRight'],
          total: totalRecord,
          current: currentPage + 1,
          pageSize: recordPerPage,
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
