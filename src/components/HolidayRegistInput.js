import React, { useRef, useState } from 'react'
import { Form, Input, Button, DatePicker } from 'antd';
import moment from 'moment';
<<<<<<< HEAD
import '../css/HolidayRegistInput.css';
=======
// import '../css/HolidayRegistInput.css';
>>>>>>> d6cfe1d... fix Search box layout
import { useHistory } from 'react-router-dom';

function HolidayRegistInput() {
  const [componentSize, setComponentSize] = useState('default');
  const today = new Date();
  const [holidayDate, setHolidayDate] = useState(today);
  const [holidayName, setHolidayName] = useState('');
  const dateFormat = 'DD/MM/YYYY';
  const holidayDateInput = useRef(null);
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
    setHolidayDate(today);
    setHolidayName('');
    holidayDateInput.current.focus();
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
                ref={holidayDateInput}
                value={moment(holidayDate === '' ? today : holidayDate, dateFormat)}
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
