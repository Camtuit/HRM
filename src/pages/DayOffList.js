import React from 'react';
import { useSelector } from 'react-redux';
import DayoffSearchBox from '../components/Dayyoff/DayOffSearchBox';
import Header from '../layouts/Header';
import SideBar from '../layouts/SideBar';
import '../css/DayOffList.css';
import DayOffTable from '../components/Dayyoff/DayOffTable';

function DayOffList() {
  const isSideBarOpen = useSelector(
    (state) => state.sideBarReducer.isSideBarOpen,
  );

  return (
    <>
      <Header />
      <SideBar />
      <div
        style={{ marginLeft: isSideBarOpen ? '230px' : '56px' }}
        className="dayoff-list-content"
      >
        <DayoffSearchBox />
        <DayOffTable />
      </div>
    </>
  );
}

export default DayOffList;
