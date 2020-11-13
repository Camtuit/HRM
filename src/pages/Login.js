/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../css/Login.css';

function Login() {
  const [isRememberMe, setIsRememberMe] = useState(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const history = useHistory();

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

  const onFinish = (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };

    axios
      .post(' http://api-php.dev-hrm.nals.vn/api/auth/login', data)
      .then((res) => {
        localStorage.setItem('token', res.data.meta.access_token);
        history.push('/users');
        if (isRememberMe === true) {
          localStorage.setItem('email', values.email);
          localStorage.setItem('password', values.password);
        } else {
          localStorage.removeItem('email', values.email);
          localStorage.removeItem('password', values.password);
        }
      })
      .catch((err) => {
        setIsPasswordCorrect(false);
      });
  };

  const onFinishFailed = (errorInfo) => {};

  const rememberMe = (event) => {
    if (event.target.checked === true) {
      setIsRememberMe(true);
    } else {
      setIsRememberMe(false);
    }
  };

  return (
    <div className="login">
      <div className="login-form">
        <h3>Human Resources Management</h3>
        <h1>NALS</h1>

        {!isPasswordCorrect && (
          <div className="login-caution">
            <p>
              Incorrect email or password.{' '}
              <i
                class="fas fa-times"
                onClick={() => setIsPasswordCorrect(true)}
              ></i>
            </p>
          </div>
        )}

        <Form
          name="login"
          {...layout}
          initialValues={{
            email: localStorage.getItem('email'),
            password: localStorage.getItem('password'),
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            className="form-item"
            name={['email']}
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
          >
            <Checkbox onChange={rememberMe}>Remember me</Checkbox>
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
