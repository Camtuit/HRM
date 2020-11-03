import React, { useState, useRef } from 'react';
import '../css/UserSearchBox.css';
import { Form, Input, Button, Select, DatePicker } from 'antd';

function UserSearchBox() {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div className="user-search-box">
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Name">
          <Input />
        </Form.Item>

        <Form.Item label="Contract Status">
          <Select>
            <Select.Option value="demo">Signed</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Contract">
          <DatePicker />
          <span> to </span>
          <DatePicker />
        </Form.Item>

        <Form.Item label="Quick choose">
          <Select>
            <Select.Option value="demo">Quick</Select.Option>
            <Select.Option value="demo">Normal</Select.Option>
          </Select>
        </Form.Item>

        <div className="user-search-box-button">
          <Button>Cancel</Button>
          <Button type="primary">Search</Button>
        </div>
      </Form>
    </div>
  );
}

export default UserSearchBox;
