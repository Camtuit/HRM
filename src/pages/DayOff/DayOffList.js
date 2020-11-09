import React from 'react';

import DayoffSearchBox from '../../components/Dayoff/DayOffSearchBox';
import DayOffTable from '../../components/Dayoff/DayOffTable';
import WrapperContent from '../../components/commons/WrapperContentPage';

import '../../css/DayOffList.css';

function DayOffList() {
  return (
    <WrapperContent className="dayoff-list-content">
      <DayoffSearchBox />
      <DayOffTable />
    </WrapperContent>
  );
}

export default DayOffList;
