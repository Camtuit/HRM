import '../../css/DayOffRegistInput.css';
import {
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
import { createDayOff } from '../../apis/dayOffApi';
import { RESPONSE_CODE } from '../../constants/errorText';
import Alert from '../commons/AlertCommon';
import validation from '../../constants/validation';
import RemovePopupCommon from '../commons/RemovePopup';
import ConfirmPopupCommon from '../commons/ConfirmPopupCommon';
import Toast from '../commons/ToastCommon';

function DayOffRegistInput({ value }) {
  const { t, i18n } = useTranslation();
  const { Option } = Select;
  const [visible, setVisible] = useState(!!localStorage.getItem('values'));
  const [componentSize, setComponentSize] = useState('default');
  const [visibleAdd, setVisibleAdd] = useState(true);
  const history = useHistory();
  const [form] = Form.useForm();
  const initialLoadings = {
    [t('button.SUBMIT')]: false,
  };
  const [loadings, setLoadings] = useState(initialLoadings);

  const handleCancel = () => {
    history.push('/profile/details');
  };
  const handleChangeValue = (changedValues, allValues) => {
    localStorage.setItem('values', JSON.stringify(allValues));
    const allValue = allValues.days_off_lists;
    for (let i = 0; i < allValue.length; i++) {
      if (
        allValue[i] !== undefined &&
        allValue[i].vacation_day &&
        allValue[i].session_day_id &&
        allValue[i].vacation_type_id
      ) {
        setVisibleAdd(false);
      } else {
        setVisibleAdd(true);
      }
    }
    // validation the same date
    // console.log('allValues', allValues.days_off_lists);
    // const arrayValue = allValues.days_off_lists;
    // const sameValue = arrayValue.map((item) => {
    //   console.log('map', item);
    //   return item.vacation_day;
    // });
    // const isDuplicate = sameValue.some((item, i) => {
    //   return sameValue.indexOf(item) !== i;
    // });
    // console.log(isDuplicate);
  };

  const handleOk = () => {
    if (localStorage && localStorage.getItem('values')) {
      const dataInput = JSON.parse(localStorage.getItem('values'));
      form.setFieldsValue({
        po_name: dataInput.po_name,
        po_email: dataInput.po_email,
        reasons: dataInput.reasons,
        notes: dataInput.notes,
      });

      for (let i = 0; i < dataInput.days_off_lists.length; i++) {
        form.setFields([
          {
            name: ['days_off_lists', i, 'vacation_day'],
            value: moment(dataInput.days_off_lists[i].vacation_day),
          },
          {
            name: ['days_off_lists', i, 'session_day_id'],
            value: dataInput.days_off_lists[i].session_day_id,
          },
          {
            name: ['days_off_lists', i, 'vacation_type_id'],
            value: dataInput.days_off_lists[i].vacation_type_id,
          },
        ]);
        setVisibleAdd(false);
      }
      setVisible(false);
    }
  };
  const handleLoading = (value) => {
    // const message =
    //   value === t('button.SUBMIT') || value === t('button.SAVE_AND_CONTINUE')
    //     ? 'Created Successfull!'
    //     : 'Updated Successfull!';
    // setTimeout(() => {
    //   Toast({ message });
    //   form.resetFields();
    //   setLoadings(initialLoadings);
    // }, constant.REQUEST_TIMEOUT);
  };

  const handleSetLoadings = (key) => {
    setLoadings((loadings) => {
      const newLoadings = { ...loadings };
      newLoadings[key] = true;
      return newLoadings;
    });
  };
  const onFinish = (values) => {
    // const getUserId = {
    //   user_id: localStorage.getItem('user-id'),
    // };
    // const dayOffList = {};
    // dayOffList.days_off_lists = values.days_off_lists.map(function (
    //   element,
    //   key,
    // ) {
    //   return {
    //     index: key.length,
    //     vacation_day: moment(element.vacation_day).format(constant.FORMAT_DATE),
    //     session_day_id: element.session_day_id,
    //     vacation_type_id: element.vacation_type_id,
    //   };
    // });
    // const newData = { ...values, ...dayOffList, ...getUserId };
    // try {
    //   handleSetLoadings(value);
    //   createDayOff(newData).then((response) => {
    //     if (response !== RESPONSE_CODE[409]) handleLoading(value);
    //     else {
    //       console.log('errors', response);
    //       handleError();
    //     }
    //   });
    // } catch (error) {
    //   return error;
    // }
  };
  const handleError = () => {
    if (localStorage && localStorage.getItem('values')) {
      const dataInput = JSON.parse(localStorage.getItem('values'));
      for (let i = 0; i < dataInput.days_off_lists.length; i++) {
        form.setFields([
          {
            name: ['days_off_lists', i, 'vacation_day'],
            errors: [RESPONSE_CODE[409]],
          },
          {
            name: ['days_off_lists', i, 'session_day_id'],
            errors: [RESPONSE_CODE[409]],
          },
        ]);
      }
    }
  };
  const onCancel = () => {
    localStorage.removeItem('values');
    setVisible(false);
  };
  return (
    <div className="dayoff-regist-input">
      <h2 className="list-title">{t('button.addNewDayOff')}</h2>
      <ConfirmPopupCommon
        title="Recover data  "
        content="Do you want to recover data"
        visible={visible}
        handleCancel={onCancel}
        handleOk={handleOk}
      />
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
            size={componentSize}
            onFinish={onFinish}
            initialValues={{
              days_off_lists: [''],
            }}
            onValuesChange={handleChangeValue}
            form={form}
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

            <Form.Item label={constant.LABEL.DAY} name="days_off">
              <Form.List name="days_off_lists">
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      {fields.map((field, index) => {
                        return (
                          <Row>
                            <div className="day-of-regist-input-last-form">
                              <Space
                                key={field.key}
                                style={{ display: 'flex', marginBottom: 8 }}
                                align="baseline"
                              >
                                <Col>
                                  <Form.Item
                                    {...field}
                                    name={[field.name, 'vacation_day']}
                                    fieldKey={[field.fieldKey, 'vacation_day']}
                                    rules={[
                                      {
                                        required: true,
                                        message: 'vacation day is require !!',
                                      },
                                    ]}
                                  >
                                    <DatePicker
                                      placeholder={constant.FORMAT_DATE}
                                      format={constant.FORMAT_DATE}
                                      style={{ width: 200 }}
                                    />
                                  </Form.Item>
                                </Col>
                                <Col>
                                  <Form.Item
                                    {...field}
                                    name={[field.name, 'session_day_id']}
                                    fieldKey={[
                                      field.fieldKey,
                                      'session_day_id',
                                    ]}
                                    rules={[
                                      {
                                        required: true,
                                        message: 'session day is require !!',
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
                                </Col>
                                <Col>
                                  <Form.Item
                                    {...field}
                                    name={[field.name, 'vacation_type_id']}
                                    fieldKey={[
                                      field.fieldKey,
                                      'vacation_type_id',
                                    ]}
                                    rules={[
                                      {
                                        required: true,
                                        message: 'vacation type is require !!',
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
                                </Col>
                                {fields.length > 1 ? (
                                  <Button onClick={() => remove(field.name)}>
                                    {t('button.remove')}
                                  </Button>
                                ) : null}
                              </Space>
                            </div>
                            {/* {handleError()} */}
                          </Row>
                        );
                      })}
                      <Form.Item>
                        <Button onClick={() => add()} disabled={visibleAdd}>
                          {t('button.add')}
                        </Button>
                      </Form.Item>
                    </div>
                  );
                }}
              </Form.List>
            </Form.Item>

            <Form.Item
              label={constant.LABEL.REASONS}
              name="reasons"
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
              <Button
                type="primary"
                htmlType="submit"
                loading={loadings[t('button.SUBMIT')]}
                value={t('button.SUBMIT')}
                onClick={handleLoading}
              >
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
