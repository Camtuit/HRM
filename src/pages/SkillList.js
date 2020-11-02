import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import SkillSearchBox from '../components/SkillSearchBox';
import SkillTable from '../components/SkillTable';
function SkillList(){
    return(
        <div>
            <SideBar />
            <Header />
            <div className= "skill-list-content">
                <SkillSearchBox />
                <SkillTable />
            </div>
        </div>
    )
}
export default SkillList;