import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DatePicker } from 'antd';
import moment from 'moment';
import constants from '../../constants/htmlConstants';
import initialState from '../../constants/initialState';

function UserSearch() {
  const { t, i18n } = useTranslation();
  const [componentSize, setComponentSize] = useState('default');
  const [quickChooseValue, setQuickChooseValue] = useState();
  const [currentContractStatus, setCurrentContractStatus] = useState();
  const [currentEmployeeStatus, setCurrentEmployeeStatus] = useState(1);
  const [currentFullName, setCurrentFullName] = useState('');
  const [currentContractDateBegin, setCurrentContractDateBegin] = useState();
  const [currentContractDateEnd, setCurrentContractDateEnd] = useState();
  const addDays = (dateObj, numDays) => {
    dateObj.setDate(dateObj.getDate() + numDays);
    return dateObj;
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
  function hanldReset() {
    document.getElementsByClassName('myform').reset();
  }
  return (
    <div className="search-box">
      <form
        className="row"
        id="myform"
        style={{ padding: '20px', marginLeft: '40px' }}
      >
        <div className="col-4 form-group row">
          <label className="col-sm-4 col-form-label">{t('LABEL.NAME')}</label>
          <div className="col-sm-8">
            <input
              type="name"
              className="form-control"
              id="exampleFormControlInput1"
              value={currentFullName}
              onChange={onChangeFullName}
              placeholder={t('LABEL.NAME')}
            />
          </div>
        </div>
        <div className="col-4 form-group row">
          <label className="col-sm-4 col-form-label">
            {t('TABLE.COLUMN_TITLE.STATUS')}
          </label>
          <div className="col-sm-8">
            <select
              value={currentContractStatus}
              onChange={onChangeContractStatus}
              id="disabledSelect"
              placeholder={t('TABLE.COLUMN_TITLE.STATUS')}
              class="form-control"
            >
              <option value=""> {t('TABLE.COLUMN_TITLE.STATUS')}</option>
              <option value="0"> {t('RADIO_INPUT.SIGNED')}</option>
              <option value="1"> {t('RADIO_INPUT.RESIGNED')}</option>
            </select>
          </div>
        </div>
        <div className="col-4 form-group row">
          <label className="col-sm-4 col-form-label">
            {t('TABLE.COLUMN_TITLE.EMPLOYEE_STATUS')}
          </label>
          <div className="col-sm-8">
            <select
              onChange={onChangeEmployeeStatus}
              value={currentEmployeeStatus}
              id="disabledSelect"
              placeholder={t('TABLE.COLUMN_TITLE.STATUS')}
              class="form-control"
            >
              <option value={initialState.employee_status.all}>
                {' '}
                {t('RADIO_INPUT.ALL')}
              </option>
              <option selected value={initialState.employee_status.active}>
                {' '}
                {t('RADIO_INPUT.AVAILABLE')}
              </option>
              <option value={initialState.employee_status.inActive}>
                {' '}
                {t('RADIO_INPUT.INACTIVE')}
              </option>
            </select>
          </div>
        </div>
        <div className="col-4 form-group row">
          <label className="col-sm-4 col-form-label">
            {t('LABEL.CONTRACT')}
          </label>
          <div className="col-sm-8">
            <DatePicker.RangePicker
              value={[currentContractDateBegin, currentContractDateEnd]}
              placeholder={[constants.FORMAT_DATE, constants.FORMAT_DATE]}
              onChange={onChangeContractDate}
              format={constants.FORMAT_DATE}
            />
          </div>
        </div>
        <div className="col-4 form-group row">
          <label className="col-sm-4 col-form-label">
            {t('RADIO_INPUT.QUICK_CHOOSE')}
          </label>
          <div className="col-sm-8">
            <select
              onChange={onChangeValueQuickChoose}
              value={quickChooseValue}
              id="disabledSelect"
              placeholder={t('TABLE.COLUMN_TITLE.STATUS')}
              className="form-control"
            >
              <option> {t('RADIO_INPUT.QUICK_CHOOSE')}</option>
              <option value={0}> {t('RADIO_INPUT.TODAY')}</option>
              <option value={1}> {t('RADIO_INPUT.THIS_WEEK')}</option>
              <option value={2}> {t('RADIO_INPUT.LAST_WEEK')}</option>
              <option value={3}> {t('RADIO_INPUT.THIS_MONTH')}</option>
              <option value={4}> {t('RADIO_INPUT.LAST_MONTH')}</option>
            </select>
          </div>
        </div>

        <div className="col-4">
          <div className="search-box-button">
            <button className="btn btn-outline-primary" onclick={hanldReset}>
              Reset
            </button>
            <button className="btn btn-primary">{t('button.search')}</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default UserSearch;
