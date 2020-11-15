import React from 'react';
import WrapperContentPage from '../../components/commons/WrapperContentPage';
import textLabel,{LIST} from '../../constants/textLabel';
export default function ProfileDetail(){
    return(
        <WrapperContentPage>
               <h2 className="title-profile-detail">{LIST.MY_PROFILE}</h2>
        </WrapperContentPage>
        

    ) 
}

