import React, { useSelector } from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';

import SearchBarContainer from '../../components/commons/SearchBarContainer';
import { deviceSizeFixed } from '../../constants/deviceSize';

function SearchBarDevice() {
  const { Option, OptGroup } = Select;
  const screenWidth = useSelector((state) => state.screenWidth);
  const isLaptop = screenWidth >= deviceSizeFixed.laptop;
  return (
    <div className="wrapper wrapper-search-bar">
      <Form
        className="search-bar__device search-bar"
        size={isLaptop ? 'middle' : 'small'}
      >
        <SearchBarContainer>
          <Form.Item
            className="search-bar__item search-bar__name input-text"
            label="Name"
          >
            <Input className="input search-input" />
          </Form.Item>

          <Form.Item className="search-bar__item input-text" label="Holder">
            <Input className="input search-input" />
          </Form.Item>
          <Form.Item
            className="search-bar__item search-bar__status"
            label="Status"
          >
            <Select defaultValue="All" onChange={() => {}}>
              <Option value="assigned">Assigned</Option>
              <Option value="available">Available</Option>
              <Option value="all">All</Option>
            </Select>
          </Form.Item>

          <Form.Item
            className="search-bar__item search-bar__date"
            label="Input date"
          >
            <div className="input-date">
              <DatePicker />
              <span>to</span>
              <DatePicker />
            </div>
          </Form.Item>
          <Form.Item
            className="search-bar__item search-bar__quick-choose"
            label="Quick choose"
          >
            <Select>
              <Select.Option value="demo">Quick</Select.Option>
              <Select.Option value="demo">Normal</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item className="search-bar__buttons">
            <Button className="button button__cancel">Cancel</Button>
            <Button className="button button__search" type="primary">
              Search
            </Button>
          </Form.Item>
        </SearchBarContainer>
      </Form>
    </div>
  );
}

export default SearchBarDevice;
