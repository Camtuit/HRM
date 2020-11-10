import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Select, DatePicker, Row, Col } from 'antd';
import '../../css/SkillSearchBox.css';

import { FormProvider } from 'antd/lib/form/context';
import constant from '../../constants/htmlConstants';

function SkillSearchBox({ setCurrentName, setCurrentPage }) {
  const [componentSize, setComponentSize] = useState('default');
  const [search, setSearch] = useState('');
  const [form] = Form.useForm();
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    // setCurrentPage(0);
    setCurrentName(search);
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
            <Form.Item name="search" label={constant.LABEL.NAME}>
              <Input onChange={handleChange} placeholder="Skill name" />
            </Form.Item>

            <div className="user-search-box-button">
              <Button onClick={handleCancel}>{constant.BUTTON.CANCEL}</Button>
              <Button type="primary" onClick={handleSearch}>
                {constant.BUTTON.SEARCH}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default SkillSearchBox;
