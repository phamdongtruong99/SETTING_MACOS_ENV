import React from 'react';
import { Modal } from 'antd';
import useRouter from 'hooks/useRouter';
import PropTypes from 'prop-types';

const ModalRoute = ({ component, path, width, ...rest }) => {
  const { location, replace } = useRouter();
  const visible = !!(location.hash && location.hash === path);
  const handleCancle = () => {
    replace({
      pathname: location.pathname,
      search: location.search,
      state: location.state,
    });
  };
  return (
    <Modal
      {...rest}
      visible={visible}
      onCancel={handleCancle}
      destroyOnClose
      width={width}
      footer={null}
    >
      {React.createElement(component)}
    </Modal>
  );
};

ModalRoute.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ModalRoute;
