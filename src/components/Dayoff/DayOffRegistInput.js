import { Button, Col, DatePicker, Form, Input, Radio, Row, Select } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

import constant from '../../constants/htmlConstants';
import validation from '../../constants/validation';
import '../../css/DayOffRegistInput.css';

function DayOffRegistInput(props) {
  const [componentSize, setComponentSize] = useState('default');
  const history = useHistory();
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleChangeRadioValue = (e) => {};
  const handleContinueRegistHoliday = () => {
    history.push('/dayoffs');
  };
  const onFinish = (values) => {
    history.push('/dayoffs');
  };
  const onFinishFailed = (errorInfo) => {};
  return (
    <div className="dayoff-regist-input">
      <Row>
        <Col span={constant.GRID_COL.GRID_COL_4}></Col>
        <Col span={constant.GRID_COL.GRID_COL_16}>
          <Form
            {...constant.LAYOUT_ERROR_TEXT}
            labelCol={{
              span: constant.LABEL_COL.LABEL_COL_5,
            }}
            wrapperCol={{
              span: constant.WRAPPER_COL.WRAPPER_COL_19,
            }}
            layout={constant.LAYOUT.HORIZONTAL}
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            validateMessages={validation}
            size={componentSize}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label={constant.LABEL.PO_NAME}
              name="poName"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={constant.LABEL.PO_EMAIL}
              name="poEmail"
              rules={[
                {
                  required: true,
                  type: 'email',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={constant.LABEL.VACATION_FROM}
              name="vacationDateFrom"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker
                placeholder={constant.FORMAT_DATE}
                format={constant.FORMAT_DATE}
              />
            </Form.Item>
            <Form.Item
              label={constant.LABEL.VACATION_TO}
              name="vacationDateTo"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker
                placeholder={constant.FORMAT_DATE}
                format={constant.FORMAT_DATE}
              />
            </Form.Item>
            <Form.Item
              label={constant.LABEL.MORINING_AFTERNOON_ALLDAY}
              name="timeRequestOff"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Radio.Group onChange={handleChangeRadioValue}>
                <Radio value={1}>{constant.RADIO_CHOOSE.MORNING}</Radio>
                <Radio value={2}>{constant.RADIO_CHOOSE.AFTERNOON}</Radio>
                <Radio value={3}>{constant.RADIO_CHOOSE.All_DAY}</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label={constant.LABEL.VACATION_TYPE}
              name="vacationType"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select>
                <Select.Option value="demo">
                  {constant.VACATION_TYPE.ANNUAL_LEAVE}
                </Select.Option>
                <Select.Option value="demo">
                  {constant.VACATION_TYPE.UNPAID_LEAVE}
                </Select.Option>
                <Select.Option value="demo">
                  {constant.VACATION_TYPE.MATERNITY_LEAVE}
                </Select.Option>
                <Select.Option value="demo">
                  {constant.VACATION_TYPE.WEDDING_VACATION}
                </Select.Option>
                <Select.Option value="demo">
                  {constant.VACATION_TYPE.FUNERAL_LEAVE}
                </Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={constant.LABEL.REASONS}
              name="reason"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label={constant.LABEL.NOTES}>
              <Input />
            </Form.Item>
            <div className="dayoff-regist-button">
              <Button onClick={handleContinueRegistHoliday}>
                {constant.BUTTON.CANCEL}
              </Button>
              <Button type="primary" htmlType="submit">
                {constant.BUTTON.SUBMIT}
              </Button>
            </div>
          </Form>
        </Col>
        <Col span={constant.GRID_COL.GRID_COL_4}></Col>
      </Row>
    </div>
  );
}

export default DayOffRegistInput;
