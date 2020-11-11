import React from 'react';
import { useSelector } from 'react-redux';
import DayOffRegistInput from '../../components/Dayoff/DayOffRegistInput';
import WrapperContent from '../../components/commons/WrapperContentPage';
import '../../css/DayOffRegist.css';

function DayOffRegist() {
  return (
    <WrapperContent className="dayoff-registration-content">
      <DayOffRegistInput />
    </WrapperContent>
  );
}

export default DayOffRegist;
