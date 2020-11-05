import { Button, DatePicker, Form, Input, Radio, Select } from 'antd';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import '../../css/DayOffRegistInput.css';

const LABEL_COL = 3;
const WRAPPER_COL = 10;
const LAYOUT = 'horizontal';
const LABEL = {
  DAY_OFF: 'Day off',
  PO_NAME: "PO's Name",
  PO_EMAIL: "PO's Email",
  VACATION_FROM: 'Vacation Days From',
  VACATION_TO: 'Vacation Days To',
  MORINING_AFTERNOON_ALLDAY: 'Morning|Afternoon|All day',
  VACATION_TYPE: 'Vacation Type',
  REASONS: 'Reasons',
  NOTES: 'Notes',
};
const RADIO = {
  MORNING: 'Morning',
  AFTERNOON: 'Afternoon',
  All_DAY: 'All day',
};
const VACATION_TYPE = {
  ANNUAL_LEAVE: 'Annual leave',
  UNPAID_LEAVE: 'Unpaid leave',
  MATERNITY_LEAVE: 'Maternity leave',
  WEDDING_VACATION: 'Wedding vacation',
  FUNERAL_LEAVE: 'Funeral leave',
};
const BUTTON = {
  CANCEL: 'Cancel',
  SUBMIT: 'Submit',
};
const FORMAT_DATE = 'DD-MM-YYYY';

function DayOffRegistInput(props) {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 12,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const [componentSize, setComponentSize] = useState('default');
  const poNameInput = useRef(null);
  const poEmailInput = useRef(null);
  const history = useHistory();

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleChangeRadioValue = (e) => {
    console.log('radio checked', e.target.value);
  };
  const handleContinueRegistHoliday = () => {
    history.push('/dayoffs');
  };
  const onFinish = (values) => {
    history.push('/dayoffs');
  };
  const onFinishFailed = (errorInfo) => {
    if (errorInfo.values.poName === undefined) {
      poNameInput.current.focus();
    } else {
      poEmailInput.current.focus();
    }
  };
  return (
    <div className="dayoff-regist-input">
      <Form
        {...layout}
        labelCol={{
          span: LABEL_COL,
        }}
        wrapperCol={{
          span: WRAPPER_COL,
        }}
        layout={{ LAYOUT }}
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label={LABEL.PO_NAME}
          name="poName"
          rules={[
            {
              required: true,
              message: "Please input your PO's Name!",
            },
          ]}
        >
          <Input ref={poNameInput} />
        </Form.Item>
        <Form.Item
          label={LABEL.PO_EMAIL}
          name="poEmail"
          rules={[
            {
              required: true,
              message: "Please input your PO's Email!",
            },
          ]}
        >
          <Input ref={poEmailInput} />
        </Form.Item>
        <Form.Item label={LABEL.VACATION_FROM}>
          <DatePicker placeholder={FORMAT_DATE} format={FORMAT_DATE} />
        </Form.Item>
        <Form.Item label={LABEL.VACATION_TO}>
          <DatePicker placeholder={FORMAT_DATE} format={FORMAT_DATE} />
        </Form.Item>
        <Form.Item label={LABEL.MORINING_AFTERNOON_ALLDAY}>
          <Radio.Group onChange={handleChangeRadioValue}>
            <Radio value={1}>{RADIO.MORNING}</Radio>
            <Radio value={2}>{RADIO.AFTERNOON}</Radio>
            <Radio value={3}>{RADIO.All_DAY}</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label={LABEL.VACATION_TYPE}>
          <Select>
            <Select.Option value="demo">
              {VACATION_TYPE.ANNUAL_LEAVE}
            </Select.Option>
            <Select.Option value="demo">
              {VACATION_TYPE.UNPAID_LEAVE}
            </Select.Option>
            <Select.Option value="demo">
              {VACATION_TYPE.MATERNITY_LEAVE}
            </Select.Option>
            <Select.Option value="demo">
              {VACATION_TYPE.WEDDING_VACATION}
            </Select.Option>
            <Select.Option value="demo">
              {VACATION_TYPE.FUNERAL_LEAVE}
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label={LABEL.REASONS}>
          <Input />
        </Form.Item>
        <Form.Item label={LABEL.NOTES}>
          <Input />
        </Form.Item>
        <div className="dayoff-regist-button">
          <Button onClick={handleContinueRegistHoliday}>{BUTTON.CANCEL}</Button>
          <Button type="primary" htmlType="submit">
            {BUTTON.SUBMIT}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default DayOffRegistInput;
