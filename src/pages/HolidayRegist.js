import React from 'react';
import { useSelector } from 'react-redux';
import HolidayRegistInput from '../components/Holiday/HolidayRegistInput';
import '../css/HolidayRegist.css';

function HolidayRegist() {
  const isSideBarOpen = useSelector(
    (state) => state.sideBarReducer.isSideBarOpen,
  );

  return (
    <>
      <div
        style={{ marginLeft: isSideBarOpen ? '230px' : '56px' }}
        className="holiday-registration-content"
      >
        <HolidayRegistInput />
      </div>
    </>
  );
}

export default HolidayRegist;
