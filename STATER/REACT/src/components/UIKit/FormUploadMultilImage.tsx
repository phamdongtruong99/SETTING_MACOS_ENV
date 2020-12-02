import { uploadPhoto } from '@/api/upload';
import { useToggle } from '@/hooks';
import { uuidv4 } from '@/utils';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Form, message, Modal, Upload } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { FC, useEffect, useState } from 'react';

interface Props {
  name: string;
  label?: string;
  required?: boolean;
  messageRequire?: string;
  disabled?: boolean;
  form: FormInstance<unknown>;
}

const FormUploadMultipleImage: FC<Props> = ({
  name,
  label,
  required,
  messageRequire,
  disabled,
  form,
}) => {
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [visible, openOpen, onClose] = useToggle(false);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (form.getFieldValue(name)) {
      setFileList(
        form.getFieldValue(name).map((url) => ({
          uid: uuidv4(),
          name: 'image.png',
          status: 'done',
          response: url,
          url: url,
        })),
      );
    }
  }, [form.getFieldValue(name)]);

  const uploadButton = (
    <div className="flex items-center">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text" style={{ marginLeft: 10 }}>
        Upload
      </div>
    </div>
  );

  const handlePreview = (file) => {
    setImage(file.response);
    setTitle(file.name);
    openOpen();
  };

  const handleRemove = (removeFile) => {
    const newFileList = fileList.filter((file) => file.uid !== removeFile.uid);
    setFileList(newFileList);
  };

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      form.setFieldsValue({
        [name]: info.fileList.map((file) => file.response),
      });
      setLoading(false);
    } else if (info.file.status === 'error') {
      setLoading(false);
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
      valuePropName="fileList"
    >
      <Upload
        disabled={disabled}
        listType="picture-card"
        name="file"
        accept="image/*"
        style={{ width: '100%' }}
        customRequest={(req) => uploadPhoto(req, name)}
        onChange={handleChange}
        onPreview={handlePreview}
        fileList={fileList}
        onRemove={handleRemove}
        withCredentials
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal visible={visible} title={title} footer={null} onCancel={onClose}>
        <img alt="example" style={{ width: '100%' }} src={image} />
      </Modal>
    </Form.Item>
  );
};

FormUploadMultipleImage.defaultProps = {
  required: true,
};

export default FormUploadMultipleImage;
