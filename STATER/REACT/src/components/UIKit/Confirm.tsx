import React, { useCallback, useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { ModalContent } from './styles';

const Confirm = React.forwardRef(
  ({ title, description, acceptButtonTitle, cancelButtonTitle, onConfirm, loading, onCancel }, ref) => {
    const [visible, setVisible] = useState(false);
    const [selectId, setSelectID] = useState('');

    const toggleVisible = useCallback(
      (id) => {
        setVisible(!visible);
        id && setSelectID(id);
      },
      [visible]
    );

    const onClose = () => {
      setVisible(false);
      onCancel && onCancel();
    };
    
    useImperativeHandle(ref, () => ({
      toggleVisible,
      onClose,
    }));

    

    return (
      <Modal
        centered
        visible={visible}
        onCancel={onClose}
        footer={null}
        width={637}
        bodyStyle={{
          padding: '44px 39px',
        }}
        className="custom-modal"
      >
        <ModalContent>
          <h2 style={{ marginBottom: '18px' }}>{title}</Title>
          <p>{description}</p>
          <div className="row">
            <Button
              shape="round"
              onClick={onClose}
              type="ghost"
              size="large"
            >
              {cancelButtonTitle}
            </Button>
            <Button
              shape="round"
              loading={loading}
              size="large"
              onClick={() => onConfirm(selectId)}
              type="primary"
            >
              {acceptButtonTitle}
            </Button>
          </div>
        </ModalContent>
      </Modal>
    );
  }
);

export default Confirm;
