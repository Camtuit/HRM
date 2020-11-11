import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import QRCode from 'qrcode.react';
import { Button } from 'antd';
import '../../css/DeviceDetail.css';
import WrapperContent from '../../components/commons/WrapperContentPage';

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

        <div className="qr-code">
          <QRCode
            id="qrcode"
            value={window.location.href}
            size={270}
            level={'H'}
            includeMargin={true}
          />
          <Button type="primary" onClick={downloadQR}>
            Download QR
          </Button>
        </div>
      </div>
    </WrapperContent>
  );
}

export default DeviceDetail;
