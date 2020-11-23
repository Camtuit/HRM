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
import { createSkill, editSkillById } from '../../apis/skillApi';
import { RESPONSE_CODE } from '../../constants/errorText';
import Toast from '../commons/ToastCommon';

function SkillRegistInput({ active, value }) {
  const { t, i18n } = useTranslation();
  const initialLoadings = {
    [t('button.SAVE_AND_QUIT')]: false,
    [t('button.SAVE_AND_CONTINUE')]: false,
    [t('button.SUBMIT')]: false,
  };
  const [skillName, setSkillName] = useState('');
  const [loadings, setLoadings] = useState(initialLoadings);
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

  const handleLoading = (value) => {
    const message =
      value === t('button.SAVE_AND_QUIT') ||
      value === t('button.SAVE_AND_CONTINUE')
        ? 'Created Successfull!'
        : 'Updated Successfull!';
    const isSaveAndContinue = value === t('button.SAVE_AND_CONTINUE');
    setTimeout(() => {
      Toast({ message });
      form.resetFields();
      setSkillName('');
      setLoadings(initialLoadings);
      !isSaveAndContinue && dispatch(togglePopup());
    }, constant.REQUEST_TIMEOUT);
  };

  const handleSetLoadings = (key) => {
    setLoadings((loadings) => {
      const newLoadings = { ...loadings };
      newLoadings[key] = true;
      return newLoadings;
    });
  };

  const handleRequestAPISaveandQuit = (value) => {
    const newSkill = {
      name: skillName,
    };
    try {
      handleSetLoadings(value);
      createSkill(newSkill).then((response) => {
        if (response !== RESPONSE_CODE[409]) handleLoading(value);
        else handleExistSkill();
      });
    } catch (error) {
      return error;
    }
  };

  const handleExistSkill = () => {
    setLoadings(initialLoadings);
    form.setFields([
      {
        name: 'skill',
        errors: [RESPONSE_CODE[409]],
      },
    ]);
  };

  const handleRequestAPISaveAndContinue = (value) => {
    const newSkill = {
      name: skillName,
    };
    try {
      handleSetLoadings(value);
      createSkill(newSkill).then((response) => {
        if (response !== RESPONSE_CODE[409]) handleLoading(value);
        else handleExistSkill();
      });
    } catch (error) {
      return error;
    }
  };
  const handleRequestAPIEditSkill = (value) => {
    const skill = {
      name: skillName,
    };
    try {
      handleSetLoadings(value);
      editSkillById(value.id, skill).then((response) => {
        if (response !== RESPONSE_CODE[409]) handleLoading(value);
        else handleExistSkill();
      });
    } catch (error) {
      return error;
    }
  };
  const handleChangeSkillName = (e) => {
    setSkillName(e.target.value);
  };
  const handleSaveAndQuit = (event) => {
    const valueButton = event.target.value;
    form
      .validateFields()
      .then(() => {
        handleRequestAPISaveandQuit(valueButton);
      })
      .catch((errorInfo) => {
        return errorInfo;
      });
  };

  const handleSaveAndContinue = (event) => {
    event.stopPropagation();
    form
      .validateFields()
      .then(() => {
        handleRequestAPISaveAndContinue(event.target.value);
      })
      .catch((errorInfo) => {
        return errorInfo;
      });
  };
  const handleEditSkill = (event) => {
    if (value !== undefined) {
      form
        .validateFields()
        .then(() => {
          handleRequestAPIEditSkill(event.target.value);
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
                <Button
                  htmlType="submit"
                  onClick={handleSaveAndQuit}
                  loading={loadings[t('button.SAVE_AND_QUIT')]}
                  value={t('button.SAVE_AND_QUIT')}
                >
                  {t('button.SAVE_AND_QUIT')}
                </Button>,
                <Button
                  htmlType="submit"
                  type="primary"
                  onClick={handleSaveAndContinue}
                  loading={loadings[t('button.SAVE_AND_CONTINUE')]}
                  value={t('button.SAVE_AND_CONTINUE')}
                >
                  {t('button.SAVE_AND_CONTINUE')}
                </Button>,
              ]
            : [
                <Button
                  htmlType="submit"
                  type="primary"
                  onClick={handleEditSkill}
                  loading={loadings[t('button.SUBMIT')]}
                  value={t('button.SUBMIT')}
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
