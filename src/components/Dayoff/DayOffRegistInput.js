import '../../css/DayOffRegistInput.css';
import {
  Alert,
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Space,
} from 'antd';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Prompt } from 'react-router-dom';
import constant from '../../constants/htmlConstants';
import validation from '../../constants/validation';
import { createDayOff } from '../../apis/dayOffApi';
import { RESPONSE_CODE } from '../../constants/errorText';

import {
  closeLoader,
  togglePopup,
  callLoader,
} from '../../actions/utilsAction';
import Toast from '../commons/ToastCommon';

function DayOffRegistInput({ value }) {
  const { t, i18n } = useTranslation();
  const { Option } = Select;
  const [componentSize, setComponentSize] = useState('default');
  const history = useHistory();
  const [isData, setIsData] = useState(false);
  const dispatch = useDispatch();
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleCancel = () => {
    history.push('/profile/details');
  };
  const hanldeChangeValue = (changedValues, allValues) => {};
  useEffect(() => {
    window.onbeforeunload = () => {
      if (isData) {
        return dispatch(callLoader());
      }
    };
  }, []);
  const onFinish = (values) => {
    const getUserId = {
      user_id: localStorage.getItem('user-id'),
    };
    const dayOffList = {};
    dayOffList.days_off_lists = values.days_off_lists.map(function (element) {
      return {
        vacation_day: moment(element.vacation_day).format(constant.FORMAT_DATE),
        session_day_id: element.session_day_id,
        vacation_type_id: element.vacation_type_id,
      };
    });
    const newData = { ...values, ...dayOffList, ...getUserId };
    createDayOff(newData).then((response) => {
      if (response !== RESPONSE_CODE[404]) {
        Toast({ message: 'Create Successfull!' });
        history.push('profile/details');
      } else {
        Alert({
          type: constant.ALERT_COMMON.TYPE.ERROR,
          title: constant.ALERT_COMMON.TITLE.ERROR,
          content: RESPONSE_CODE[404],
        });
      }
    });
  };
  return (
    <div className="dayoff-regist-input">
      <h2 className="list-title">{t('button.addNewDayOff')}</h2>
      <Row>
        <Col span={constant.GRID_COL.GRID_COL_2}></Col>
        <Col span={constant.GRID_COL.GRID_COL_16}>
          <Form
            {...constant.LAYOUT_ERROR_TEXT}
            labelCol={{
              span: constant.LABEL_COL.LABEL_COL_5,
            }}
            wrapperCol={{
              span: constant.WRAPPER_COL.WRAPPER_COL_19,
            }}
            layout={constant.LAYOUT.HORIZONTAL}
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            validateMessages={validation}
            size={componentSize}
            onFinish={onFinish}
            initialValues={{ days_off_lists: [''] }}
            onValuesChange={hanldeChangeValue}
          >
            <Form.Item
              label={t('LABEL.PO_NAME')}
              name="po_name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder={t('LABEL.PO_NAME')} />
            </Form.Item>
            <Form.Item
              label={t('LABEL.PO_EMAIL')}
              name="po_email"
              rules={[
                {
                  required: true,
                  type: 'email',
                },
              ]}
            >
              <Input placeholder={t('LABEL.PO_EMAIL')} />
            </Form.Item>
            <Form.Item label={constant.LABEL.DAY} name="days_off_lists">
              <Form.List name="days_off_lists">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map((field, index) => (
                      <div className="day-of-regist-input-last-form">
                        <Space
                          key={field.key}
                          style={{ display: 'flex', marginBottom: 8 }}
                          align="baseline"
                        >
                          <Form.Item
                            {...field}
                            name={[field.name, 'vacation_day']}
                            fieldKey={[field.fieldKey, 'vacation_day']}
                            rules={[
                              {
                                required: true,
                                message: 'Vacation day is request',
                              },
                            ]}
                          >
                            <DatePicker
                              placeholder={constant.FORMAT_DATE}
                              format={constant.FORMAT_DATE}
                              style={{ width: 200 }}
                            />
                          </Form.Item>
                          <Form.Item
                            {...field}
                            name={[field.name, 'session_day_id']}
                            fieldKey={[field.fieldKey, 'session_day_id']}
                            rules={[
                              {
                                required: true,
                                message: 'Session day is request',
                              },
                            ]}
                          >
                            <Select
                              placeholder={t('RADIO_INPUT.ALL')}
                              style={{ width: 190 }}
                            >
                              <Option value={1}>
                                {t('TABLE.COLUMN_TITLE.FULL_DAY')}
                              </Option>
                              <Option value={2}>
                                {t('TABLE.COLUMN_TITLE.MORNING')}
                              </Option>
                              <Option value={3}>
                                {t('TABLE.COLUMN_TITLE.AFTERNOON')}
                              </Option>
                            </Select>
                          </Form.Item>
                          <Form.Item
                            {...field}
                            name={[field.name, 'vacation_type_id']}
                            fieldKey={[field.fieldKey, 'vacation_type_id']}
                            rules={[
                              {
                                required: true,
                                message: 'Vacation type is request',
                              },
                            ]}
                          >
                            <Select
                              placeholder={t('VACATION.VACATION_TYPE')}
                              style={{ width: 190 }}
                            >
                              <Option value={1}>
                                {t('VACATION.ANNUAL_LEAVE')}
                              </Option>
                              <Option value={2}>
                                {t('VACATION.UNPAID_LEAVE')}
                              </Option>
                              <Option value={3}>
                                {t('VACATION.MATERNITY_LEAVE')}
                              </Option>
                              <Option value={4}>
                                {t('VACATION.WEDDING_VACATION')}
                              </Option>
                              <Option value={5}>
                                {t('VACATION.FUNERAL_LEAVE')}
                              </Option>
                            </Select>
                          </Form.Item>

                          {fields.length > 1 ? (
                            <Button onClick={() => remove(field.name)}>
                              {t('button.remove')}
                            </Button>
                          ) : null}
                        </Space>
                      </div>
                    ))}
                    <Form.Item>
                      <Button onClick={() => add()}>{t('button.add')}</Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Form.Item>

            <Form.Item
              label={constant.LABEL.REASONS}
              name={t('LABEL.REASONS')}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder={t('LABEL.REASONS')} />
            </Form.Item>
            <Form.Item name="notes" label={t('LABEL.NOTES')}>
              <Input placeholder={t('LABEL.NOTES')} />
            </Form.Item>
            <div className="dayoff-regist-button">
              <Button onClick={handleCancel}> {t('button.cancel')}</Button>
              <Button type="primary" htmlType="submit">
                {t('button.SUBMIT')}
              </Button>
            </div>
          </Form>
        </Col>
        <Col span={constant.GRID_COL.GRID_COL_2}></Col>
      </Row>
    </div>
  );
}

export default DayOffRegistInput;
