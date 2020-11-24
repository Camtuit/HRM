import React from 'react';
import { Modal } from 'antd';

function ConfirmPopupCommon({
  title,
  content,
  visible,
  handleOk,
  handleCancel,
}) {
  return (
    <div>
      <Modal
        title={title}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p style={{ textAlign: 'center' }}>{content}</p>
      </Modal>
    </div>
  );
}

export default ConfirmPopupCommon;
