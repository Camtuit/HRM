import React, { useState } from 'react';
import { Modal, Button, DatePicker, Form, Input } from 'antd';
import '../../css/SkillRegistInput.css';

function SkillRegistInput() {
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
    <div className="skill-regist-input">
      <Button type="primary" onClick={showModal}>
        Add new
      </Button>
      <Modal
        title="Add New"
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
          <Form.Item label="Name">
            <Input placeholder="Skill name" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default SkillRegistInput;
