import React, { useState, useEffect } from 'react';
import { Upload, Icon, message, Modal } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { uploadPhoto } from 'api/crud';

export const StyledUpload = styled(Upload)`
  .ant-upload {
    width: 128px;
    height: 128px;
  }
`;

const UploadImage = ({ onOk, defaultImage }) => {
  const [loading, setLoading] = useState();
  const [image, setImage] = useState(null);
  useEffect(() => {
    setImage(defaultImage);
  }, [defaultImage]);

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
      setLoading(false);
      setImage(info.file.response.url);
      Modal.confirm({
        title: 'Do you want upload this photo',
        onOk() {
          onOk(info.file.response);
        },
        onCancel() {
          setImage(defaultImage);
        },
      });
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
      setLoading(false);
    }
  };

  return (
    <StyledUpload
      listType="picture-card"
      name="file"
      showUploadList={false}
      customRequest={uploadPhoto}
      onChange={handleChange}
      withCredentials
    >
      {image ? (
        <img src={image} alt="avatar" style={{ width: '100%' }} />
      ) : (
        uploadButton
      )}
    </StyledUpload>
  );
};

UploadImage.propTypes = {
  onOk: PropTypes.func,
  defaultImage: PropTypes.string,
};

export default UploadImage;
