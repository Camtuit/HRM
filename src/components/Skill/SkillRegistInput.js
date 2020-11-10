import { Button, DatePicker, Form, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { togglePopup } from '../../actions/utilsAction';
import constant from '../../constants/htmlConstants';
import { callApi } from '../../apis/axiosService';
import '../../css/HolidayRegistPopup.css';

function SkillRegistInput(props) {
  const { active, value } = props;
  const [skillName, setSkillName] = useState('');
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    if (value !== undefined) {
      setSkillName(value.name);
      form.setFieldsValue({
        skill: value.name,
      });
    }
  }, [value, form]);
  const handleChangeSkillName = (e) => {
    setSkillName(e.target.value);
  };
  const handleSaveAndQuit = () => {
    form
      .validateFields()
      .then(() => {
        callApi({
          url: '/skills',
          method: 'POST',
          data: {
            name: skillName,
          },
        })
          .then((res) => {
            if (res.data !== null) {
              form.resetFields();
              dispatch(togglePopup());
              setSkillName('');
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
          url: '/skills',
          method: 'POST',
          data: {
            name: skillName,
          },
        })
          .then((res) => {
            if (res.data !== null) {
              form.resetFields();
              setSkillName('');
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
  const handleEditSkill = (id) => {};
  const handleCancel = () => {
    form.resetFields();
    setSkillName('');
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
                <Button
                  htmlType="submit"
                  type="primary"
                  onClick={handleEditSkill}
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
            name="skill"
            label={constant.LABEL.NAME}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={handleChangeSkillName} placeholder="Skill name" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default SkillRegistInput;
