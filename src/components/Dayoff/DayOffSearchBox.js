import { Button, DatePicker, Form, Input, Select, Row, Col } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import moment from 'moment';
import constant from '../../constants/htmlConstants';
// import '../../css/DayOffSearchBox.css';

function DayOffSearchBox() {
  const [componentSize, setComponentSize] = useState('default');
  const history = useHistory();
  const [form] = Form.useForm();

  const { t, i18n } = useTranslation();
  const [name, setName] = useState('');
  const [quickChooseValue, setQuickChooseValue] = useState();
  const [currentContractDateBegin, setCurrentContractDateBegin] = useState();
  const [currentContractDateEnd, setCurrentContractDateEnd] = useState();

  const addDays = (dateObj, numDays) => {
    dateObj.setDate(dateObj.getDate() + numDays);
    return dateObj;
  };
  const minusDays = (dateObj, numDays) => {
    dateObj.setDate(dateObj.getDate() - numDays);
    return dateObj;
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
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleChange = (e) => {
    setName(e.target.value);
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
  const handleSearch = () => {
    history.push(
      `/dayoffs?full_name=${name}&date_off_from=${
        currentContractDateBegin &&
        currentContractDateBegin.format('DD/MM/YYYY')
      }&date_off_to=${
        currentContractDateEnd && currentContractDateEnd.format('DD/MM/YYYY')
      }`,
    );
  };
  const handleClear = () => {
    form.resetFields();
    setCurrentContractDateBegin('');
    setName('');
    setCurrentContractDateEnd('');
    setQuickChooseValue('');
    history.push(`/days-off`);
  };
  return (
    <div className="search-box user-search-box">
      <Form
        form={form}
        layout="horizontal"
        labelCol={{
          span: constant.LABEL_COL.LABEL_COL_8,
        }}
        wrapperCol={{
          span: constant.WRAPPER_COL.WRAPPER_COL_14,
        }}
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
              label="Name"
              name="name"
            >
              <Input onChange={handleChange} placeholder="Name" />
            </Form.Item>
          </Col>
          <Col span={7}></Col>
          <Col span={6}>
            <Form.Item
              className="search-box_item search-box_item--choose"
              label="Quick choose"
            >
              <Select
                value={quickChooseValue}
                onChange={onChangeValueQuickChoose}
                placeholder={t('RADIO_INPUT.QUICK_CHOOSE')}
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
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={9}>
            <Form.Item
              className="search-box_item search-box_item--date"
              label="Contract"
            >
              <DatePicker.RangePicker
                value={[currentContractDateBegin, currentContractDateEnd]}
                placeholder={[constant.FORMAT_DATE, constant.FORMAT_DATE]}
                onChange={onChangeContractDate}
                format={constant.FORMAT_DATE}
              />
            </Form.Item>
          </Col>
          <Col span={7}></Col>
          <Col span={6}>
            <div className="search-box-button">
              <Button onClick={handleClear}>{t('button.clear')}</Button>
              <Button type="primary" onClick={handleSearch}>
                {t('button.search')}
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default DayOffSearchBox;
