import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar';
import SkillRegistInput from '../components/SkillRegistInput';
import '../css/SkillRegist.css';

function SkillRegist() {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="skill-registration-content">
        <SkillRegistInput />
      </div>
    </div>
  );
}

export default SkillRegist;
