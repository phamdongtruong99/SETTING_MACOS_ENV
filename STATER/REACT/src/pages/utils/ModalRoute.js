import React from 'react';
import { Modal } from 'antd';
import useRouter from 'hooks/useRouter';
import PropTypes from 'prop-types';

const ModalRoute = ({ component, path, ...rest }) => {
  const { location, replace } = useRouter();
  const visible = !!(location.hash && location.hash === path);
  const handleCancle = () => {
    replace(`${location.pathname}${location.search}`);
  };
  return (
    <Modal {...rest} visible={visible} onCancel={handleCancle}>
      {React.createElement(component)}
    </Modal>
  );
};

ModalRoute.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string,
};

export default ModalRoute;
