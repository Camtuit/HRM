import { Button, DatePicker, Form, Input, Select } from 'antd';
import React, { useState } from 'react';
import '../../css/DayOffSearchBox.css';

const LABEL_COL = 2;
const WRAPPER_COL = 10;
const LAYOUT = 'horizontal';
const LABEL = {
  DAY_OFF: 'Day off',
  NAME: 'Name',
};
const BUTTON = {
  CANCEL: 'Cancel',
  SEARCH: 'Search',
};
const FORMAT_DATE = 'DD-MM-YYYY';

function DayOffSearchBox() {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div className="dayoff-search-box">
      <Form
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
      >
        <div className="dayoff-search-box-input">
          <Form.Item label={LABEL.NAME}>
            <Input />
          </Form.Item>

          <Form.Item label={LABEL.DAY_OFF}>
            <DatePicker placeholder={FORMAT_DATE} format={FORMAT_DATE} />
            <span> to </span>
            <DatePicker placeholder={FORMAT_DATE} format={FORMAT_DATE} />
          </Form.Item>

          <Form.Item label="Quick choose">
            <Select>
              <Select.Option value="demo">Today</Select.Option>
              <Select.Option value="demo">This week</Select.Option>
              <Select.Option value="demo">Last wwek</Select.Option>
              <Select.Option value="demo">This month</Select.Option>
              <Select.Option value="demo">Last month</Select.Option>
            </Select>
          </Form.Item>
        </div>
        <div className="dayoff-search-box-button">
          <Button>{BUTTON.CANCEL}</Button>
          <Button type="primary">{BUTTON.SEARCH}</Button>
        </div>
      </Form>
    </div>
  );
}

export default DayOffSearchBox;
