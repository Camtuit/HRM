import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Select, DatePicker, Space } from 'antd';
import '../../css/RequestSearchBox.css';
import moment from 'moment';
import constant from '../../constants/constants';

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
        <Col
          className="request-input"
          span={constant.LAYOUT_ERROR_TEXT.labelCol.span}
        >
          <Form.Item label={constant.LABEL.NAME}>
            <Input placeholder={constant.LABEL.NAME} />
          </Form.Item>
        </Col>

        <Col
          className="request-input"
          span={constant.LAYOUT_ERROR_TEXT.labelCol.span}
        >
          <Form.Item label={constant.LABEL.HOLDER}>
            <Input placeholder="Holder name" />
          </Form.Item>
        </Col>
        <Col
          className="request-input"
          span={constant.LAYOUT_ERROR_TEXT.labelCol.span}
        >
          <Form.Item label={constant.LABEL.STATUS}>
            <Select
              defaultValue="all"
              style={{ width: 200 }}
              placeholder="Select a person"
            >
              <Option value="all">{constant.RADIO_CHOOSE.ALL}</Option>
              <Option value="assigned">{constant.RADIO_CHOOSE.ASSIGNED}</Option>
              <Option value="available">
                {constant.RADIO_CHOOSE.AVAILABLE}
              </Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col className="request-input-second" span={12}>
          <Form.Item label="Input date:">
            <RangePicker
              disabledDate={disabledDate}
              format={constant.FORMAT_DATE}
            />
          </Form.Item>
        </Col>
        <Col className="request-input-second" span={8}>
          <Form.Item>
            <Select
              defaultValue="Quick choose"
              style={{ width: 200 }}
              placeholder="Select a person"
            >
              <Option value="today">{constant.QUICK_CHOOSE.TODAY}</Option>
              <Option value="thisWeek">
                {constant.QUICK_CHOOSE.THIS_WEEK}
              </Option>
              <Option value="lastWeek">
                {constant.QUICK_CHOOSE.LAST_WEEK}
              </Option>
              <Option value="thisMonth">
                {constant.QUICK_CHOOSE.THIS_MONTH}
              </Option>
              <Option value="lastMonth">
                {constant.QUICK_CHOOSE.LAST_MONTH}
              </Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row className="request-search-box-button">
        <Button className="btn-cancel">{constant.BUTTON.CANCEL}</Button>
        <Button type="primary" onClick={handleSearch} htmlType="submit">
          {constant.BUTTON.SEARCH}
        </Button>
      </Row>
    </div>
  );
}
