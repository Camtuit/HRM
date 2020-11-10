import React, { useState } from 'react';

import SkillSearchBox from '../../components/Skill/SkillSearchBox';
import SkillTable from '../../components/Skill/SkillTable';
import WrapperContent from '../../components/commons/WrapperContentPage';
import '../../css/SkillList.css';

function SkillList() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentName, setCurrentName] = useState('');
  return (
    <WrapperContent className="skill-list-content">
      <h2 className="list-title">Skill List</h2>
      <SkillSearchBox
        setCurrentName={setCurrentName}
        setCurrentPage={setCurrentPage}
      />
      <SkillTable
        currentName={currentName}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </WrapperContent>
  );
}
export default SkillList;
