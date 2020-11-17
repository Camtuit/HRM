import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import QRCode from 'qrcode.react';
import { Row, Button, Col } from 'antd';
import constants, { BUTTON } from '../../constants/htmlConstants';
import '../../css/DeviceDetail.css';
import Assigned from '../../components/Device/Assigned';
import WrapperContent from '../../components/commons/WrapperContentPage';
import { format } from 'prettier';
function DeviceDetail() {
  const downloadQR = () => {
    const canvas = document.getElementById('qrcode');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'QR-code.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible[true];
  };
  return (
    <WrapperContent>
      <h2
        style={{
          margin: '20px',
          color: '#68ae00',
          fontSize: '1.8rem',
          fontWeight: '600',
        }}
      >
        Device information
      </h2>
      <div className="device-detail-content">
        <div className="device-info">
          <div>
            <div className="device-info-item">
              <div>Device name:</div> <div>Macbook Pro 15inch</div>
            </div>

            <div className="device-info-item">
              <div>Serial number:</div> <div>MP-0001</div>
            </div>

            <div className="device-info-item">
              <div>Input date:</div> <div>20/10/2020</div>
            </div>

            <div className="device-info-item">
              <div>Holder:</div> <div>Nguyễn Văn A</div>
            </div>
          </div>
        </div>

        <div className="qr-code">
          <QRCode
            id="qrcode"
            value={window.location.href}
            size={270}
            level={'H'}
            includeMargin={true}
          />
          <i class="fas fa-download"></i>
        </div>
        <div className="device-detail-btn">
          <Assigned
            title="Choose Holder User"
            content="Holder:"
            onOk={() => console.log('true')}
          ></Assigned>

          <Button>Return</Button>
        </div>
      </div>
    </WrapperContent>
  );
}
export default DeviceDetail;
