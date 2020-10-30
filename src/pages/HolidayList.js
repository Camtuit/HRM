import React from 'react'
import Header from '../components/Header'
import HolidaySearchBox from '../components/HolidaySearchBox'
import HolidayTable from '../components/HolidayTable';
import SideBar from '../components/SideBar'
import '../css/HolidayList.css';

function HolidayList() {
    return (
        <div>
            <Header />
            <SideBar />

            <div className="holiday-list-content">
                <HolidaySearchBox />
                <HolidayTable />
            </div>
           
        </div>
    )
}

export default HolidayList
