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
import axios from 'axios';
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
  const [isAddNewButtonEnable, setIsAddNewButtonEnable] = useState(false);
  const [isDayOffDuplicated, setIsDayOffDuplicated] = useState(false);
  const [emailError, setEmailError] = useState('');
  const history = useHistory();
  const [form] = Form.useForm();
  const initialLoadings = {
    [t('button.SUBMIT')]: false,
  };
  const [loadings, setLoadings] = useState(initialLoadings);

  const handleCancel = () => {
    history.push('/profile/details');
  };
  function disabledDate(current) {
    if (current < moment(Date.now())) {
      return true;
    }
    return false;
  }
  const handleChangeValue = (changedValues, allValues) => {
    localStorage.setItem('values', JSON.stringify(allValues));
    const dayOffList = allValues.days_off_lists;
    const lastDayOff = dayOffList[dayOffList.length - 1];
    if (!lastDayOff) {
      setIsAddNewButtonEnable(false);
    } else if (JSON.stringify(lastDayOff) === '{}') {
      setIsAddNewButtonEnable(true);
    } else if (
      lastDayOff.session_day_id &&
      lastDayOff.vacation_day &&
      lastDayOff.vacation_type_id
    ) {
      setIsAddNewButtonEnable(true);
    } else {
      setIsAddNewButtonEnable(false);
    }
  };

  const handleOk = () => {
    if (localStorage && localStorage.getItem('values')) {
      const dataInput = JSON.parse(localStorage.getItem('values'));
      const lastDayOff =
        dataInput.days_off_lists[dataInput.days_off_lists.length - 1];
      const dayOffList = dataInput.days_off_lists;
      const count = lastDayOff ? dayOffList.length : dayOffList.length - 1;
      form.setFieldsValue({
        po_name: dataInput.po_name,
        po_email: dataInput.po_email,
        reasons: dataInput.reasons,
        notes: dataInput.notes,
      });

      for (let i = 0; i < count; i += 1) {
        const fieldUpdates = [
          {
            name: ['days_off_lists', i, 'session_day_id'],
            value: dayOffList[i].session_day_id,
          },
          {
            name: ['days_off_lists', i, 'vacation_type_id'],
            value: dayOffList[i].vacation_type_id,
          },
        ];
        if (dayOffList[i].vacation_day) {
          fieldUpdates.push({
            name: ['days_off_lists', i, 'vacation_day'],
            value: moment(dayOffList[i].vacation_day),
          });
        }
        form.setFields(fieldUpdates);
      }
      if (!lastDayOff) {
        setIsAddNewButtonEnable(true);
      } else if (
        lastDayOff.session_day_id !== undefined &&
        lastDayOff.vacation_day !== undefined &&
        lastDayOff.vacation_type_id !== undefined
      ) {
        setIsAddNewButtonEnable(true);
      } else {
        setIsAddNewButtonEnable(false);
      }
      setVisible(false);
    }
  };
  const handleLoading = (value) => {
    const message =
      value === t('button.SUBMIT') || value === t('button.SAVE_AND_CONTINUE')
        ? 'Created Successfull!'
        : 'Updated Successfull!';
    setTimeout(() => {
      Toast({ message });
      form.resetFields();
      setLoadings(initialLoadings);
    }, constant.REQUEST_TIMEOUT);
  };

  const handleSetLoadings = (key) => {
    setLoadings((loadings) => {
      const newLoadings = { ...loadings };
      newLoadings[key] = true;
      return newLoadings;
    });
  };
  const onFinish = (value) => {
    const dayOffList = value.days_off_lists;
    const findDuplicates = (arr) =>
      arr.filter((item, index) => arr.indexOf(item) !== index);
    const vacationDayList = dayOffList.map((item) => {
      return moment(item.vacation_day).format('DD/MM/YYYY');
    });
    if (dayOffList.length > 1 && findDuplicates(vacationDayList).length > 0) {
      setIsDayOffDuplicated(true);
    } else setIsDayOffDuplicated(false);

    const getUserId = {
      user_id: localStorage.getItem('user-id'),
    };
    const dayOff = {};
    dayOff.days_off_lists = value.days_off_lists.map(function (element, key) {
      return {
        index: key.length,
        vacation_day: moment(element.vacation_day).format(constant.FORMAT_DATE),
        session_day_id: element.session_day_id,
        vacation_type_id: element.vacation_type_id,
      };
    });
    const newData = { ...value, ...dayOff, ...getUserId };
    try {
      handleSetLoadings(value);
      axios
        .post('http://api-java.dev-hrm.nals.vn/api/days-off', newData)
        .then((res) => {
          if (res !== RESPONSE_CODE[409]) {
            handleLoading(value);
            localStorage.removeItem('values');
          }
        })
        .catch((e) => {
          const errorEmail = e.response.data.meta.errors.po_email;
          if (errorEmail) {
            handleEmailError(errorEmail);
          }
          const convert = convertObjErrToArray(e.response.data.meta.errors);
          if (convert?.length > 0) handleError(convert);
          const errorRemaningDay = e.response;
          console.log(errorRemaningDay);
        });
    } catch (error) {
      return error;
    }
  };

  function convertObjErrToArray(errors) {
    const newArray = [];
    const objArr = Object.keys(errors).map((key) => [key, errors[key]]);
    let j = 0;
    for (let i = 0; i < objArr.length; i += 2) {
      const indexOf = objArr[j][0].split('.')[1];
      if (indexOf) {
        newArray.push([
          indexOf,
          {
            sessDay: errors[`days_off_lists.${indexOf}.session_day_id`],
            vacationDay: errors[`days_off_lists.${indexOf}.vacation_day`],
            vacationType: errors[`days_off_lists.${indexOf}`],
          },
        ]);
        j++;
      }
    }
    return newArray;
  }
  const handleEmailError = (errorEmail) => {
    form.setFields([
      {
        name: 'po_email',
        errors: [errorEmail?.message || 'email is not valid'],
      },
    ]);
  };
  const handleError = (convertErr, mailErr) => {
    setLoadings(initialLoadings);
    if (localStorage && localStorage.getItem('values')) {
      for (let i = 0; i < convertErr.length; i++) {
        form.setFields([
          {
            name: ['days_off_lists', Number(convertErr[i][0]), 'vacation_day'],
            errors: [`${convertErr[i][1].vacationDay.message}`],
          },
          {
            name: [
              'days_off_lists',
              Number(convertErr[i][0]),
              'session_day_id',
            ],
            errors: [`${convertErr[i][1].sessDay.message}`],
          },
          {
            name: [
              'days_off_lists',
              Number(convertErr[i][0]),
              'vacation_type_id',
            ],
            errors: [`${convertErr[i][1].message}`],
          },
        ]);
      }
    }
  };
  const onCancel = () => {
    localStorage.removeItem('values');
    setVisible(false);
  };
  const handleSubmit = (event) => {
    const valueButton = event.target.value;
    form
      .validateFields()
      .then(() => {
        onFinish(valueButton);
      })
      .catch((errorInfo) => {
        return errorInfo;
      });
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

            <Form.Item label={constant.LABEL.DAY}>
              <Form.List name="days_off_lists">
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      {fields.map((field, index) => {
                        return (
                          <Row key={index}>
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
                                      disabledDate={disabledDate}
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
                          </Row>
                        );
                      })}
                      <Form.Item>
                        {isDayOffDuplicated && (
                          <p style={{ color: 'red' }}>Duplicate</p>
                        )}
                        <Button
                          onClick={() => add()}
                          disabled={!isAddNewButtonEnable}
                        >
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
                onClick={handleSubmit}
                value={t('button.SUBMIT')}
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
