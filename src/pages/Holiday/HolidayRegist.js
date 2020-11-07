import React from 'react';
import HolidayRegistInput from '../../components/Holiday/HolidayRegistInput';
import '../../css/HolidayRegist.css';
import WrapperContent from '../../components/commons/WrapperContentPage';

function HolidayRegist() {
  return (
    <WrapperContent className="holiday-registration-content">
      <HolidayRegistInput />
    </WrapperContent>
  );
}

export default HolidayRegist;
