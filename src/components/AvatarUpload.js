import React, { useState, useEffect } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { useTranslation } from 'react-i18next';
import { fetchUserDetail } from '../apis/ProfileUserApi';
import { RESPONSE_CODE } from '../constants/errorText';
import Toast from './commons/ToastCommon';

const AvatarUpload = () => {
  const { t, i18n } = useTranslation();
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  console.log(fileList);
  useEffect(() => {}, [fileList]);
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <Upload
      action="http://api-php.dev-hrm.nals.vn/api/api/upload/"
      listType="picture-card"
      fileList={fileList}
      onChange={onChange}
      onPreview={onPreview}
      name="image"
    >
      {fileList.length < 1 && t('USER.USER_REGIST.AVATAR')}
    </Upload>
  );
};

export default AvatarUpload;
