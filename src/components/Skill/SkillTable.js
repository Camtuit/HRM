import React, { useEffect, useState } from 'react';
import { Table, Tooltip } from 'antd';
import '../../css/SkillTable.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router';
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
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [currentRecord, setCurrentRecord] = useState({});
  const [totalRecord, setTotalRecord] = useState(null);
  const [recordPerPage, setRecordPerPage] = useState(null);
  const [page, setPage] = useState();
  const [skillsData, setSkillData] = useState([]);
  const [getUrlPagination, setGetUrlPagination] = useState('');
  const toggledPopup = useSelector((state) => state.toggledPopup);
  const [valueSkill, setValueSkill] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const [sort, setSort] = useState(null);
  const [direct, setDirect] = useState(null);
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
  console.log(location);
  useEffect(() => {
    try {
      if (!toggledPopup) {
        displaySkills(currentPage + 1, currentName, sort, direct)
          .then((res) => {
            if (res !== RESPONSE_CODE[404]) {
              const newData = res.data.data.map((item, index) => ({
                ...item,
                key: item.id,
                number: index + page * recordPerPage,
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
      setSkillData(null);
    }
    setGetUrlPagination(currentPage + 1);
  }, [currentPage, currentName, toggledPopup, sort, direct]);
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
  const handleDeleteSkill = (id) => {
    const newData = skillsData.filter((item) => item.id !== id);
    setSkillData(newData);
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
        dataSource={skillsData}
        onChange={onChange}
        pagination={{
          position: ['topRight', 'bottomRight'],
          total: totalRecord,
          current: currentPage + 1,
          pageSize: recordPerPage,
        }}
        loading="false"
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
