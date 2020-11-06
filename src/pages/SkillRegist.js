import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../layouts/Header';
import SideBar from '../layouts/SideBar';
import SkillRegistInput from '../components/Skill/SkillRegistInput';
import '../css/SkillRegist.css';

function SkillRegist() {
  const isSideBarOpen = useSelector(
    (state) => state.sideBarReducer.isSideBarOpen,
  );

  return (
    <>
      <Header />
      <SideBar />
      <div
        style={{ marginLeft: isSideBarOpen ? '230px' : '56px' }}
        className="skill-registration-content"
      >
        <SkillRegistInput />
      </div>
    </>
  );
}

export default SkillRegist;
