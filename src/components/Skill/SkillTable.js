/* eslint-disable radix */
import '../../css/SkillTable.css';
import React, { useEffect, useState } from 'react';
import { Table, Tooltip } from 'antd';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import SkillRegistInput from './SkillRegistInput';
import {
  closeLoader,
  togglePopup,
  callLoader,
} from '../../actions/utilsAction';
import {
  deleteSkillById,
  displaySkills,
  fetchSkillById,
} from '../../apis/skillApi';

import types from '../../constants/apiResourceTypes';
import constant from '../../constants/htmlConstants';
import { RESPONSE_CODE } from '../../constants/errorText';

import RemovePopupCommon from '../commons/RemovePopup';
import Toast from '../commons/ToastCommon';
import Alert from '../commons/AlertCommon';
import ButtonTableGroup from '../commons/ButtonTableGroup';

function SkillTable(props) {
  const { search } = useLocation();
  const { t, i18n } = useTranslation();
  const [currentRecord, setCurrentRecord] = useState({});
  const [totalRecord, setTotalRecord] = useState(null);
  const [recordPerPage, setRecordPerPage] = useState(null);
  const [skillData, setSkillData] = useState([]);
  const toggledPopup = useSelector((state) => state.toggledPopup);
  const [valueSkill, setValueSkill] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const [sort, setSort] = useState(null);
  const [direct, setDirect] = useState(null);
  const [isButtonLoading, setIsButtonLoading] = React.useState(false);
  const [page, setPage] = useState(1);

  const { currentName, currentPage, setCurrentPage, setCurrentName } = props;
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
      sorter: {},
    },
    {
      title: t('TABLE.COLUMN_TITLE.UPDATE'),
      dataIndex: 'updated_at',
    },
    {
      title: t('TABLE.COLUMN_TITLE.ACTION'),
      key: 'empty',
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
  const handleDeleteSkill = (id) => {
    try {
      dispatch(callLoader());
      deleteSkillById(id).then((res) => {
        Toast({ message: 'Deleted Successfull!' });
        const newData = skillData.filter((item) => item.id !== id);
        setSkillData(newData);
        dispatch(closeLoader());
      });
    } catch (err) {}
  };
  async function onChange(pagination, filters, sorters) {
    await setCurrentPage(pagination.current - 1);
    history.push(`/skills?page=${pagination.current}`);
    setSort('name');
    if (sorters.order === constant.SORT.ASCEND) {
      setDirect(constant.SORT.ASC);
    } else {
      setDirect(constant.SORT.DESC);
    }
  }

  useEffect(() => {
    const parsed = queryString.parse(search);
    try {
      if (!toggledPopup) {
        displaySkills({ ...parsed, sort, direct })
          .then((res) => {
            if (res !== RESPONSE_CODE[404]) {
              const newData = res.data.data.map((item, index) => ({
                ...item,
                updated_at: moment().format('DD/MM/YYYY, h:mm'),
                number:
                  index +
                  res.data.meta.pagination.current_page *
                    res.data.meta.pagination.per_page -
                  9,
              }));
              setSkillData(newData);
              setTotalRecord(res.data.meta.pagination.total);
              setRecordPerPage(res.data.meta.pagination.per_page);
              setPage(res.data.meta.pagination.current_page);
            } else {
              Alert({
                type: constant.ALERT_COMMON.TYPE.ERROR,
                title: constant.ALERT_COMMON.TITLE.ERROR,
                content: RESPONSE_CODE[404],
              });
            }
          })
          .catch((error) => {
            return error;
          });
      }
    } catch (err) {
      setSkillData([]);
    }
  }, [search, sort, direct, toggledPopup]);

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
        rowKey={'id'}
        dataSource={skillData}
        onChange={onChange}
        pagination={{
          position: ['topRight', 'bottomRight'],
          total: totalRecord,
          current: parseInt(page),
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
