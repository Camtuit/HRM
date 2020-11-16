import React, { useState, useRef } from 'react';
import { Form, Input, Button, Select, DatePicker, Row, Col } from 'antd';

function UserSearchBox() {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div className="search-box user-search-box">
      <Form
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Row>
          <Col span={9}>
            <Form.Item
              className="search-box_item search-box_item--name"
              label="Name"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={3}></Col>
          <Col span={6}>
            <Form.Item
              className="search-box_item search-box_item--status user-status-input"
              label="Contract Status"
            >
              <Select>
                <Select.Option value="demo">Signed</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <Form.Item
              className="search-box_item search-box_item--date"
              label="Contract"
            >
              <DatePicker className="start-date" />
              <span> to </span>
              <DatePicker className="end-date" />
            </Form.Item>
          </Col>
          <Col span={2}></Col>
          <Col span={6}>
            <Form.Item
              className="search-box_item search-box_item--choose"
              label="Quick choose"
            >
              <Select>
                <Select.Option value="demo">Quick</Select.Option>
                <Select.Option value="demo">Normal</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <div className="search-box-button">
          <div>
            <Button>Cancel</Button>
            <Button type="primary">Search</Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default UserSearchBox;
