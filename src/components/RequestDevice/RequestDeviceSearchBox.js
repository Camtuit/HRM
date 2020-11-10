import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Select, DatePicker } from 'antd';
import moment from 'moment';
import '../../css/RequestSearchBox.css';
import { BUTTON } from '../../constants/textLabel';
import constant from '../../constants/htmlConstants';

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
      <Form layout="horizontal">
        <Row>
          <Col span={9}>
            <Form.Item
              className="search-box_item search-box_item--name"
              label="Name"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={1}></Col>
          <Col span={6}>
            <Form.Item
              className="search-box_item search-box_item--hoder"
              label="Holder"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={1}></Col>
          <Col span={5}>
            <Form.Item
              className="search-box_item search-box_item--status user-status-input"
              label="Contract Status"
            >
              <Select>
                <Select.Option value="demo">Signed</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <Form.Item
              className="search-box_item search-box_item--date"
              label="Contract"
            >
              <DatePicker className="start-date" />
              <span> to </span>
              <DatePicker className="end-date" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              className="search-box_item search-box_item--choose"
              label="Quick choose"
            >
              <Select>
                <Select.Option value="demo">Quick</Select.Option>
                <Select.Option value="demo">Normal</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <div className="search-box-button">
          <div className="buttons">
            <Button>Cancel</Button>
            <Button type="primary">Search</Button>
          </div>
        </div>
      </Form>
    </div>
  );
}
