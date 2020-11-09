import { DatePicker, Form, Input, Modal, Tooltip } from 'antd';
import React, { useState } from 'react';
import constant from '../../constants/htmlConstants';
import '../../css/HolidayRegistPopup.css';

function HolidayRegistPopup({ visible }) {
  const handleOk = (event) => {
    // setVisible(false);
  };

  const handleCancel = () => {
    // setVisible(false);
  };
  return (
    <div className="holiday-regist-button">
      {/* <Tooltip title={constant.TOOLTIP.TITLE.EDIT}>
        <span>
          <i
            onClick={showModal}
            class="fas fa-edit holiday-popup-common-icon"
          ></i>
        </span>
      </Tooltip> */}
      <Modal
        title="Registration Holiday"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={constant.BUTTON.SUBMIT}
        cancelText={constant.BUTTON.CANCEL}
      >
        <Form
          layout="horizontal"
          labelCol={{ span: constant.LABEL_COL.LABEL_COL_8 }}
          wrapperCol={{ span: constant.WRAPPER_COL.WRAPPER_COL_12 }}
        >
          <Form.Item label={constant.LABEL.DATE}>
            <DatePicker format={constant.FORMAT_DATE} />
          </Form.Item>
          <Form.Item label={constant.LABEL.NOTES}>
            <Input placeholder={constant.LABEL.NOTES} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default HolidayRegistPopup;
