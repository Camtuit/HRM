import React from 'react';
import { Link } from 'react-router-dom';
import error401 from '../../assets/images/error-401.png';
import ReactLogo from '../../assets/images/nal_logo.svg';
import { Row, Col, Image } from 'antd';
import { error } from '../../constants/errorText';

function Error401() {
  return (
    <div className="Error">
      <header></header>
      <header className="header-error">
        <div className="container-error">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <div>
                <h2 className="ing">401</h2>
                <p className="p">UNAUTHORIZED</p>
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
                {error.error401}
                <Link to="/login">{error.please_Login}</Link>
              </h2>
            </Col>
          </Row>
        </div>
      </main>
    </div>
  );
}

export default Error401;
