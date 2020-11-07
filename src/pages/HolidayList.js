import React from 'react';
import { useSelector } from 'react-redux';

import HolidaySearchBox from '../components/Holiday/HolidaySearchBox';
import HolidayTable from '../components/Holiday/HolidayTable';
import '../css/HolidayList.css';

function HolidayList() {
  const isSideBarOpen = useSelector(
    (state) => state.sideBarReducer.isSideBarOpen,
  );

  return (
    <div
      style={{ marginLeft: isSideBarOpen ? '230px' : '56px' }}
      className="holiday-list-content"
    >
      <HolidaySearchBox />
      <HolidayTable />
    </div>
  );
}

export default HolidayList;
