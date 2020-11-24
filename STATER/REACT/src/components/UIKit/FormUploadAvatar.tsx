import { Avatar, Form, message, Upload } from 'antd';
import { FC, useEffect, useState } from 'react';
import { FormInstance } from 'antd/lib/form';
import { uploadPhoto } from '@/api/upload';
interface Props {
  name: string;
  label?: string;
  required?: boolean;
  messageRequire?: string;
  initialValue?: string;
  disabled?: boolean;
  form: FormInstance<unknown>;
  width?: number;
  height?: number;
}

const FormUploadAvatar: FC<Props> = ({
  name,
  label,
  required,
  messageRequire,
  disabled,
  width,
  height,
  initialValue,
  form,
}) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (form.getFieldValue(name)) {
      setImage(form.getFieldValue(name));
    }
  }, [form.getFieldValue(name)]);

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      return;
    }
    if (info.file.status === 'done') {
      setImage(info.file.response);
      form.setFieldsValue({
        [name]: info.file.response,
      });
    } else if (info.file.status === 'error') {
      form.setFieldsValue({
        [name]: null,
      });
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required,
          message: messageRequire,
        },
      ]}
      initialValue={initialValue}
    >
      <Upload
        disabled={disabled}
        name="file"
        accept="image/*"
        showUploadList={false}
        customRequest={(req) => uploadPhoto(req, name)}
        onChange={handleChange}
        withCredentials
      >
        {image ? (
          <Avatar style={{ width: width, height: height }} src={image} />
        ) : (
          <Avatar style={{ width: width, height: height }} />
        )}
      </Upload>
    </Form.Item>
  );
};

FormUploadAvatar.defaultProps = {
  required: true,
};

export default FormUploadAvatar;
