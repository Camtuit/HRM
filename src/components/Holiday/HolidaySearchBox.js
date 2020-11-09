import React, { useState } from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';
import '../../css/HolidaySearchBox.css';

function HolidaySearchBox({ setCurrentYear, setCurrentPage }) {
  const [componentSize, setComponentSize] = useState('default');
  const [currentValue, setCurrentValue] = useState(null);
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  function onChange(value) {
    setCurrentValue(value);
    console.log(value);
  }

  function search() {
    setCurrentYear(currentValue);
    setCurrentPage(0);
  }
  return (
    <div className="search-box holiday-search-box">
      <div className="holiday-form">
        <Form
          labelCol={{
            span: 9,
          }}
          wrapperCol={{
            span: 10,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
        >
          <Form.Item label="Year">
            <Select onChange={onChange} defaultValue="2020">
              <Select.Option value="2025">2025</Select.Option>
              <Select.Option value="2024">2024</Select.Option>
              <Select.Option value="2023">2023</Select.Option>
              <Select.Option value="2022">2022</Select.Option>
              <Select.Option value="2021">2021</Select.Option>
              <Select.Option value="2020">2020</Select.Option>
              <Select.Option value="2019">2019</Select.Option>
              <Select.Option value="2018">2018</Select.Option>
              <Select.Option value="2017">2017</Select.Option>
              <Select.Option value="2016">2016</Select.Option>
              <Select.Option value="2015">2015</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </div>

      <div className="user-search-box-button">
        <Button>Cancel</Button>
        <Button type="primary" onClick={search}>
          Search
        </Button>
      </div>
    </div>
  );
}

export default HolidaySearchBox;
