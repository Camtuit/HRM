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
            <Option value="all">{constant.RADIO_CHOOSE.ALL}</Option>
            <Option value="assigned">{constant.RADIO_CHOOSE.ASSIGNED}</Option>
            <Option value="available">{constant.RADIO_CHOOSE.AVAILABLE}</Option>
          </Select>
        </Form.Item>
      </Row>

      <Row>
        <Form.Item label={constant.LABEL.INPUT}>
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

        <Form.Item
          label={constant.LABEL.QUICK_CHOOSE}
          className="request-search-box__item request-search-box__item--quick-choose"
        >
          <Select
            defaultValue="Quick choose"
            style={{ width: 200 }}
            placeholder="Select a person"
          >
            <Option value="today">{constant.QUICK_CHOOSE.TODAY}</Option>
            <Option value="thisWeek">{constant.QUICK_CHOOSE.THIS_WEEK}</Option>
            <Option value="lastWeek">{constant.QUICK_CHOOSE.LAST_WEEK}</Option>
            <Option value="thisMonth">
              {constant.QUICK_CHOOSE.THIS_MONTH}h
            </Option>
            <Option value="lastMonth">
              {constant.QUICK_CHOOSE.LAST_MONTH}
            </Option>
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
