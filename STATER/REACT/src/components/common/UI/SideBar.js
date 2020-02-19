/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import I18n from 'i18next';
import { Layout, Menu, Icon } from 'antd';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { history } from '../../redux/store';
import FullLogo from '../../assets/images/fullLogo.png';
import UserInfo from './UserInfo';

const { SubMenu } = Menu;

const getCurrentTab = str => {
  const paths = str && str.split('/');
  return paths && paths[1];
};

const sidebarMenu = [
  {
    key: 'companies',
    text: 'sideBar.companies',
    icon: 'pound',
    url: '/companies',
  },
  {
    key: 'categories',
    text: 'sideBar.categories',
    icon: 'shop',
    url: '/categories',
  },
  {
    key: 'transactions',
    text: 'sideBar.transactions',
    icon: 'transaction',
    url: '/transactions',
  },
];

const StyledSider = styled(Layout.Sider)`
  && {
    background: #f5f5f5;
    .ant-layout-sider-children {
      background: #f5f5f5;
    }
  }
`;

StyledSider.Logo = styled.img`
  height: 30.39px;
  object-fit: contain;
  margin: 32px 36px 54px 32px;
  position: relative;
`;

StyledSider.Menu = styled(Menu)`
  && {
    color: #717791;
    background: #f5f5f5;
    .ant-menu-item .anticon {
      font-size: 20px;
      margin-right: 19px;
    }
    .ant-menu-item {
      height: 48px;
      line-height: 48px;
      font-weight: 600;
    }
    .ant-menu-item-selected {
      color: #cc3366;
    }
  }
`;

StyledSider.MenuItem = styled(Menu.Item)`
  && {
    padding: 0;
    font-size: 14px;
    color: #717791;
  }
`;

StyledSider.SubMenu = styled(SubMenu)`
  && {
    color: #717791;
    background: #f5f5f5;
  }
  padding: 0;
  font-size: 14px;
  font-weight: 600;
`;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const url = getCurrentTab(location.pathname);
  return (
    <StyledSider
      width="260"
      style={{
        overflow: 'hidden',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
      // collapsed
      trigger={null}
      collapsible
    >
      <StyledSider.Logo alt="cashbag" src={FullLogo} />
      <StyledSider.Menu
        mode="inline"
        selectedKeys={[url || 'dashboard']}
        defaultSelectedKeys={[url || 'dashboard']}
      >
        {sidebarMenu.map(menu =>
          menu.subMenu ? (
            <StyledSider.SubMenu
              key={menu.key}
              title={
                <span>
                  <Icon component={menu.icon} />
                  <span>{I18n.t(menu.text)}</span>
                </span>
              }
            >
              {menu.subMenu.map(e => (
                <StyledSider.MenuItem
                  onClick={() => history.push(e.url)}
                  key={e.key}
                >
                  {I18n.t(e.text)}
                </StyledSider.MenuItem>
              ))}
            </StyledSider.SubMenu>
          ) : (
            <StyledSider.MenuItem
              key={menu.key}
              title={I18n.t(menu.text)}
              onClick={() => history.push(menu.url)}
            >
              <Icon type={menu.icon} />
              <span>{I18n.t(menu.text)}</span>
            </StyledSider.MenuItem>
          ),
        )}
      </StyledSider.Menu>
      <div className="absolute bottom-0 left-0">
        <UserInfo />
      </div>
    </StyledSider>
  );
};

export default SideBar;
