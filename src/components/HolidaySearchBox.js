import React, { useState } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";
import "../css/HolidaySearchBox.css";

function HolidaySearchBox() {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div className="holiday-search-box">
      <Form
        labelCol={{
          span: 9,
        }}
        wrapperCol={{
          span: 6,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Year">
          <Select>
            <Select.Option value="demo">2020</Select.Option>
            <Select.Option value="demo">2019</Select.Option>
          </Select>
        </Form.Item>

        <div className="user-search-box-button">
          <Button>Cancel</Button>
          <Button type="primary">Search</Button>
        </div>
      </Form>
    </div>
  );
}

export default HolidaySearchBox;
