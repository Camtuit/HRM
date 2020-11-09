import React from 'react';

import SkillSearchBox from '../../components/Skill/SkillSearchBox';
import SkillTable from '../../components/Skill/SkillTable';
import WrapperContent from '../../components/commons/WrapperContentPage';
import '../../css/SkillList.css';

function SkillList() {
  return (
    <WrapperContent className="skill-list-content">
      <SkillSearchBox />
      <SkillTable />
    </WrapperContent>
  );
}
export default SkillList;
