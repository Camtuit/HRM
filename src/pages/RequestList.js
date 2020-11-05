import React from 'react';
import { useSelector } from 'react-redux';
import '../css/SkillList.css';
import RequestSearchBox from '../components/Request/RequestSearchBox';
import RequestTable from '../components/Request/RequestTable';

export default function RequestList() {
  const isSideBarOpen = useSelector(
    (state) => state.sideBarReducer.isSideBarOpen,
  );
  return (
    <div>
      <div
        style={{ marginLeft: isSideBarOpen ? '230px' : '56px' }}
        className="skill-list-content"
      >
        <RequestSearchBox />
        <RequestTable />
      </div>
    </div>
  );
}
