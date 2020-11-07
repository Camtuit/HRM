import React from 'react';
import { Button, Row, Col } from 'antd';
import { useSelector } from 'react-redux';

import { deviceSizeFixed } from '../../constants/deviceSize';
import RequestDeviceForm from '../../components/RequestDevice/RequestDeviceForm';
import { request } from '../../helpers/dumbData';
import { BUTTON } from '../../constants/textLabel';
import WrapperContent from '../../components/commons/WrapperContentPage';

export default function RequestDeviceDetails({ history }) {
  const screenWidth = useSelector((state) => state.screenWidth);
  const isLaptop = screenWidth >= deviceSizeFixed.laptop;
  const spanLabelCol = isLaptop ? 5 : 9;
  const spanWrapperCol = isLaptop ? 8 : 12;
  const handleBack = () => {
    history.push('/');
  };
  return (
    <WrapperContent>
      <div className="request-device-container request-device-details">
        <h2 className="request-device-form__title">Request Device Details</h2>
        <RequestDeviceForm
          spanLabelCol={spanLabelCol}
          spanWrapperCol={spanWrapperCol}
          request={request}
        />
      </div>
      <Row>
        <Col span={isLaptop ? 13 : 21}>
          <div className="request-device-details__buttons">
            <Button onClick={handleBack} type="primary">
              {BUTTON.BACK}
            </Button>
          </div>
        </Col>
      </Row>
    </WrapperContent>
  );
}
