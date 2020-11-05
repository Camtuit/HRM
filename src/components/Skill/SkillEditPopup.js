import React, { useState } from 'react';
import { Modal, Button, DatePicker, Form, Input, Tooltip } from 'antd';
import '../../css/SkillEditPopup.css';

function SkillEditPopup() {
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
      <Tooltip title="Edit">
        <span>
          <i
            onClick={showModal}
            class="fas fa-edit skill-popup-common-icon"
          ></i>
        </span>
      </Tooltip>
      <Modal
        title="Update name"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Save"
        cancelText="Cancel"
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

export default SkillEditPopup;
