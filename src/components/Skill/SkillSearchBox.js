import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, DatePicker, Row, Col } from 'antd';
import '../../css/SkillSearchBox.css';
import { useTranslation } from 'react-i18next';
import constant from '../../constants/htmlConstants';

function SkillSearchBox({ setCurrentName, setCurrentPage }) {
  const [componentSize, setComponentSize] = useState('default');
  const [search, setSearch] = useState('');
  const [form] = Form.useForm();
  const { t, i18n } = useTranslation();
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    setCurrentName(search);
    setCurrentPage(0);
  };
  const handleCancel = () => {
    form.resetFields();
    setCurrentName('');
    setSearch('');
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
                onChange={handleChange}
                placeholder={t('Skill.NAME_SKILL')}
              />
            </Form.Item>

            <div
              style={{ marginLeft: '0.8rem' }}
              className="user-search-box-button"
            >
              <Button onClick={handleCancel} style={{ marginRight: '0.8rem' }}>
                {t('button.cancel')}
              </Button>
              <Button type="primary" onClick={handleSearch}>
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
