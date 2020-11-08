import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import QRCode from 'qrcode.react';
import { Button } from 'antd';
import '../../css/DeviceDetail.css';

function DeviceDetail() {
  const isSideBarOpen = useSelector(
    (state) => state.sideBarReducer.isSideBarOpen,
  );

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
    <div
      className="device-detail-content"
      style={{ marginLeft: isSideBarOpen ? '230px' : '56px' }}
    >
      <div className="device-info">
        <p>Device information</p>
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
  );
}

export default DeviceDetail;
