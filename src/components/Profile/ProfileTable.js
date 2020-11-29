import React, { useState, useEffect } from 'react';
import { Form } from 'antd';
import Toast from '../commons/ToastCommon';
import { useTranslation } from 'react-i18next';
import { RESPONSE_CODE } from '../../constants/errorText';
import { fetchUserDetail } from '../../apis/ProfileUserApi';

export default function ProfileTable() {
  const [idUsers, setIdUsers] = useState('15');
  const [userDetail, setUserDeatail] = useState('');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    try {
      fetchUserDetail(idUsers).then((res) => {
        if (res !== RESPONSE_CODE[404]) {
          setUserDeatail(res.data.data);
          console.log(res.data.data.skills);
        } else {
          console.log('error');
        }
      });
    } catch (e) {
      Toast({ message: e });
    }
  }, []);

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
