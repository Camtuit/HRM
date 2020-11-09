import React, { useState, useRef } from 'react';
import { Modal, Tooltip } from 'antd';
import '../../css/RemovePopupCommon.css';

function RemovePopupCommon({ title, content, onOk }) {
  const [visible, setVisible] = useState(false);
  function showModal() {
    setVisible(true);
  }

  function handleCancel() {
    setVisible(false);
  }

  return (
    <>
      <Tooltip title="Delete">
        <span>
          <i
            class="fas fa-trash-alt remove-popup-common-icon"
            onClick={showModal}
          ></i>
        </span>
      </Tooltip>
      <Modal
        title={title}
        visible={visible}
        onOk={() => {
          onOk();
          setVisible(false);
        }}
        onCancel={handleCancel}
      >
        <p style={{ textAlign: 'center' }}>{content}</p>
      </Modal>
    </>
  );
}

export default RemovePopupCommon;
