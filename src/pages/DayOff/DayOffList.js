import React from 'react';
import { useTranslation } from 'react-i18next';
import DayoffSearchBox from '../../components/Dayoff/DayOffSearchBox';
import DayOffTable from '../../components/Dayoff/DayOffTable';
import WrapperContent from '../../components/commons/WrapperContentPage';

import '../../css/DayOffList.css';

function DayOffList() {
  const [t, i18n] = useTranslation();
  return (
    <WrapperContent className="dayoff-list-content">
      <h2 className="list-title">{t('day_off.day_off_list')}</h2>
      <DayoffSearchBox />
      <DayOffTable />
    </WrapperContent>
  );
}

export default DayOffList;
