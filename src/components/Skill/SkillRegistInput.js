/* eslint-disable consistent-return */
import { Button, Form, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  callLoader,
  closeLoader,
  togglePopup,
} from '../../actions/utilsAction';
import constant from '../../constants/htmlConstants';
import '../../css/HolidayRegistPopup.css';
import Alert from '../commons/AlertCommon';
import { createSkill, editSkillById } from '../../apis/skillApi';
import { RESPONSE_CODE } from '../../constants/errorText';
import Toast from '../commons/ToastCommon';

function SkillRegistInput({ active, value }) {
  const { t, i18n } = useTranslation();
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
  const handleRequestAPISaveandQuit = () => {
    const newSkill = {
      name: skillName,
    };
    try {
      dispatch(callLoader());
      createSkill(newSkill).then((response) => {
        if (response !== RESPONSE_CODE[409]) {
          setTimeout(() => {
            dispatch(closeLoader());
            Toast({ message: 'Created Successfull!' });
            form.resetFields();
            dispatch(togglePopup());
            setSkillName('');
          }, constant.REQUEST_TIMEOUT);
        } else {
          dispatch(closeLoader());
          form.setFields([
            {
              name: 'skill',
              errors: [RESPONSE_CODE[409]],
            },
          ]);
        }
      });
    } catch (error) {
      return error;
    }
  };
  const handleRequestAPISaveAndContinue = () => {
    const newSkill = {
      name: skillName,
    };
    try {
      dispatch(callLoader());
      createSkill(newSkill).then((response) => {
        if (response !== RESPONSE_CODE[409]) {
          setTimeout(() => {
            dispatch(closeLoader());
            Toast({ message: 'Created Successfull!' });
            form.resetFields();
            setSkillName('');
          }, constant.REQUEST_TIMEOUT);
        } else {
          dispatch(closeLoader());
          form.setFields([
            {
              name: 'skill',
              errors: [RESPONSE_CODE[409]],
            },
          ]);
        }
      });
    } catch (error) {
      return error;
    }
  };
  const handleRequestAPIEditSkill = () => {
    const skill = {
      name: skillName,
    };
    try {
      dispatch(callLoader());
      editSkillById(value.id, skill).then((response) => {
        if (response !== RESPONSE_CODE[409]) {
          setTimeout(() => {
            dispatch(closeLoader());
            Toast({ message: 'Updated Successfull!' });
            form.resetFields();
            dispatch(togglePopup());
            setSkillName('');
          }, constant.REQUEST_TIMEOUT);
        } else {
          dispatch(closeLoader());
          form.setFields([
            {
              name: 'skill',
              errors: [RESPONSE_CODE[409]],
            },
          ]);
        }
      });
    } catch (error) {
      return error;
    }
  };
  const handleChangeSkillName = (e) => {
    setSkillName(e.target.value);
  };
  const handleSaveAndQuit = () => {
    form
      .validateFields()
      .then(() => {
        handleRequestAPISaveandQuit();
      })
      .catch((errorInfo) => {
        return errorInfo;
      });
  };

  const handleSaveAndContinue = () => {
    form
      .validateFields()
      .then(() => {
        handleRequestAPISaveAndContinue();
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
          handleRequestAPIEditSkill();
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
                  {t('button.SAVE_AND_QUIT')}
                </Button>,
                <Button
                  htmlType="submit"
                  type="primary"
                  onClick={handleSaveAndContinue}
                >
                  {t('button.SAVE_AND_CONTINUE')}
                </Button>,
              ]
            : [
                <Button
                  htmlType="submit"
                  type="primary"
                  onClick={handleEditSkill}
                >
                  {t('button.SUBMIT')}
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
            label={t('LABEL.NAME')}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              onChange={handleChangeSkillName}
              placeholder={t('Skill.NAME_SKILL')}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default SkillRegistInput;
