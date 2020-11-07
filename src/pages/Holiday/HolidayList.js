import React from 'react';

import HolidaySearchBox from '../../components/Holiday/HolidaySearchBox';
import HolidayTable from '../../components/Holiday/HolidayTable';
import '../../css/HolidayList.css';
import WrapperContent from '../../components/commons/WrapperContentPage';

function HolidayList() {
  return (
    <WrapperContent className="holiday-list-content">
      <HolidaySearchBox />
      <HolidayTable />
    </WrapperContent>
  );
}

export default HolidayList;
