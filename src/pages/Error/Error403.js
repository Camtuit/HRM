import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import Error from '../../assets/images/error.png';

function Error403() {
  const { t, i18n } = useTranslation();
  return (
    <div className="Error">
      <header className="header-error">
        <div className="container-error">
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div>
                <h2 className="container-error-h2">{t('error.403')}</h2>
                <p className="container-error-p"> {t('error.ACCESS_DENIED')}</p>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <img src={Error}></img>
            </Col>
          </Row>
        </div>
      </header>
      <main className="content-error">
        <div className="container-error">
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <h2 className="content-error-text">
                {t('error.error403')}{' '}
                <Link to="/login">{t('error.please_Login')}</Link>
              </h2>
            </Col>
          </Row>
        </div>
      </main>
    </div>
  );
}

export default Error403;
