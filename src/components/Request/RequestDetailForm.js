import { Button, Col, Form, Input, Row } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import constant from '../../constants/constants';
import '../../css/RequestDetailForm.css';

function RequestDetailForm() {
  const values = {
    projectName: 'Testing Project',
    deviceName: 'Macbook pro 15',
    expectedDeliveryDate: '01-01-2020',
    technicalSpecification: 'Macbook pro 15',
    numberDevice: '1',
    equipmentReason: 'Test',
  };
  const [componentSize, setComponentSize] = useState('default');
  const history = useHistory();

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleBackToList = () => {
    history.push('/requestdevice');
  };
  return (
    <div className="request-detail-form">
      <Row>
        <Col span={constant.GRID_COL.GRID_COL_4}></Col>
        <Col span={constant.GRID_COL.GRID_COL_16}>
          <Form
            {...constant.LAYOUT_ERROR_TEXT}
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: constant.WRAPPER_COL.WRAPPER_COL_19,
            }}
            layout={constant.LAYOUT.HORIZONTAL}
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
          >
            <Form.Item label={constant.LABEL.YOUR_PROJECT} name="projectName">
              <Input defaultValue={values.projectName} readOnly />
            </Form.Item>
            <Form.Item label={constant.LABEL.DEVICE_NAME} name="deviceName">
              <Input defaultValue={values.deviceName} readOnly />
            </Form.Item>
            <Form.Item
              label={constant.LABEL.EXPECTED_DELIVERY_DATE}
              name="expectedDeliveryDate"
            >
              <Input defaultValue={values.expectedDeliveryDate} readOnly />
            </Form.Item>
            <Form.Item
              label={constant.LABEL.TECHNICAL_SPECIFICATIONS}
              name="technicalSpecification"
            >
              <Input defaultValue={values.technicalSpecification} readOnly />
            </Form.Item>
            <Form.Item
              label={constant.LABEL.NUMBER_OF_DEVICE}
              name="numberDevice"
            >
              <Input defaultValue={values.technicalSpecification} readOnly />
            </Form.Item>
            <Form.Item
              label={constant.LABEL.EQUIPMENT_REQUIRED_REASON}
              name="equipmentReason"
            >
              <Input defaultValue={values.equipmentReason} readOnly />
            </Form.Item>
            <div className="request-detail-form-button">
              <Button onClick={handleBackToList}>{constant.BUTTON.BACK}</Button>
            </div>
          </Form>
        </Col>
        <Col span={constant.GRID_COL.GRID_COL_4}></Col>
      </Row>
    </div>
  );
}

export default RequestDetailForm;
