import '../../assets/scss/profile/index.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Button, Col, Row } from 'antd';
export default function ProfileButton() {
  const { t, i18n } = useTranslation();
  return (
    <div className="profile-button">
      <Row className="row-bnt">
        <Col xs={0} sm={0} md={4} lg={4} xl={4}>
          {' '}
        </Col>
        <Col xs={8} sm={8} md={6} lg={6} xl={4}>
          <Link to="/holidays">
            <Button type="primary" className="btn-profile">
              {t('profile.list_day_off')}
            </Button>
          </Link>
        </Col>
        <Col xs={8} sm={8} md={6} lg={6} xl={4}>
          <Link to="/request-devices">
            <Button type="primary" className="btn-profile">
              {t('profile.request_device')}
            </Button>
          </Link>
        </Col>
        <Col xs={8} sm={8} md={6} lg={6} xl={4}>
          <Link to="/dayoffs">
            <Button type="primary" className="btn-profile">
              {t('profile.submit_day_off')}
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
