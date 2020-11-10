import { Button, DatePicker, Form, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { togglePopup } from '../../actions/utilsAction';
import constant from '../../constants/htmlConstants';
import { callApi } from '../../apis/axiosService';
import '../../css/HolidayRegistPopup.css';

function SkillRegistInput(props) {
  const { active, value } = props;
  const [skillDate, setSkillDate] = useState('');
  const [name, setName] = useState('');
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleChangeDatePicker = (date) => {
    setSkillDate(date);
  };
  const handleChangeNote = (e) => {
    setName(e.target.value);
  };
  const handleSaveAndQuit = () => {
    form
      .validateFields()
      .then(() => {
        callApi({
          url: '/skills',
          method: 'POST',
          data: {
            name,
            updated_by: skillDate.format('YYYY-MM-DDT HH:mm:ss.sssZ'),
          },
        })
          .then((res) => {
            if (res.data !== null) {
              form.resetFields();
              dispatch(togglePopup());
              setSkillDate('');
              setName('');
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
            date: skillDate.format('YYYY-MM-DD'),
            name,
            updated_by: skillDate.format('YYYY-MM-DDT HH:mm:ss.sssZ'),
          },
        })
          .then((res) => {
            if (res.data !== null) {
              form.resetFields();
              setSkillDate('');
              setName('');
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
    setSkillDate('');
    setName('');
    dispatch(togglePopup());
  };
  return (
    <div className="skill-regist-button">
      <Modal
        title={value === undefined ? 'Add New Skill' : 'Edit Skill'}
        visible={active}
        onCancel={handleCancel}
        footer={
          value === undefined
            ? [
                <Button htmlType="submit" onClick={handleSaveAndContinue}>
                  {constant.BUTTON.SAVE_AND_CONTINUE}
                </Button>,
                <Button
                  htmlType="submit"
                  type="primary"
                  onClick={handleSaveAndQuit}
                >
                  {constant.BUTTON.SAVE_AND_QUIT}
                </Button>,
              ]
            : [
                <Button
                  htmlType="submit"
                  type="primary"
                  onClick={handleSaveAndQuit}
                >
                  {constant.BUTTON.SAVE_AND_QUIT}
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
          <Form.Item label={constant.LABEL.NAME}>
            <Input placeholder="Skill name" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default SkillRegistInput;
