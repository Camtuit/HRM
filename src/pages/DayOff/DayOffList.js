import React from 'react';

import DayoffSearchBox from '../../components/Dayoff/DayOffSearchBox';
import DayOffTable from '../../components/Dayoff/DayOffTable';
import WrapperContent from '../../components/commons/WrapperContentPage';

import '../../css/DayOffList.css';

function DayOffList() {
  return (
    <WrapperContent className="dayoff-list-content">
      <h2 className="list-title">Dayoff List</h2>
      <DayoffSearchBox />
      <DayOffTable />
    </WrapperContent>
  );
}

export default DayOffList;
