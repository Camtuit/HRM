import React, { useState } from 'react';
import { Modal, Button, DatePicker, Form, Input, Tooltip } from 'antd';
import '../../css/SkillEditPopup.css';
import constant from '../../constants/constants';

function SkillEditPopup({ record }) {
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
        title="Edit name"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Save"
        cancelText="Cancel"
      >
        <Form
          layout={constant.LAYOUT.HORIZONTAL}
          labelCol={constant.LAYOUT_ERROR_TEXT.labelCol}
          wrapperCol={constant.LAYOUT_ERROR_TEXT.wrapperCol}
        >
          <Form.Item label={constant.LABEL.NAME}>
            <Input defaultValue={record.name} placeholder="Skill name" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default SkillEditPopup;
