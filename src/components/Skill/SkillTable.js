import React, { useEffect, useState } from 'react';
import { Table, Tooltip } from 'antd';
import '../../css/SkillTable.css';
import { useDispatch, useSelector, useHistory } from 'react-redux';
import { NormalModule } from 'webpack';
import { useTranslation } from 'react-i18next';
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
  const { t, i18n } = useTranslation();
  const [currentRecord, setCurrentRecord] = useState({});
  const [totalRecord, setTotalRecord] = useState(null);
  const [recordPerPage, setRecordPerPage] = useState(null);
  const [page, setPage] = useState([]);
  const [skillsData, setSkillData] = useState([]);
  const [getUrlPagination, setGetUrlPagination] = useState('');
  const toggledPopup = useSelector((state) => state.toggledPopup);
  const [valueSkill, setValueSkill] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const [isButtonLoading, setIsButtonLoading] = React.useState(false);
  const handleTogglePopupAdd = () => {
    setValueSkill();
    dispatch(togglePopup());
    setIsButtonLoading(true);
    setTimeout(() => {
      setIsButtonLoading(false);
    }, 500);
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
          .then((response) => {
            if (response !== RESPONSE_CODE[404]) {
              setSkillData(response.data.data);
              setTotalRecord(response.data.meta.pagination.total);
              setRecordPerPage(response.data.meta.pagination.per_page);
              setPage(response.data.meta.pagination.current_page);
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
          setSkillData(getData);
          dispatch(closeLoader());
        }
      });
    } catch (error) {
      setSkillData(null);
    }
  };
  const columns = [
    {
      title: t('TABLE.COLUMN_TITLE.NO'),
      dataIndex: 'number',
      key: 'no',
      width: 100,
    },
    {
      title: t('TABLE.COLUMN_TITLE.NAME'),
      dataIndex: 'name',
    },
    {
      title: t('TABLE.COLUMN_TITLE.UPDATE'),
      dataIndex: 'updated',
    },
    {
      title: t('TABLE.COLUMN_TITLE.ACTION'),
      key: 'empty',
      dataIndex: 'action',
      fixed: 'center',
      align: 'center',
      width: 100,
      render: (value) => (
        <div className="skill-table-action">
          <Tooltip title={t('toolip.TITLE.EDIT')}>
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
