import React, { useState } from 'react';
import { Form, Input, Button, Select, DatePicker, Row, Col } from 'antd';
import '../../css/SkillSearchBox.css';

function SkillSearchBox() {
  const [componentSize, setComponentSize] = useState('default');
  const [getInput, setGetInput] = useState('');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleChange = (e) => {
    e.preventDefault();
  };
  const handleSearch = () => {};
  return (
    <div className="skill-search-box">
      <Row>
        <Col span={24}>
          <Form
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 20,
            }}
            layout="inline"
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
          >
            <Form.Item label="Name">
              <Input
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="Skill name"
              />
            </Form.Item>

            <div className="user-search-box-button">
              <Button>Cancel</Button>
              <Button type="primary" onClick={handleSearch}>
                Search
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default SkillSearchBox;
