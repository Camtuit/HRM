import React, { useState } from 'react';
import { Form, Input, Button, Radio, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import '../../css/UserRegist.css';
import { useTranslation } from 'react-i18next';
import AvatarUpload from '../../components/AvatarUpload';
import WrapperContent from '../../components/commons/WrapperContentPage';
import HeaderLink from '../../components/commons/HeaderLink';

function UserRegist() {
  const [value, setValue] = useState(1);
  const { t, i18n } = useTranslation();
  function onChange(e) {
    setValue(e.target.value);
    console.log(value);
  }
  return (
    <div className="user-regist">
      <div className="user-regist-content">
        <HeaderLink
          routes={[
            { path: '/users', title: 'User list' },
            { path: '/user', title: 'Add new user' },
          ]}
        />
        <div className="user-regist-form">
          <div className="user-regist-form-avatar">
            <AvatarUpload />
          </div>

          <Form
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 10 }}
            layout="horizontal"
          >
            <Form.Item label={t('LABEL.EMPLOYEE_CODE')}>
              <Input placeholder={t('LABEL.EMPLOYEE_CODE')} />
            </Form.Item>

            <Form.Item label={t('LABEL.FULL_NAME')}>
              <Input placeholder={t('LABEL.FULL_NAME')} />
            </Form.Item>

            <Form.Item label={t('LABEL.EMAIl')}>
              <Input placeholder={t('LABEL.EMAIl')} />
            </Form.Item>

            <Form.Item label={t('LABEL.PHONE_NUMBER')}>
              <Input placeholder={t('LABEL.PHONE_NUMBER')} />
            </Form.Item>
            <Form.Item label="Gender">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>{t('RADIO_INPUT.MALE')}</Radio>
                <Radio value={2}>{t('RADIO_INPUT.FERMALE')}</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label={t('LABEL.DATE_OF_BIRTH')}>
              <DatePicker placeholder={t('LABEL.DATE_OF_BIRTH')} />
            </Form.Item>

            <Form.Item label={t('LABEL.PROJECT_NAME')}>
              <Input placeholder={t('LABEL.PROJECT_NAME')} />
            </Form.Item>

            <Form.Item label={t('LABEL.SKILL_LIST')}>
              <Input placeholder={t('LABEL.SKILL_LIST')} />
            </Form.Item>

            <Form.Item label={t('LABEL.START_DATE')}>
              <DatePicker placeholder={t('LABEL.START_DATE')} />
            </Form.Item>

            <Form.Item label={t('TABLE.COLUMN_TITLE.CONTRACT_DAY')}>
              <DatePicker placeholder={t('LABEL.CONTRACT_DATE')} />
            </Form.Item>

            <Form.Item label={t('TABLE.COLUMN_TITLE.STATUS')}>
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>{t('RADIO_INPUT.SIGNED')}</Radio>
                <Radio value={2}>{t('RADIO_INPUT.RESIGNED')}</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label={t('LABEL.REMAINING_DAYS_OFFF')}>
              <Input placeholder={t('LABEL.REMAINING_DAYS_OFFF')} />
            </Form.Item>

            <div className="user-regist-form-button">
              <Link to="/users">
                <Button>{t('button.BACK')}</Button>
              </Link>

              <Button type="primary">{t('button.SAVE')}</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default UserRegist;
