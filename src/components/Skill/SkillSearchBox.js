import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, DatePicker, Row, Col } from 'antd';
import '../../css/SkillSearchBox.css';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import constant from '../../constants/htmlConstants';

function SkillSearchBox({ setCurrentName, setCurrentPage }) {
  const [componentSize, setComponentSize] = useState('default');
  const [search, setSearch] = useState('');
  const [form] = Form.useForm();
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    setCurrentName(search);
    setCurrentPage(0);
    history.push(`/skills?name=${search}`);
  };
  const handleCancel = () => {
    form.resetFields();
    setCurrentName('');
    setSearch('');
    history.push(`/skills`);
  };
  return (
    <div className="search-box skill-search-box">
      <Row>
        <Col span={24}>
          <Form
            labelCol={constant.LAYOUT_ERROR_TEXT.labelCol}
            wrapperCol={{
              span: 20,
            }}
            layout="inline"
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
            form={form}
          >
            <Form.Item name="search" label={t('LABEL.NAME')}>
              <Input
                id="skill-input"
                onChange={handleChange}
                placeholder={t('Skill.NAME_SKILL')}
              />
            </Form.Item>
            <div
              style={{ marginLeft: '0.8rem' }}
              className="user-search-box-button"
            >
              <Button
                onClick={handleCancel}
                id="skills-cancel-box-button"
                style={{ marginRight: '0.8rem' }}
              >
                {t('button.cancel')}
              </Button>
              <Button
                type="primary"
                onClick={handleSearch}
                id="skills-search-box-button"
              >
                {t('button.search')}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default SkillSearchBox;
