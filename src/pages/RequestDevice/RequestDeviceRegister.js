import React from 'react';
import { Button, Row, Col } from 'antd';
import { useSelector } from 'react-redux';

import RequestDeviceForm from '../../components/RequestDevice/RequestDeviceForm';
import WrapperContent from '../../components/commons/WrapperContentPage';
import { BUTTON } from '../../constants/textLabel';
import { deviceSizeFixed } from '../../constants/deviceSize';
import constants from '../../constants/htmlConstants';

export default function RequestDeviceRegister({ history }) {
  const screenWidth = useSelector((state) => state.screenWidth);
  const isLaptop = screenWidth >= deviceSizeFixed.laptop;
  const {
    GRID_COL: {
      GRID_COL_5,
      GRID_COL_8,
      GRID_COL_9,
      GRID_COL_12,
      GRID_COL_13,
      GRID_COL_21,
    },
  } = constants;
  const spanLabelCol = isLaptop ? GRID_COL_5 : GRID_COL_9;
  const spanWrapperCol = isLaptop ? GRID_COL_8 : GRID_COL_12;
  const handleBack = () => {
    history.push('/');
  };
  return (
    <WrapperContent>
      <div className="request-device-container request-device-details">
        <h2 className="request-device-form__title">Request Device</h2>
        <RequestDeviceForm
          spanLabelCol={spanLabelCol}
          spanWrapperCol={spanWrapperCol}
        />
        <Row>
          <Col span={isLaptop ? GRID_COL_13 : GRID_COL_21}>
            <div className="request-device-details__buttons">
              <Button onClick={handleBack}>{BUTTON.BACK}</Button>
              <Button onClick={handleBack} type="primary">
                {BUTTON.SAVE}
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </WrapperContent>
  );
}
