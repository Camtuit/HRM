import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Select, DatePicker } from 'antd';
import moment from 'moment';

import { BUTTON } from '../../constants/textLabel';

const { Option } = Select;
const { RangePicker } = DatePicker;
export default function RequestDeviceSearchBox() {
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
    <div className="search-box request-search-box">
      <Row>
        <Form.Item
          className="request-search-box__item request-search-box__item--name"
          label="Name:"
          rules={[{ required: true }]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          className="input-request-device__item request-search-box__item--holder"
          label="Holder:"
        >
          <Input placeholder="Holder name" />
        </Form.Item>
        <Form.Item
          className="input-request-device__item request-search-box__item--status"
          label="Status:"
        >
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
      </Row>

      <Row>
        <Form.Item
          className="request-search-box__item request-search-box__item--input"
          label="Input date:"
        >
          <RangePicker className="input-picker" disabledDate={disabledDate} />
        </Form.Item>
        <Form.Item className="request-search-box__item request-search-box__item--quick-choose">
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
      </Row>
      <Row className="request-search-box__buttons">
        <Button className="btn-cancel">{BUTTON.CANCEL}</Button>
        <Button type="primary" onClick={handleSearch} htmlType="submit">
          {BUTTON.SEARCH}
        </Button>
      </Row>
    </div>
  );
}
