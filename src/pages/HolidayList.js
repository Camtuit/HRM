import React from 'react'
import Header from '../components/Header'
import HolidaySearchBox from '../components/HolidaySearchBox'
import HolidayTable from '../components/HolidayTable';
import SideBar from '../components/SideBar'
import '../css/HolidayList.css';
import { useSelector } from 'react-redux';

function HolidayList() {
    //get state from redux
    const isSideBarOpen = useSelector(state => state.sideBarReducer.isSideBarOpen);

    return (
        <div>
            <Header />
            <SideBar />

            <div style={{marginLeft: isSideBarOpen? "230px" : "56px"}} className="holiday-list-content">
                <HolidaySearchBox />
                <HolidayTable />
            </div>
           
        </div>
    )
}

export default HolidayList
