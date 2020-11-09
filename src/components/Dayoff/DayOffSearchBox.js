import { Button, DatePicker, Form, Input, Select } from 'antd';
import React, { useState } from 'react';

import constant from '../../constants/htmlConstants';
import '../../css/DayOffSearchBox.css';

function DayOffSearchBox() {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div className="search-box dayoff-search-box">
      <Form
        labelCol={{
          span: constant.LABEL_COL.LABEL_COL_2,
        }}
        wrapperCol={{
          span: constant.WRAPPER_COL.WRAPPER_COL_15,
        }}
        layout={constant.LAYOUT.HORIZONTAL}
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <div className="dayoff-search-box-input">
          <Form.Item label={constant.LABEL.NAME}>
            <Input />
          </Form.Item>

          <Form.Item label={constant.LABEL.DAY_OFF}>
            <DatePicker
              placeholder={constant.FORMAT_DATE}
              format={constant.FORMAT_DATE}
            />
            <span> to </span>
            <DatePicker
              placeholder={constant.FORMAT_DATE}
              format={constant.FORMAT_DATE}
            />
          </Form.Item>

          <Form.Item label="Quick choose">
            <Select>
              <Select.Option value="demo">
                {constant.QUICK_CHOOSE.TODAY}
              </Select.Option>
              <Select.Option value="demo">
                {constant.QUICK_CHOOSE.THIS_WEEK}
              </Select.Option>
              <Select.Option value="demo">
                {constant.QUICK_CHOOSE.LAST_WEEK}
              </Select.Option>
              <Select.Option value="demo">
                {constant.QUICK_CHOOSE.THIS_MONTH}
              </Select.Option>
              <Select.Option value="demo">
                {constant.QUICK_CHOOSE.LAST_MONTH}
              </Select.Option>
            </Select>
          </Form.Item>
        </div>
        <div className="dayoff-search-box-button">
          <Button>{constant.BUTTON.CANCEL}</Button>
          <Button type="primary">{constant.BUTTON.SEARCH}</Button>
        </div>
      </Form>
    </div>
  );
}

export default DayOffSearchBox;
