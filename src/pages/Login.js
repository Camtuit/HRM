/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import '../css/Login.css';

function Login() {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const onFinish = (values) => {};

  const onFinishFailed = (errorInfo) => {};

  return (
    <div className="login">
      <div className="login-form">
        <h3>Human Resources Management</h3>
        <h1>NALS</h1>

        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            className="form-item"
            // label="Email"

            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },

              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            // label="Password"
            className="form-item"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            {...tailLayout}
            className="form-item-remember"
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <div className="login-form-button">
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
