import React from 'react';
import PropTypes from 'prop-types';
import { Layout as AntdLayout } from 'antd';
import SideBar from './SideBar';

const { Content } = AntdLayout;

const PrivateLayout = ({ children }) => {
  return (
    <div>
      <AntdLayout>
        <SideBar />
        <AntdLayout>
          <Content className="ml-260 bg-container">
            <div className="overflow-x-hidden overflow-y-auto flex flex-col px-60 pt-40">
              {children}
            </div>
          </Content>
        </AntdLayout>
      </AntdLayout>
    </div>
  );
};

PrivateLayout.propTypes = {
  children: PropTypes.node,
};

export default PrivateLayout;
