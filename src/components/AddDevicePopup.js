import React, { useState } from 'react';
import { Modal, Button, DatePicker, Form, Input } from 'antd';

function AddDevicePopup({ onClickAddNew = () => {}, toggled }) {
  return (
    <div>
      <Modal
        title="Add Device"
        visible={toggled}
        onOk={() => {}}
        onCancel={onClickAddNew}
        okText="Save & Continue"
        cancelText="Save & Close"
      >
        <Form
          layout="horizontal"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 12 }}
        >
          <Form.Item label="Device name">
            <Input />
          </Form.Item>

          <Form.Item label="Serial number">
            <Input />
          </Form.Item>

          <Form.Item label="Input date">
            <DatePicker />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default AddDevicePopup;
