import React, { useState, useRef } from 'react';
import { Form, Input, Button, Select, DatePicker, Row, Col } from 'antd';
import constants from '../../constants/htmlConstants';

function UserSearchBox(props) {
  const {
    setPage,
    setFullName,
    setContractStatus,
    setContractDateBegin,
    setContractDateEnd,
  } = props;
  const [componentSize, setComponentSize] = useState('default');
  const [quickChooseValue, setQuickChooseValue] = useState();
  const [currentContractStatus, setCurrentContractStatus] = useState();
  const [currentFullName, setCurrentFullName] = useState();
  const [currentContractDateBegin, setCurrentContractDateBegin] = useState();
  const [currentContractDateEnd, setCurrentContractDateEnd] = useState();
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleChangeValueQuickChoose = (value) => {
    setQuickChooseValue(value);
  };

  const handleChangeContractStatus = (value) => {
    setCurrentContractStatus(value);
  };
  const handleChangeFullName = (e) => {
    setCurrentFullName(e.target.value);
  };
  const handleChangeContractDateBegin = (date) => {
    setCurrentContractDateBegin(date);
  };
  const handleChangeContractDateEnd = (date) => {
    setCurrentContractDateEnd(date);
  };
  const handleSearchUser = () => {
    setContractStatus(currentContractStatus);
    setFullName(currentFullName);
    setContractDateBegin(currentContractDateBegin);
    setContractDateEnd(currentContractDateEnd);
  };
  const handleCancel = () => {
    setCurrentContractStatus();
    setCurrentFullName('');
    setCurrentContractDateBegin('');
    setCurrentContractDateEnd('');
    setContractStatus('');
    setFullName('');
    setContractDateBegin('');
    setContractDateEnd('');
  };

  return (
    <div className="search-box user-search-box">
      <Form
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Row>
          <Col span={9}>
            <Form.Item
              className="search-box_item search-box_item--name"
              label={constants.LABEL.NAME}
            >
              <Input value={currentFullName} onChange={handleChangeFullName} />
            </Form.Item>
          </Col>
          <Col span={3}></Col>
          <Col span={6}>
            <Form.Item
              className="search-box_item search-box_item--status user-status-input"
              label="Contract Status"
            >
              <Select
                onChange={handleChangeContractStatus}
                value={currentContractStatus}
              >
                <Select.Option value="0">
                  {constants.CONTRACT_STATUS.RESIGNED}
                </Select.Option>
                <Select.Option value="1">
                  {constants.CONTRACT_STATUS.SIGNED}
                </Select.Option>
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
              <DatePicker
                value={currentContractDateBegin}
                onChange={handleChangeContractDateBegin}
                format={constants.FORMAT_DATE}
                placeholder={constants.FORMAT_DATE}
                className="start-date"
              />
              <span> to </span>
              <DatePicker
                value={currentContractDateEnd}
                onChange={handleChangeContractDateEnd}
                format={constants.FORMAT_DATE}
                placeholder={constants.FORMAT_DATE}
                className="end-date"
              />
            </Form.Item>
          </Col>
          <Col span={2}></Col>
          <Col span={6}>
            <Form.Item
              className="search-box_item search-box_item--choose"
              label="Quick choose"
            >
              <Select
                onChange={handleChangeValueQuickChoose}
                value={quickChooseValue}
              >
                <Select.Option value={0}>
                  {constants.QUICK_CHOOSE.TODAY}
                </Select.Option>
                <Select.Option value={1}>
                  {constants.QUICK_CHOOSE.THIS_WEEK}
                </Select.Option>
                <Select.Option value={2}>
                  {constants.QUICK_CHOOSE.LAST_WEEK}
                </Select.Option>
                <Select.Option value={3}>
                  {constants.QUICK_CHOOSE.THIS_MONTH}
                </Select.Option>
                <Select.Option value={4}>
                  {constants.QUICK_CHOOSE.LAST_MONTH}
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <div className="search-box-button">
          <div>
            <Button onClick={handleCancel}>{constants.BUTTON.CANCEL}</Button>
            <Button type="primary" onClick={handleSearchUser}>
              {constants.BUTTON.SEARCH}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default UserSearchBox;
