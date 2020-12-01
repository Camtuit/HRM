import '../../assets/scss/profile/index.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, Col, Row } from 'antd';

export default function ProfileButton() {
  return (
    <Row gutter={[16, 16]} className="row-bnt">
      <Col xs={{ span: 4, offset: 1 }} lg={{ span: 2, offset: 2 }}>
        <Link to="/holidays">
          <Button type="primary" className="btn-profile">
            List day Off
          </Button>
        </Link>
      </Col>
      <Col xs={{ span: 4, offset: 1 }} lg={{ span: 2, offset: 2 }}>
        <Link to="/request-devices">
          <Button type="primary" className="btn-profile">
            Request Device
          </Button>
        </Link>
      </Col>
      <Col xs={{ span: 4, offset: 2 }} lg={{ span: 2, offset: 2 }}>
        <Link to="/dayoff">
          <Button type="primary" className="btn-profile">
            Submit Day Off
          </Button>
        </Link>
      </Col>
    </Row>
  );
}
