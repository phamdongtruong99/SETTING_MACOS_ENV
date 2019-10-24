import { useState, useCallback } from 'react';

export const useModal = config => {
  const modalConfig = config || {} as UseModalConfig;
  const {
    defaultVisible = false,
  } = modalConfig;

  const [visible, setVisible] = useState(defaultVisible);
  const show = useCallback(() => setVisible(true), [visible]);
  const close = useCallback(() => setVisible(false), [visible]);

  const modalProps = {
    visible,
    onCancel: close,
  };
  return {
    visible,
    show,
    close,
    modalProps,
  };
};

// example: https://codesandbox.io/s/usemodalexample1-2hrtp?from-embed
// https://ant-design.github.io/sunflower/hooks/sunflower-antd-modal.html#examples