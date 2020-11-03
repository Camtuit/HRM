import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../layouts/Header';
import SideBar from '../layouts/SideBar';
import SkillSearchBox from '../components/Skill/SkillSearchBox';
import SkillTable from '../components/Skill/SkillTable';
import '../css/SkillList.css';

function SkillList() {
  const isSideBarOpen = useSelector(
    (state) => state.sideBarReducer.isSideBarOpen,
  );
  return (
    <div>
      <SideBar />
      <Header />
      <div
        style={{ marginLeft: isSideBarOpen ? '230px' : '56px' }}
        className="skill-list-content"
      >
        <SkillSearchBox />
        <SkillTable />
      </div>
    </div>
  );
}
export default SkillList;
