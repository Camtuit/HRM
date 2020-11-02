import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import SkillSearchBox from '../components/SkillSearchBox';
import SkillTable from '../components/SkillTable';
import { useSelector } from 'react-redux';
function SkillList(){
    const isSideBarOpen = useSelector(state => state.sideBarReducer.isSideBarOpen);
    return(
        <div>
            <SideBar />
            <Header />
            <div style={{marginLeft: isSideBarOpen? "230px" : "56px"}} className= "skill-list-content">
                <SkillSearchBox />
                <SkillTable />
            </div>
        </div>
    )
}
export default SkillList;