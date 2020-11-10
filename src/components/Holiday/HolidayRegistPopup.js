/* eslint-disable consistent-return */
import { Button, DatePicker, Form, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import moment from 'moment';

import constant from '../../constants/htmlConstants';
import usePost from '../../apis/usePost';
import usePut from '../../apis/usePut';
import types from '../../constants/apiResourceTypes';
import '../../css/HolidayRegistPopup.css';

function HolidayRegistPopup({
  active,
  value,
  handleTogglePopupAdd = () => {},
}) {
  const [postHoliday, apiStatus] = usePost(types.HOLIDAYS);
  const [putHoliday] = usePut(types.HOLIDAYS);
  const [holidayDate, setHolidayDate] = useState();
  const [notes, setNotes] = useState();
  const [form] = Form.useForm();
  useEffect(() => {
    if (value !== undefined) {
      setHolidayDate(value.date);
      setNotes(value.notes);
      form.setFieldsValue({
        date: moment(value.date, 'DD-MM-YYYY'),
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
          date: holidayDate.format('YYYY-MM-DD'),
          notes,
          updated_by: null,
        };
        try {
          const res = await postHoliday(newHoliday);
          if (res.data !== null) {
            form.resetFields();
            handleTogglePopupAdd();
            setHolidayDate('');
            setNotes('');
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
          date: holidayDate.format('DD/MM/YYYY'),
          notes,
          updated_by: null,
        };
        try {
          const res = await postHoliday(newHoliday);
          if (res.data !== null) {
            form.resetFields();
            setHolidayDate('');
            setNotes('');
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
        .then(async () => {
          const newHoliday = {
            id: value ? value.id : '',
            date: holidayDate,
            notes,
            updated_by: null,
          };
          try {
            const res = await putHoliday(newHoliday);
            if (res.data !== null) {
              form.resetFields();
              handleTogglePopupAdd();
              setHolidayDate('');
              setNotes('');
            }
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
    handleTogglePopupAdd();
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
