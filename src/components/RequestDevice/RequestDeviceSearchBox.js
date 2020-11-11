import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Select, DatePicker } from 'antd';
import moment from 'moment';
import '../../css/RequestSearchBox.css';
import { BUTTON } from '../../constants/textLabel';
import constant from '../../constants/htmlConstants';

const { Option } = Select;
const { RangePicker } = DatePicker;
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 18 },
};

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
          <Col span={constant.GRID_COL.GRID_COL_8}>
            <Form {...layout}>
              <Form.Item
                className="search-box_item search-box_item--name"
                label={constant.LABEL.NAME}
              >
                <Input
                  className="request-search-input"
                  placeholder={constant.LABEL.NAME}
                />
              </Form.Item>
              <Form.Item
                className="search-box_item search-box_item--date"
                label={constant.LABEL.CONTRACT}
              >
                <DatePicker className="start-date" />
                <span> to </span>
                <DatePicker className="end-date" />
              </Form.Item>
            </Form>
          </Col>

          <Col span={constant.GRID_COL.GRID_COL_8}>
            <Form {...layout}>
              <Form.Item
                className="search-box_item search-box_item--hoder"
                label={constant.LABEL.HOLDER}
              >
                <Input
                  style={{ marginLeft: '1rem' }}
                  className="request-search-input"
                  placeholder={constant.LABEL.HOLDER}
                />
              </Form.Item>
              <Form.Item
                className="search-box_item search-box_item--choose"
                label={constant.LABEL.QUICK_CHOOSE}
              >
                <Select
                  style={{ marginLeft: '1rem' }}
                  placeholder={constant.LABEL.QUICK_CHOOSE}
                >
                  <Select.Option value="demo">Quick</Select.Option>
                  <Select.Option value="demo">Normal</Select.Option>
                </Select>
              </Form.Item>
            </Form>
          </Col>

          <Col span={constant.GRID_COL.GRID_COL_8}>
            <Form {...layout}>
              <Form.Item
                className="search-box_item search-box_item--status user-status-input"
                label={constant.LABEL.CONTRACT_STATUS}
              >
                <Select placeholder="Signed">
                  <Option value="Signed">Signed</Option>
                </Select>
              </Form.Item>
            </Form>
          </Col>
          <Col span={constant.GRID_COL.GRID_COL_8}></Col>
          <Col span={constant.GRID_COL.GRID_COL_8}></Col>
          <Col span={constant.GRID_COL.GRID_COL_8}>
            <div className="search-box-button">
              <Button style={{ marginRight: '0.8rem' }}>Cancel</Button>
              <Button type="primary">Search</Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
