import React, { useContext, useState } from 'react';
import { Upload, Icon, Form, message as Message } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RestForm from './RestForm';

export const StyledUpload = styled(Upload)`
  .ant-upload {
    width: 128px;
    height: 128px;
  }
`;

const RestUploadImage = ({ value, label, required, defaultValue, message }) => {
  const [loading, setLoading] = useState();
  const [image, setImage] = useState(false);

  const { form } = useContext(RestForm);
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
      Message.success(`${info.file.name} file uploaded successfully`);
      setImage(info.file.response);
      setLoading(false);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  return (
    <Form.Item label={label}>
      {form.getFieldDecorator(value, {
        rules: [
          {
            required,
            message,
          },
        ],
        initialValue: defaultValue,
      })(
        <StyledUpload
          listType="picture-card"
          showUploadList={false}
          accept="image/*"
          action="https://netjs.herokuapp.com/users/uploads"
          onChange={handleChange}
        >
          {image ? (
            <img src={image} alt="avatar" style={{ width: '100%' }} />
          ) : (
            uploadButton
          )}
        </StyledUpload>,
      )}
    </Form.Item>
  );
};

RestUploadImage.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.any,
  required: PropTypes.bool,
  message: PropTypes.string,
};

RestUploadImage.defaultProps = {
  required: true,
  message: 'Không được để trống',
};

export default RestUploadImage;
