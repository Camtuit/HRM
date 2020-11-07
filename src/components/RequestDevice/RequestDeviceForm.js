import { Form, Input } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { deviceSizeFixed } from '../../constants/deviceSize';

import constant from '../../constants/constants';

function RequestDeviceForm({ request = {}, spanLabelCol, spanWrapperCol }) {
  const {
    project_name,
    name,
    delivery_date,
    technical_specification,
    number,
    reason,
  } = request;
  return (
    <div className="request-device-details__form">
      <Form
        labelCol={{ span: spanLabelCol }}
        wrapperCol={{ span: spanWrapperCol }}
      >
        <Form.Item label={constant.LABEL.YOUR_PROJECT} name="projectName">
          <Input defaultValue={project_name} readOnly={!!project_name} />
        </Form.Item>
        <Form.Item label={constant.LABEL.DEVICE_NAME} name="deviceName">
          <Input defaultValue={name} readOnly={!!name} />
        </Form.Item>
        <Form.Item
          label={constant.LABEL.EXPECTED_DELIVERY_DATE}
          name="expectedDeliveryDate"
        >
          <Input defaultValue={delivery_date} readOnly={!!delivery_date} />
        </Form.Item>
        <Form.Item
          label={constant.LABEL.TECHNICAL_SPECIFICATIONS}
          name="technicalSpecification"
        >
          <Input
            defaultValue={technical_specification}
            readOnly={!!technical_specification}
          />
        </Form.Item>
        <Form.Item label={constant.LABEL.NUMBER_OF_DEVICE} name="numberDevice">
          <Input defaultValue={number} readOnly={!!number} />
        </Form.Item>
        <Form.Item
          label={constant.LABEL.EQUIPMENT_REQUIRED_REASON}
          name="equipmentReason"
        >
          <Input defaultValue={reason} readOnly={!!reason} />
        </Form.Item>
      </Form>
    </div>
  );
}

export default RequestDeviceForm;
