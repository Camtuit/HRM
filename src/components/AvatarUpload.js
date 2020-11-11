import React, { useState, useEffect } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

const AvatarUpload = () => {
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
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
      action="http://3.138.207.155:8080/api/upload"
      listType="picture-card"
      fileList={fileList}
      onChange={onChange}
      onPreview={onPreview}
      name="image"
    >
      {fileList.length < 1 && '+ Avatar'}
    </Upload>
  );
};

export default AvatarUpload;
