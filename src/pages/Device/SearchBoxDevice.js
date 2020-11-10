import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input, Button, Select, DatePicker, Row, Col } from 'antd';

import SearchBoxContainer from '../../components/commons/SearchBoxContainer';
import { deviceSizeFixed } from '../../constants/deviceSize';

function SearchBoxDevice() {
  const { Option } = Select;
  const screenWidth = useSelector((state) => state.screenWidth);
  const isLaptop = screenWidth >= deviceSizeFixed.laptop;
  return (
    <div className="wrapper wrapper-search-box">
      <div className="search-box user-search-box">
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
    </div>
  );
}

export default SearchBoxDevice;
