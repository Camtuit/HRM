/* eslint-disable consistent-return */
import { Button, DatePicker, Form, Input, Modal, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import axios from 'axios';
import constant from '../../constants/htmlConstants';
import usePost from '../../apis/usePost';
import usePut from '../../apis/usePut';
import types from '../../constants/apiResourceTypes';
import '../../css/HolidayRegistPopup.css';
import { togglePopup } from '../../actions/utilsAction';
import Alert from '../commons/AlertCommon';

function HolidayRegistPopup({ active, value, setCurrentYear, setCurrentPage }) {
  const [postHoliday, apiStatus] = usePost(types.HOLIDAYS);
  const [putHoliday] = usePut(types.HOLIDAYS);
  const [holidayDate, setHolidayDate] = useState();
  const [notes, setNotes] = useState();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const handleTogglePopup = () => {
    dispatch(togglePopup());
  };
  const handleToggleAlertSucces = () => {
    notification.success({
      className: 'notification-style',
      message: <p>Oke</p>,
      duration: 2,
    });
  };

  useEffect(() => {
    if (value !== undefined) {
      setHolidayDate(value.date);
      setNotes(value.notes);
      form.setFieldsValue({
        date: moment(value.date, 'MM/DD/YYYY'),
        notes: value.notes,
      });
    }
  }, [value, form]);

  const handleChangeDatePicker = (date) => {
    setHolidayDate(date);
  };
  const handleChangeNote = (e) => {
    setNotes(e.target.value);
  };
  const handleSaveAndQuit = async () => {
    form
      .validateFields()
      .then(async () => {
        const newHoliday = {
          date: holidayDate.format('MM/DD/YYYY'),
          notes,
          updated_by: null,
        };
        try {
          const res = await postHoliday(newHoliday);
          if (res.type === 'CREATE_HOLIDAYS_SUCCESS') {
            setCurrentYear('2020');
            setCurrentPage('');
            form.resetFields();
            handleToggleAlertSucces();
            handleTogglePopup();
            setHolidayDate('');
            setNotes('');
          } else {
            Alert({
              type: 'ERROR',
              title: 'Error',
              content: 'Date already exists',
            });
          }
        } catch (error) {
          return error;
        }
      })
      .catch((errorInfo) => {
        return errorInfo;
      });
  };
  const handleSaveAndContinue = () => {
    form
      .validateFields()
      .then(async () => {
        const newHoliday = {
          date: holidayDate.format('MM/DD/YYYY'),
          notes,
          updated_by: null,
        };
        try {
          const res = await postHoliday(newHoliday);
          if (res.type === 'CREATE_HOLIDAYS_SUCCESS') {
            form.resetFields();
            setCurrentYear('2020');
            setCurrentPage('');
            setHolidayDate('');
            setNotes('');
          } else {
            Alert({
              type: 'ERROR',
              title: 'Error',
              content: 'Date already exists',
            });
          }
        } catch (error) {
          return error;
        }
      })
      .catch((errorInfo) => {
        return errorInfo;
      });
  };
  const handleEditHoliday = (values) => {
    if (value !== undefined) {
      form
        .validateFields()
        .then(() => {
          const newHoliday = {
            date: value.date ?? holidayDate.format('MM/DD/YYYY'),
            notes,
            updated_by: null,
          };
          try {
            axios({
              method: 'PUT',
              url: ` http://api-java.dev-hrm.nals.vn/api/holidays/${value.id}`,
              data: newHoliday,
            })
              .then((res) => {
                form.resetFields();
                setCurrentPage('');
                setCurrentYear('');
                handleTogglePopup();
                setHolidayDate('');
                setNotes('');
              })
              .catch((err) => {
                return err;
              });
          } catch (error) {
            return error;
          }
        })
        .catch((errorInfo) => {
          return errorInfo;
        });
    }
  };
  const handleCancel = () => {
    form.resetFields();
    setHolidayDate('');
    setNotes('');
    handleTogglePopup();
  };
  return (
    <div className="holiday-regist-button">
      <Modal
        title={value === undefined ? 'Add New Holiday' : 'Edit Holiday'}
        visible={active}
        onCancel={handleCancel}
        footer={
          value === undefined
            ? [
                <Button htmlType="submit" onClick={handleSaveAndQuit}>
                  {constant.BUTTON.SAVE_AND_QUIT}
                </Button>,
                <Button
                  htmlType="submit"
                  type="primary"
                  onClick={handleSaveAndContinue}
                >
                  {constant.BUTTON.SAVE_AND_CONTINUE}
                </Button>,
              ]
            : [
                <Button htmlType="submit" onClick={handleCancel}>
                  {constant.BUTTON.CANCEL}
                </Button>,
                <Button
                  htmlType="submit"
                  type="primary"
                  onClick={handleEditHoliday}
                >
                  {constant.BUTTON.SUBMIT}
                </Button>,
              ]
        }
      >
        <Form
          layout="horizontal"
          labelCol={{ span: constant.LABEL_COL.LABEL_COL_8 }}
          wrapperCol={{ span: constant.WRAPPER_COL.WRAPPER_COL_12 }}
          form={form}
          onFinish={handleSaveAndQuit}
        >
          <Form.Item
            name="date"
            label={constant.LABEL.DATE}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker
              onChange={handleChangeDatePicker}
              format={constant.FORMAT_DATE}
            />
          </Form.Item>
          <Form.Item
            name="notes"
            label={constant.LABEL.NOTES}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              onChange={handleChangeNote}
              placeholder={constant.LABEL.NOTES}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default HolidayRegistPopup;
