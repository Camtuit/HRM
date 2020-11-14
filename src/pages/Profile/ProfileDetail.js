import React from 'react';
import WrapperContentPage from '../../components/commons/WrapperContentPage';
import ProfileTable from '../../components/Profile/ProfileTable'
export default function ProfileDetail(){
    return(
        <WrapperContentPage>
               <h2 className="title-profile-detail">My Profile</h2>
            <ProfileTable>
            </ProfileTable>
        </WrapperContentPage>
        

    ) 
}

