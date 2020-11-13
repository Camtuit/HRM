/* eslint-disable consistent-return */
import { Button, Form, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import axios from 'axios';
import { togglePopup } from '../../actions/utilsAction';
import constant from '../../constants/htmlConstants';
import '../../css/HolidayRegistPopup.css';
import usePost from '../../apis/usePost';
import usePut from '../../apis/usePut';
import types from '../../constants/apiResourceTypes';
import Alert from '../commons/AlertCommon';

function SkillRegistInput(props) {
  const { active, value, setCurrentName, setCurrentPage } = props;
  const [postSkill, apiStatus] = usePost(types.SKILLS);
  const [putSkill] = usePut(types.SKILLS);
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
      .then(async () => {
        const newSkill = {
          name: skillName,
        };
        try {
          const res = await postSkill(newSkill);
          if (res.type === 'CREATE_SKILLS_SUCCESS') {
            form.resetFields();
            dispatch(togglePopup());
            setSkillName('');
          } else {
            Alert({
              type: 'ERROR',
              title: 'Error',
              content: 'Skill already exists',
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
        const newSkill = {
          name: skillName,
        };
        try {
          const res = await postSkill(newSkill);
          if (res.type === 'CREATE_SKILLS_SUCCESS') {
            form.resetFields();
            setSkillName('');
          } else {
            Alert({
              type: 'ERROR',
              title: 'Error',
              content: 'Skill already exists',
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
  const handleEditSkill = () => {
    if (value !== undefined) {
      form
        .validateFields()
        .then(() => {
          axios({
            method: 'PUT',
            url: ` http://api-java.dev-hrm.nals.vn/api/skills/${value.id}`,
            data: {
              name: skillName,
            },
          })
            .then((res) => {
              if (res.data !== null) {
                form.resetFields();
                dispatch(togglePopup());
                setSkillName('');
                setCurrentName('');
              }
            })
            .catch((err) => {
              Alert({
                type: 'ERROR',
                title: 'Error',
                content: 'Skill already exists',
              });
              return err;
            });
        })
        .catch((errorInfo) => {
          return errorInfo;
        });
    }
  };
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
