import React, { useState } from 'react';
import { Form, Input, Button, Radio, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import '../../css/UserRegist.css';
import AvatarUpload from '../../components/AvatarUpload';
import WrapperContent from '../../components/commons/WrapperContentPage';

function UserRegist() {
  const [value, setValue] = useState(1);

  function onChange(e) {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  }
  return (
    <div className="user-regist">
      <div className="user-regist-content">
        <div className="user-regist-form">
          <div className="user-regist-form-avatar">
            <AvatarUpload />
          </div>

          <Form
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 10 }}
            layout="horizontal"
          >
            <Form.Item label="Employee Code">
              <Input placeholder="Employee Code" />
            </Form.Item>

            <Form.Item label="Full Name">
              <Input placeholder="Full Name" />
            </Form.Item>

            <Form.Item label="Email">
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item label="Phone Number">
              <Input placeholder="Phone Number" />
            </Form.Item>

            <Form.Item label="Gender">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>Male</Radio>
                <Radio value={2}>Female</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Date of Birth">
              <DatePicker />
            </Form.Item>

            <Form.Item label="Project Name">
              <Input placeholder="Project Name" />
            </Form.Item>

            <Form.Item label="Skill List">
              <Input placeholder="Skill List" />
            </Form.Item>

            <Form.Item label="Start Date">
              <DatePicker />
            </Form.Item>

            <Form.Item label="Contract Date">
              <DatePicker />
            </Form.Item>

            <Form.Item label="Contract Status">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>Signed</Radio>
                <Radio value={2}>Resigned</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Remaining Days Off">
              <Input placeholder="Remaining Days Off" />
            </Form.Item>

            <div className="user-regist-form-button">
              <Link to="/users">
                <Button>Back</Button>
              </Link>

              <Button type="primary">Save</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default UserRegist;
