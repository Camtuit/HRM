import React, { useState, useEffect } from 'react';
import { Button, Form } from 'antd';
import Toast from '../commons/ToastCommon';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { RESPONSE_CODE } from '../../constants/errorText';
import { fetchUserDetail } from '../../apis/ProfileUserApi';
import { Upload, message } from 'antd';
import { closeLoader, callLoader } from '../../actions/utilsAction';
import { UploadAvatarUser } from '../../apis/userApi';

export default function ProfileTable() {
  const [idUsers, setIdUsers] = useState('15');
  const [userDetail, setUserDeatail] = useState('');
  const { t, i18n } = useTranslation();
  const [fileList, setFileList] = useState([]);
  const [files, setFiles] = useState([]);
  const [avatar, setAvatar] = useState('');
  const [checkShowButton, setCheckShowButton] = useState(false);

  const onChange = ({ fileList: newFileList, file }) => {
    setFileList(newFileList);
    setCheckShowButton(false);
    if (file.status === 'done') {
      file.response && setFiles(file.response.data.link);
      setCheckShowButton(true);
    } else if (file.status === 'uploading') {
      setCheckShowButton(false);
    }
  };

  const handleUpLoadAvatar = () => {
    try {
      const avatar = `http://api-php.dev-hrm.nals.vn/${files}`;
      UploadAvatarUser(idUsers, avatar).then((res) => {
        if (res !== RESPONSE_CODE[404]) {
          setAvatar(res.data.data.avatar);
          setCheckShowButton(false);
        }
      });
    } catch (error) {
      setAvatar(null);
    }
  };
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      Toast({ message: t('MESSAGE.error_typefile_avatar') });
    }
    const isSizeLM2M = file.size / 1024 / 1024 < 2;
    if (!isSizeLM2M) {
      Toast({ message: t('MESSAGE.error_size_avatar') });
    }
    return isJpgOrPng && isSizeLM2M;
  };

  useEffect(() => {
    try {
      fetchUserDetail(idUsers).then((res) => {
        if (res !== RESPONSE_CODE[404]) {
          setUserDeatail(res.data.data);
          setAvatar(res.data.data.avatar);
        } else {
          console.log('error');
        }
      });
    } catch (e) {
      Toast({ message: e });
    }
  }, [avatar]);
  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 6,
    },
  };

  return (
    <div className="content-profile-detail">
      <div className="content-profile-detail-avatar">
        <Upload
          action="http://api-php.dev-hrm.nals.vn/api/upload"
          listType="picture-card"
          showUploadList={true}
          onChange={onChange}
          beforeUpload={beforeUpload}
          name="image"
          className="avatar-uploader"
        >
          {fileList.length < 1 && (
            <img
              src={userDetail.avatar}
              alt="avatar"
              style={{ width: '156px', height: '156px', borderRadius: '156px' }}
            />
          )}
        </Upload>
        <div className="btn-avata-profile">
          <Button
            className="content-profile-detail-avatar-button"
            onClick={handleUpLoadAvatar}
          >
            {checkShowButton ? t('button.SAVE') : ''}
          </Button>
        </div>
      </div>
      <div className="content-profile-detail-form">
        <Form {...layout} name="nest-messages">
          <Form.Item label={t('LABEL.EMPLOYEE_CODE')}>
            <p>{userDetail.employee_code} </p>
          </Form.Item>
          <Form.Item label={t('LABEL.FULL_NAME')}>
            <p>{userDetail.full_name} </p>
          </Form.Item>
          <Form.Item label={t('LABEL.EMAIl')}>
            <p>{userDetail.email} </p>
          </Form.Item>
          <Form.Item label={t('LABEL.PHONE_NUMBER')}>
            <p>{userDetail.phone_number}</p>
          </Form.Item>
          <Form.Item label={t('LABEL.GENDER')}>
            <p> {userDetail.gender ? ' female' : 'male'}</p>
          </Form.Item>
          <Form.Item label={t('LABEL.PROJECT_NAME')}>
            <p> {userDetail.project}</p>
          </Form.Item>
          <Form.Item label={t('LABEL.DATE_OF_BIRTH')}>
            <p> {userDetail.birthday}</p>
          </Form.Item>
          <Form.Item label={t('LABEL.SKILL_LIST')}>
            {userDetail.skills &&
              userDetail.skills.map((skill) => {
                return <p>{skill.name}</p>;
              })}
          </Form.Item>
          <Form.Item label={t('LABEL.START_DATE')}>
            <p>{userDetail.start_date}</p>
          </Form.Item>
          <Form.Item label={t('LABEL.CONTRACT_DATE')}>
            {userDetail.skills &&
              userDetail.contracts.map((contract) => {
                return (
                  <p>
                    {contract.contract_date_begin} {' ~ '}{' '}
                    {contract.contract_date_end}
                  </p>
                );
              })}
          </Form.Item>
          <Form.Item label={t('LABEL.REMAINING_DAYS_OFFF')}>
            <p>{userDetail.remaining_days_off}</p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
