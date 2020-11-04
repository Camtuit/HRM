import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Select, DatePicker, Space } from 'antd';
import '../../css/RequestSearchBox.css';
import moment from 'moment';

const { Option } = Select;
const { RangePicker } = DatePicker;
export default function RequestSearchBox() {
  const [componentSize, setComponentSize] = useState('default');
  const [getInput, setGetInput] = useState('');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleChange = (e) => {
    e.preventDefault();
  };
  const handleSearch = () => {};

  // create date picker
  const disabledDate = (current) => {
    return current && current < moment().endOf('day');
  };
  return (
    <div className="request-search-box">
      <Row>
        <Col className="request-input" span={8}>
          <Form.Item label="Name:" rules={[{ required: true }]}>
            <Input placeholder="Name" />
          </Form.Item>
        </Col>

        <Col className="request-input" span={8}>
          <Form.Item label="Holder:">
            <Input placeholder="Holder name" />
          </Form.Item>
        </Col>
        <Col className="request-input" span={8}>
          <Form.Item label="Status:">
            <Select
              defaultValue="all"
              style={{ width: 200 }}
              placeholder="Select a person"
            >
              <Option value="all">All</Option>
              <Option value="assigned">Assigned</Option>
              <Option value="available">Available</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col className="request-input-second" span={12}>
          <Form.Item label="Input date:">
            <RangePicker disabledDate={disabledDate} />
          </Form.Item>
        </Col>
        <Col className="request-input-second" span={8}>
          <Form.Item>
            <Select
              defaultValue="Quick choose"
              style={{ width: 200 }}
              placeholder="Select a person"
            >
              <Option value="today">Today</Option>
              <Option value="thisWeek">This week</Option>
              <Option value="lastWeek">Last week</Option>
              <Option value="thisMonth">This month</Option>
              <Option value="lastMonth">Last month</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row className="request-search-box-button">
        {/* <div className="request-search-box-button"> */}
        <Button className="btn-cancel">Cancel</Button>
        <Button type="primary" onClick={handleSearch} htmlType="submit">
          Search
        </Button>
        {/* </div> */}
      </Row>
    </div>
  );
}
