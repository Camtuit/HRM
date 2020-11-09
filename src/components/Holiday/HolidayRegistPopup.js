import { Button, DatePicker, Form, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { togglePopup } from '../../actions/utilsAction';
import constant from '../../constants/htmlConstants';
import { callApi } from '../../apis/axiosService';
import '../../css/HolidayRegistPopup.css';

function HolidayRegistPopup(props) {
  const { active, value } = props;
  const [holidayDate, setHolidayDate] = useState('');
  const [notes, setNotes] = useState('');
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleChangeDatePicker = (date) => {
    setHolidayDate(date);
  };
  const handleChangeNote = (e) => {
    setNotes(e.target.value);
  };
  const handleSaveAndQuit = () => {
    form
      .validateFields()
      .then(() => {
        callApi({
          url: '/holidays',
          method: 'POST',
          data: {
            date: holidayDate.format('YYYY-MM-DD'),
            notes,
            updated_by: null,
          },
        })
          .then((res) => {
            if (res.data !== null) {
              form.resetFields();
              dispatch(togglePopup());
              setHolidayDate('');
              setNotes('');
            }
          })
          .catch((err) => {
            return err;
          });
      })
      .catch((errorInfo) => {
        return errorInfo;
      });
  };
  const handleSaveAndContinue = () => {
    form
      .validateFields()
      .then(() => {
        callApi({
          url: '/holidays',
          method: 'POST',
          data: {
            date: holidayDate.format('YYYY-MM-DD'),
            notes,
            updated_by: null,
          },
        })
          .then((res) => {
            if (res.data !== null) {
              form.resetFields();
              setHolidayDate('');
              setNotes('');
            }
          })
          .catch((err) => {
            return err;
          });
      })
      .catch((errorInfo) => {
        return errorInfo;
      });
  };
  const handleCancel = () => {
    form.resetFields();
    setHolidayDate('');
    setNotes('');
    dispatch(togglePopup());
  };
  return (
    <div className="holiday-regist-button">
      <Modal
        title={value === undefined ? 'Add New Holiday' : 'Edit Holiday'}
        visible={active}
        onCancel={handleCancel}
        footer={[
          <Button htmlType="submit" onClick={handleSaveAndContinue}>
            {constant.BUTTON.SAVE_AND_CONTINUE}
          </Button>,
          <Button htmlType="submit" type="primary" onClick={handleSaveAndQuit}>
            {constant.BUTTON.SAVE_AND_QUIT}
          </Button>,
        ]}
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
              value={holidayDate}
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
              value={notes}
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
