import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../layouts/Header';
import HolidaySearchBox from '../components/Holiday/HolidaySearchBox';
import HolidayTable from '../components/Holiday/HolidayTable';
import SideBar from '../layouts/SideBar';
import '../css/HolidayList.css';

function HolidayList() {
  // get state from redux
  const isSideBarOpen = useSelector(
    (state) => state.sideBarReducer.isSideBarOpen,
  );

  return (
    <div>
      <div
        style={{ marginLeft: isSideBarOpen ? '230px' : '56px' }}
        className="holiday-list-content"
      >
        <HolidaySearchBox />
        <HolidayTable />
      </div>
    </div>
  );
}

export default HolidayList;
