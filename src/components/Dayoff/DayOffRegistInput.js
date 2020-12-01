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
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Prompt } from 'react-router-dom';
import constant from '../../constants/htmlConstants';
import validation from '../../constants/validation';
import { createDayOff } from '../../apis/dayOffApi';
import { RESPONSE_CODE } from '../../constants/errorText';
=======
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import constant from '../../constants/htmlConstants';
import validation from '../../constants/validation';
import { createDayOff } from '../../apis/dayOffApi';
>>>>>>> 3cc7cf0... [HRM-268] Fix role member day off

<<<<<<< HEAD
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
=======
function DayOffRegistInput({ value }) {
  const { Option } = Select;
  const [componentSize, setComponentSize] = useState('default');
  const history = useHistory();
  const [data, setData] = useState('');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
<<<<<<< HEAD
  const handleChangeName = (e) => {
    setValueName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setValueEmail(e.target.value);
  };
  const handleChangeReason = (e) => {
    setValueReason(e.target.value);
  };
  const handleChangeNote = (e) => {
    setValueNote(e.target.value);
  };
  const onChangeDate = (date) => {
    setValueDate(date);
  };
  const handleChangeChoose = (valueChoose) => {
    setValueQuickChoose(valueChoose);
  };
  const handleVacationType = (valueVacation) => {
    setVacation(valueVacation);
  };
  const handleDateMore = (valueMore) => {
    setValueDateMore(valueMore);
  };
  const handleChooseMore = (valueChoose) => {
    setValueChooice(valueChoose);
  };
  const handleVacationMore = (valueVacation) => {
    setValueVacationMore(valueVacation);
  };
  const handleSubmit = (value) => {
    const newDate = {
      name: valueName,
      email: valueEmail,
      date: valueDate,
      choice: valueQuickChoose,
      vacationType: vacation,
      dateMore: valueDateMore,
      choiceMore: valueChooice,
      vacationMore: valueVacationMore,
      reason: valueReason,
      note: valueNote,
    };
  };

>>>>>>> eaff8aa... [HRM-268] Create add day off
  const handleCancel = () => {
    history.push('/profile/details');
  };
  useEffect(() => {
    window.onbeforeunload = () => {
      return dispatch(callLoader());
    };
  });
  const onFinish = (values) => {
    const getUserId = {
      user_id: localStorage.getItem('user-id'),
=======
  const handleCancel = () => {
    history.push('/profile/details');
  };
  const handleDate = () => {};
  const onFinish = (values) => {
    const fetchId = {
      user_id: 1,
>>>>>>> 3cc7cf0... [HRM-268] Fix role member day off
    };
    const dayOffList = {};
    dayOffList.days_off_lists = values.days_off_lists.map(function (element) {
      return {
        vacation_day: moment(element.vacation_day).format(constant.FORMAT_DATE),
        session_day_id: element.session_day_id,
        vacation_type_id: element.vacation_type_id,
      };
    });
<<<<<<< HEAD
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
=======
    const newData = { ...values, ...dayOffList, ...fetchId };
    console.log('value', newData);
    createDayOff(newData).then((response) => {
      history.push('profile/details');
    });
  };

>>>>>>> 3cc7cf0... [HRM-268] Fix role member day off
  return (
    <div className="dayoff-regist-input">
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
          >
            <Form.Item
<<<<<<< HEAD
              label={t('LABEL.PO_NAME')}
=======
              label={constant.LABEL.PO_NAME}
>>>>>>> 3cc7cf0... [HRM-268] Fix role member day off
              name="po_name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
<<<<<<< HEAD
<<<<<<< HEAD
              <Input placeholder={t('LABEL.PO_NAME')} />
=======
              <Input
                onChange={handleChangeName}
                placeholder={constant.LABEL.PO_NAME}
              />
>>>>>>> eaff8aa... [HRM-268] Create add day off
            </Form.Item>
            <Form.Item
              label={t('LABEL.PO_EMAIL')}
=======
              <Input placeholder={constant.LABEL.PO_NAME} />
            </Form.Item>
            <Form.Item
              label={constant.LABEL.PO_EMAIL}
>>>>>>> 3cc7cf0... [HRM-268] Fix role member day off
              name="po_email"
              rules={[
                {
                  required: true,
                  type: 'email',
                },
              ]}
            >
<<<<<<< HEAD
<<<<<<< HEAD
              <Input placeholder={t('LABEL.PO_EMAIL')} />
            </Form.Item>
            <Form.Item label={constant.LABEL.DAY} name="days_off_lists">
              <Form.List name="days_off_lists">
=======
              <Input
                onChange={handleChangeEmail}
                placeholder={constant.LABEL.PO_EMAIL}
              />
            </Form.Item>

            <Form.Item
              label={constant.LABEL.DAY}
              name="vacationDateFrom"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <div className="day-of-regist-input-last-form">
                <Space
                  style={{ display: 'flex', marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item rules={[{ required: true }]}>
                    <DatePicker
                      placeholder={constant.FORMAT_DATE}
                      format={constant.FORMAT_DATE}
                      onChange={onChangeDate}
                    />
                  </Form.Item>
                  <Form.Item rules={[{ required: true }]}>
                    <Select
                      onChange={handleChangeChoose}
                      placeholder={constant.RADIO_CHOOSE.ALL}
                      style={{ width: 200 }}
                    >
                      <Option value={1}>
                        {constant.SELECT_CHOOSE.FUll_DAY}
                      </Option>
                      <Option value={2}>
                        {constant.SELECT_CHOOSE.MORNING}
                      </Option>
                      <Option value={3}>
                        {constant.SELECT_CHOOSE.AFTERNOON}
                      </Option>
                    </Select>
                  </Form.Item>
                  <Form.Item rules={[{ required: true }]}>
                    <Select
                      placeholder={constant.VACATION_TYPE.VACATION_TITLE}
                      style={{ width: 200 }}
                      onChange={handleVacationType}
                    >
                      <Option value={1}>
                        {constant.VACATION_TYPE.ANNUAL_LEAVE}
                      </Option>
                      <Option value={2}>
                        {constant.VACATION_TYPE.UNPAID_LEAVE}
                      </Option>
                      <Option value={3}>
                        {constant.VACATION_TYPE.MATERNITY_LEAVE}
                      </Option>
                      <Option value={4}>
                        {constant.VACATION_TYPE.WEDDING_VACATION}
                      </Option>
                      <Option value={5}>
                        {constant.VACATION_TYPE.FUNERAL_LEAVE}
                      </Option>
                    </Select>
                  </Form.Item>
                </Space>
              </div>

              <Form.List name="users">
>>>>>>> eaff8aa... [HRM-268] Create add day off
=======
              <Input placeholder={constant.LABEL.PO_EMAIL} />
            </Form.Item>
            <Form.Item label={constant.LABEL.DAY} name="days_off_lists">
              <Form.List name="days_off_lists">
>>>>>>> 3cc7cf0... [HRM-268] Fix role member day off
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
                            rules={[{ required: true }]}
                          >
                            <DatePicker
                              onChange={handleDate}
                              placeholder={constant.FORMAT_DATE}
                              format={constant.FORMAT_DATE}
                              style={{ width: 200 }}
                            />
                          </Form.Item>
                          <Form.Item
                            {...field}
                            name={[field.name, 'session_day_id']}
                            fieldKey={[field.fieldKey, 'session_day_id']}
                            rules={[{ required: true }]}
                          >
                            <Select
<<<<<<< HEAD
<<<<<<< HEAD
                              placeholder={t('RADIO_INPUT.ALL')}
                              style={{ width: 190 }}
=======
                              onChange={handleChooseMore}
=======
>>>>>>> 3cc7cf0... [HRM-268] Fix role member day off
                              placeholder={constant.RADIO_CHOOSE.ALL}
                              style={{ width: 200 }}
>>>>>>> 9c46829... [HRM-268] Fix day off regis Input
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
                            rules={[{ required: true }]}
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
<<<<<<< HEAD
              name={t('LABEL.REASONS')}
=======
              name="reasons"
>>>>>>> 3cc7cf0... [HRM-268] Fix role member day off
              rules={[
                {
                  required: true,
                },
              ]}
            >
<<<<<<< HEAD
<<<<<<< HEAD
              <Input placeholder={t('LABEL.REASONS')} />
            </Form.Item>
            <Form.Item name="notes" label={t('LABEL.NOTES')}>
              <Input placeholder={t('LABEL.NOTES')} />
            </Form.Item>
            <div className="dayoff-regist-button">
              <Button onClick={handleCancel}> {t('button.cancel')}</Button>
              <Button type="primary" htmlType="submit">
                {t('button.SUBMIT')}
=======
              <Input
                onChange={handleChangeReason}
                placeholder={constant.LABEL.REASONS}
              />
=======
              <Input placeholder={constant.LABEL.REASONS} />
>>>>>>> 3cc7cf0... [HRM-268] Fix role member day off
            </Form.Item>
            <Form.Item name="notes" label={constant.LABEL.NOTES}>
              <Input placeholder={constant.LABEL.NOTES} />
            </Form.Item>
            <div className="dayoff-regist-button">
              <Button onClick={handleCancel}>{constant.BUTTON.CANCEL}</Button>
              <Button type="primary" htmlType="submit">
                {constant.BUTTON.SUBMIT}
>>>>>>> eaff8aa... [HRM-268] Create add day off
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
