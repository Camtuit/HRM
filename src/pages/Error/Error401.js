import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Button } from 'antd';
import { useTranslation } from 'react-i18next';

function Error401() {
  const { t, i18n } = useTranslation();
  return (
    <div className="Error">
      <header></header>
      <header className="header-error">
        <div className="container-error">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <div>
                <h2 className="ing">{t('error.401')}</h2>
                <p className="p"> {t('error.UNAUTHORIZED')}</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Image src="https://img.pngio.com/online-statistics-manager-errors-png-400_300.png"></Image>
            </Col>
          </Row>
        </div>
      </header>
      <main className="content-error">
        <div className="container-error">
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <h2 className="content-error-text">
                {t('error.error401')}{' '}
                <Link to="/login">{t('error.please_Login')}</Link>
              </h2>
            </Col>
          </Row>
        </div>
      </main>
    </div>
  );
}

export default Error401;
