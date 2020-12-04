import React from 'react';
import { Image, Row, Col, Button } from 'antd';
import WrapperContentPage from '../../components/commons/WrapperContentPage';
import textLabel, { LIST } from '../../constants/textLabel';
import ProfileTable from '../../components/Profile/ProfileTable';
import ProfileButton from '../../components/Profile/ProfileButton';
import { useTranslation } from 'react-i18next';
export default function ProfileDetail() {
  const [t, i18n] = useTranslation();
  return (
    <WrapperContentPage>
      <div className="profile-detail">
        <div className="profile-detail-header">
          <h2 span={6} className="title-profile-detail">
            {t('profile.my_profile')}
          </h2>
        </div>

        <ProfileTable />
        <ProfileButton />
      </div>
    </WrapperContentPage>
  );
}
