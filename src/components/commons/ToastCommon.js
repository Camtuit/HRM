import { notification } from 'antd';
import React from 'react';

function Toast({ type, message }) {
  notification.success({
    className: 'notification-style',
    message: <p>{message}</p>,
    duration: 2,
  });
}

export default Toast;
