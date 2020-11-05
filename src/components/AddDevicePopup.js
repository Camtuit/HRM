import React, { useState } from 'react';
import { Modal, Button, DatePicker, Form, Input } from 'antd';

function AddDevicePopup() {
  const [visible, setVisible] = useState(false);

  function showModal() {
    setVisible(true);
  }

  function handleOk(event) {
    setVisible(false);
  }

  function handleCancel() {
    setVisible(false);
  }

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add device
      </Button>
      <Modal
        title="Add Device"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
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
