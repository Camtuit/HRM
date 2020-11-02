import React, { useState } from 'react'
import { Form, Input, Button, DatePicker } from 'antd';
import moment from 'moment';
import '../css/HolidayRegistInput.css';
import { useHistory } from 'react-router-dom';

function HolidayRegistInput() {
  const [componentSize, setComponentSize] = useState('default');
  const [holidayDate, setHolidayDate] = useState(new Date());
  const [holidayDay, setHolidayDay] = useState(new Date());
  const [holidayName, setHolidayName] = useState('');
  const dateFormat = 'DD/MM/YYYY';
  const history = useHistory();

  const handleChangeLayoutForm = ({ size }) => {
    setComponentSize(size);
  };

  const handleChangeHolidayName = (e) => {
    setHolidayName(e.target.value);
  };

  const handleChangeHolidayDate = (date, dateString) => {
    setHolidayDate(dateString);
  };

  const handleContinueRegistHoliday = () => {
    setHolidayName('');
  };

  const handleSubmitRegistHoliday = () => {
    setHolidayName('');
    history.push('/holiday');
  };

  return (
      <>
        <Form
          labelCol={{
          span: 4,
          }}
          wrapperCol={{
          span: 5,
          }}
          layout="horizontal"
          initialValues={{
          size: componentSize,
          }}
          onValuesChange={handleChangeLayoutForm}
          size={componentSize}
        >
          <div className="holiday-regist-field">
            <Form.Item label="Date">
              <DatePicker 
                defaultValue={moment(holidayDate, dateFormat)}
                format={dateFormat}
                onChange={handleChangeHolidayDate}
              />
            </Form.Item>
            <Form.Item label="Notes">
              <Input 
                placeholder="Notes" 
                value={holidayName} 
                onChange={handleChangeHolidayName} 
              />
                defaultValue={moment(holidayDay, dateFormat)}
                format={dateFormat}
              />
            </Form.Item>
            <Form.Item label="Notes">
              <Input placeholder="Notes" value={holidayName} onChange={handleChangeHolidayName} />
            </Form.Item> 
          </div>
          <div className="holiday-regist-button">
          <Button 
            size="large" 
            onClick={handleContinueRegistHoliday}
          >
            Continue
          </Button>
          <Button 
            type="primary" 
            size="large"
            onClick={handleSubmitRegistHoliday}
          >
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
}

export default HolidayRegistInput
