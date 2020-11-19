import React, { useState } from 'react';
import { Form, Input, Button, Select, DatePicker, Row, Col, Card } from 'antd';
import moment from 'moment';
import constants from '../../constants/htmlConstants';
import initialState from '../../constants/initialState';

function UserSearchBox(props) {
  const {
    setFullName,
    setContractStatus,
    setContractDateBegin,
    setContractDateEnd,
  } = props;
  const [componentSize, setComponentSize] = useState('default');
  const [quickChooseValue, setQuickChooseValue] = useState();
  const [currentContractStatus, setCurrentContractStatus] = useState();
  const [currentEmployeeStatus, setCurrentEmployeeStatus] = useState();
  const [currentFullName, setCurrentFullName] = useState();
  const [currentContractDateBegin, setCurrentContractDateBegin] = useState();
  const [currentContractDateEnd, setCurrentContractDateEnd] = useState();
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const addDays = (dateObj, numDays) => {
    dateObj.setDate(dateObj.getDate() + numDays);
    return dateObj;
  };
  const minusDays = (dateObj, numDays) => {
    dateObj.setDate(dateObj.getDate() - numDays);
    return dateObj;
  };
  const onChangeValueQuickChoose = (value) => {
    setQuickChooseValue(value);
    switch (value) {
      case 0:
        setCurrentContractDateBegin(moment(new Date()));
        setCurrentContractDateEnd(moment(new Date()));
        break;
      case 1:
        setCurrentContractDateBegin(moment(new Date()));
        setCurrentContractDateEnd(moment(addDays(new Date(), 7)));
        break;
      case 2:
        setCurrentContractDateBegin(moment(minusDays(new Date(), 7)));
        setCurrentContractDateEnd(moment(new Date()));
        break;
      case 3:
        setCurrentContractDateBegin(moment(new Date()));
        setCurrentContractDateEnd(moment(addDays(new Date(), 30)));
        break;
      case 4:
        setCurrentContractDateBegin(moment(minusDays(new Date(), 30)));
        setCurrentContractDateEnd(moment(new Date()));
        break;
      default:
        break;
    }
  };

  const onChangeContractStatus = (value) => {
    setCurrentContractStatus(value);
  };
  const onChangeEmployeeStatus = (value) => {
    setCurrentEmployeeStatus(value);
  };
  const onChangeFullName = (e) => {
    setCurrentFullName(e.target.value);
  };
  const onChangeContractDateBegin = (date) => {
    setCurrentContractDateBegin(date);
  };
  const onChangeContractDate = (date) => {
    if (date) {
      setCurrentContractDateBegin(date[0]);
      setCurrentContractDateEnd(date[1]);
    } else {
      setCurrentContractDateBegin('');
      setCurrentContractDateEnd('');
    }
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
    setQuickChooseValue();
    setContractStatus('');
    setFullName('');
    setContractDateBegin('');
    setContractDateEnd('');
  };

  return (
    <Card className="search-box">
      <Form
        layout="horizontal"
        labelCol={{
          span: constants.LABEL_COL.LABEL_COL_7,
        }}
        wrapperCol={{
          span: constants.WRAPPER_COL.WRAPPER_COL_17,
        }}
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={8}>
            <Form.Item
              className="search-box_item search-box_item--name"
              label={constants.LABEL.NAME}
            >
              <Input
                placeholder={constants.LABEL.NAME}
                value={currentFullName}
                onChange={onChangeFullName}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={8}>
            <Form.Item
              className="search-box_item search-box_item--status user-status-input"
              label={constants.LABEL.CONTRACT_STATUS}
            >
              <Select
                placeholder={constants.LABEL.CONTRACT_STATUS}
                onChange={onChangeContractStatus}
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
          <Col xs={24} sm={24} md={24} lg={24} xl={8}>
            <Form.Item
              className="search-box_item search-box_item--status user-status-input"
              label={constants.LABEL.EMPLOYEE_STATUS}
            >
              <Select
                placeholder={constants.LABEL.EMPLOYEE_STATUS}
                onChange={onChangeEmployeeStatus}
                value={currentEmployeeStatus}
              >
                <Select.Option value={initialState.employee_status.all}>
                  {constants.EMPLOYEE_STATUS.ALL}
                </Select.Option>
                <Select.Option value={initialState.employee_status.active}>
                  {constants.EMPLOYEE_STATUS.AVAILABLE}
                </Select.Option>
                <Select.Option value={initialState.employee_status.inActive}>
                  {constants.EMPLOYEE_STATUS.IN_ACTIVE}
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={8}>
            <Form.Item
              className="search-box_item search-box_item--date"
              label="Contract"
            >
              <DatePicker.RangePicker
                value={[currentContractDateBegin, currentContractDateEnd]}
                placeholder={[constants.FORMAT_DATE, constants.FORMAT_DATE]}
                onChange={onChangeContractDate}
                format={constants.FORMAT_DATE}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={8}>
            <Form.Item
              className="search-box_item search-box_item--choose"
              label={constants.LABEL.QUICK_CHOOSE}
            >
              <Select
                placeholder={constants.LABEL.QUICK_CHOOSE}
                onChange={onChangeValueQuickChoose}
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
            </Form.Item>{' '}
          </Col>
          <Col xs={24} sm={24} md={24} lg={11} xl={8}>
            <div className="search-box-button">
              <Button onClick={handleCancel}>{constants.BUTTON.CANCEL}</Button>
              <Button type="primary" onClick={handleSearchUser}>
                {constants.BUTTON.SEARCH}
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

export default UserSearchBox;
