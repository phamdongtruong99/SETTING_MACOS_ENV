import React, { useState } from 'react';
import { Upload, Icon, message } from 'antd';
import styled from 'styled-components';

export const StyledUpload = styled(Upload)`
  .ant-upload {
    width: 128px;
    height: 128px;
  }
`;

const UploadImage = React.forwardRef(() => {
  const [loading, setLoading] = useState();
  const [image, setImage] = useState(false);

  const uploadButton = (
    <div>
      <Icon type={loading ? 'loading' : 'plus'} />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      setImage(info.file.response);
      setLoading(false);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  const fileList = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ];
  return (
    <StyledUpload
      listType="picture-card"
      showUploadList={false}
      accept="image/*"
      action="https://netjs.herokuapp.com/users/uploads"
      onChange={handleChange}
      fileList={fileList}
      defaultFileList={fileList}
    >
      {image ? (
        <img src={image} alt="avatar" style={{ width: '100%' }} />
      ) : (
        uploadButton
      )}
    </StyledUpload>
  );
});

UploadImage.propTypes = {};

export default UploadImage;
