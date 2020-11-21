import React, { useState } from 'react';
import { Form, Input, Button, Select, DatePicker, Row, Col, Card } from 'antd';
import moment from 'moment';
import constants from '../../constants/htmlConstants';
import initialState from '../../constants/initialState';
import { useTranslation } from 'react-i18next';
function UserSearchBox({
  setFullName,
  setContractStatus,
  setContractDateBegin,
  setContractDateEnd,
  setEmployeeStatus,
}) {
  const [componentSize, setComponentSize] = useState('default');
  const [quickChooseValue, setQuickChooseValue] = useState();
  const [currentContractStatus, setCurrentContractStatus] = useState();
  const [currentEmployeeStatus, setCurrentEmployeeStatus] = useState();
  const [currentFullName, setCurrentFullName] = useState();
  const [currentContractDateBegin, setCurrentContractDateBegin] = useState();
  const [currentContractDateEnd, setCurrentContractDateEnd] = useState();
  const { t, i18n } = useTranslation();
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
    setEmployeeStatus(currentEmployeeStatus);
  };
  const handleCancel = () => {
    setCurrentContractStatus();
    setCurrentFullName('');
    setCurrentContractDateBegin('');
    setCurrentContractDateEnd('');
    setCurrentEmployeeStatus('');
    setQuickChooseValue();
    setContractStatus('');
    setFullName('');
    setContractDateBegin('');
    setContractDateEnd('');
    setEmployeeStatus(1);
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
              label={t('LABEL.NAME')}
            >
              <Input
                placeholder={t('LABEL.NAME')}
                value={currentFullName}
                onChange={onChangeFullName}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={8}>
            <Form.Item
              className="search-box_item search-box_item--status user-status-input"
              label={t('TABLE.COLUMN_TITLE.STATUS')}
            >
              <Select
                placeholder={t('TABLE.COLUMN_TITLE.STATUS')}
                onChange={onChangeContractStatus}
                value={currentContractStatus}
              >
                <Select.Option value="0">
                  {t('RADIO_INPUT.SIGNED')}
                </Select.Option>
                <Select.Option value="1">
                  {t('RADIO_INPUT.RESIGNED')}
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={8}>
            <Form.Item
              className="search-box_item search-box_item--status user-status-input"
              label={t('TABLE.COLUMN_TITLE.EMPLOYEE_STATUS')}
            >
              <Select
                placeholder={t('TABLE.COLUMN_TITLE.EMPLOYEE_STATUS')}
                onChange={onChangeEmployeeStatus}
                value={currentEmployeeStatus}
              >
                <Select.Option value={initialState.employee_status.all}>
                  {t('RADIO_INPUT.ALL')}
                </Select.Option>
                <Select.Option value={initialState.employee_status.active}>
                  {t('RADIO_INPUT.AVAILABLE')}
                </Select.Option>
                <Select.Option value={initialState.employee_status.inActive}>
                  {t('RADIO_INPUT.AVAILABLE')}
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
              label={t('RADIO_INPUT.QUICK_CHOOSE')}
            >
              <Select
                placeholder={t('RADIO_INPUT.QUICK_CHOOSE')}
                onChange={onChangeValueQuickChoose}
                value={quickChooseValue}
              >
                <Select.Option value={0}>
                  {t('RADIO_INPUT.TODAY')}
                </Select.Option>
                <Select.Option value={1}>
                  {t('RADIO_INPUT.THIS_WEEK')}
                </Select.Option>
                <Select.Option value={2}>
                  {t('RADIO_INPUT.LAST_WEEK')}
                </Select.Option>
                <Select.Option value={3}>
                  {t('RADIO_INPUT.THIS_MONTH')}
                </Select.Option>
                <Select.Option value={4}>
                  {t('RADIO_INPUT.LAST_MONTH')}
                </Select.Option>
              </Select>
            </Form.Item>{' '}
          </Col>
          <Col xs={24} sm={24} md={24} lg={11} xl={8}>
            <div className="search-box-button">
              <Button onClick={handleCancel}> {t('button.search')}</Button>
              <Button type="primary" onClick={handleSearchUser}>
                {t('button.search')}
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

export default UserSearchBox;
