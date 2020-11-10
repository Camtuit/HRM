/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../css/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
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

  const onFinish = (values) => {};

  const onFinishFailed = (errorInfo) => {};

  // function onValue(changedValues, allValues) {
  //   console.log(allValues, changedValues);
  // }

  // function onChange() {
  //   if (isRemember === true) {
  //     // localStorage.setItem('email', email);
  //     // localStorage.setItem('passWord', passWord);
  //     dispatch(forgetMe());
  //   } else {
  //     // localStorage.removeItem('email');
  //     // localStorage.removeItem('passWord');

  //     dispatch(rememberMe());
  //   }
  // }

  function onSubmit(event) {
    event.preventDefault();
    const data = {
      email,
      password: passWord,
    };

    axios
      .post(' http://api-php.dev-hrm.nals.vn/api/auth/login', data)
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.meta.access_token);
        history.push('/users');
      })
      .catch((err) => {
        setIsPasswordCorrect(false);
        console.log(err);
      });
  }
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
            <Input
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              defaultValue={localStorage.getItem('email')}
            />
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
            <Input.Password
              placeholder="Password"
              onChange={(event) => setPassWord(event.target.value)}
              defaultValue={localStorage.getItem('passWord')}
            />
          </Form.Item>

          <Form.Item
            {...tailLayout}
            className="form-item-remember"
            name="remember"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <div className="login-form-button">
            <Button type="primary" htmlType="submit" onClick={onSubmit}>
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
