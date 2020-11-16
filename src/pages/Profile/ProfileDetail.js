import React from 'react';
import WrapperContentPage from '../../components/commons/WrapperContentPage';
import textLabel, {LIST} from '../../constants/textLabel';
import { Image, Row,Col} from 'antd';
import ProfileTable from '../../components/Profile/ProfileTable';
import ProfileButton from '../../components/Profile/ProfileButton';
export default function ProfileDetail(){
    return(
        <WrapperContentPage>
               <Row gutter = {[16, 16]}>
                <Col xs={{ span: 16, offset: 1 }} lg={{ span: 4, offset: 2 }}> <h2 span = {6} className="title-profile-detail">{LIST.MY_PROFILE}</h2></Col>
                <Col xs={{ span: 16, offset: 1 }} lg={{ span: 6, offset: 2 }} ><Image  span = {10} src="https://www.flaticon.com/premium-icon/icons/svg/2202/2202112.svg" width="150px"></Image></Col>
               </Row>
            <ProfileTable>
            </ProfileTable>
            <ProfileButton className = "row-button"></ProfileButton>
        </WrapperContentPage>
        

    ) 
}

