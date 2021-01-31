import React, { useCallback, useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { ModalContent } from './styles';

const ConfirmModal = React.forwardRef(
  ({ title, description, acceptButtonTitle, onConfirm, loading, onCancel }, ref) => {
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation();
    const [selectId, setSelectID] = useState('');

    const toggleVisible = useCallback(
      (id) => {
        setVisible(!visible);
        id && setSelectID(id);
      },
      [visible]
    );

    useImperativeHandle(ref, () => ({
      toggleVisible,
    }));

    const onClose = () => {
      setVisible(false);
      onCancel && onCancel();
    };

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
              className="btn-cancel"
              onClick={onClose}
              type="ghost"
              size="large"
            >
              {t('button.cancel')}
            </Button>
            <Button
              shape="round"
              loading={loading}
              size="large"
              className="btn-confirm"
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
ConfirmModal.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  acceptButtonTitle: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  loading: PropTypes.bool,
};

export default ConfirmModal;
