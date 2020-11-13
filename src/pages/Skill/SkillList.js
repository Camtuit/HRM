import React, { useState } from 'react';

import SkillSearchBox from '../../components/Skill/SkillSearchBox';
import SkillTable from '../../components/Skill/SkillTable';
import WrapperContent from '../../components/commons/WrapperContentPage';
import '../../css/SkillList.css';

function SkillList() {
  const [currentName, setCurrentName] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <WrapperContent className="skill-list-content">
      <h2 className="list-title">Skill List</h2>
      <SkillSearchBox
        setCurrentPage={setCurrentPage}
        setCurrentName={setCurrentName}
      />
      <SkillTable
        currentName={currentName}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setCurrentName={setCurrentName}
      />
    </WrapperContent>
  );
}
export default SkillList;
