import React from 'react';
import { useSelector } from 'react-redux';
import DayOffRegistInput from '../components/Dayoff/DayOffRegistInput';
import '../css/DayOffRegist.css';

function DayOffRegist() {
  const isSideBarOpen = useSelector(
    (state) => state.sideBarReducer.isSideBarOpen,
  );
  return (
    <div
      style={{ marginLeft: isSideBarOpen ? '230px' : '56px' }}
      className="dayoff-registration-content"
    >
      <DayOffRegistInput />
    </div>
  );
}

export default DayOffRegist;
