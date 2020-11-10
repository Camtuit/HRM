import React, { useState } from 'react';

import HolidaySearchBox from '../../components/Holiday/HolidaySearchBox';
import HolidayTable from '../../components/Holiday/HolidayTable';
import '../../css/HolidayList.css';
import WrapperContent from '../../components/commons/WrapperContentPage';

function HolidayList() {
  const [currentYear, setCurrentYear] = useState(2020);
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <WrapperContent className="holiday-list-content">
      <h2 className="list-title">Holiday List</h2>
      <HolidaySearchBox
        setCurrentYear={setCurrentYear}
        setCurrentPage={setCurrentPage}
      />
      <HolidayTable
        currentYear={currentYear}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </WrapperContent>
  );
}

export default HolidayList;
