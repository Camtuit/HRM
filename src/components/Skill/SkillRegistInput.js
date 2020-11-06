import React, { useState } from 'react';
import { Modal, Button, DatePicker, Form, Input } from 'antd';
import '../../css/SkillRegistInput.css';
import constant from '../../constants/constants';

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
      <div className="skill-regist-button">
        <h2>Skill list</h2>
        <Button type="primary" onClick={showModal}>
          {constant.BUTTON.ADD}
        </Button>
      </div>
      <Modal
        title={constant.BUTTON.ADD}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Save & Continue"
        cancelText="Save & Close"
      >
        <Form
          layout={constant.LAYOUT.HORIZONTAL}
          labelCol={constant.LAYOUT_ERROR_TEXT.labelCol}
          wrapperCol={constant.LAYOUT_ERROR_TEXT.wrapperCol}
        >
          <Form.Item label={constant.LABEL.NAME}>
            <Input placeholder="Skill name" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default SkillRegistInput;
