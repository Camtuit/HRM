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
        span: 12,
        },
    };
    const tailLayout = {
        wrapperCol: {
        offset: 8,
        span: 16,
        },
    };
  
    const onFinish = values => {
      };
    
    const onFinishFailed = errorInfo => {
    };

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
              label="Email"
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
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
}

export default Login




 
    