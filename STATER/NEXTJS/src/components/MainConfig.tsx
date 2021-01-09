import GlobalStyle from '@/components/GlobalStyle';
import { Loading } from '@/components/UIKit';
import { appConfig, formConfig } from '@/configs/config';
import theme from '@/theme/theme.json';
import { ConfigProvider } from 'antd';
import Head from 'next/head';
import { Router } from 'next/router';
import { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const MainConfig: FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  Router.events.on('routeChangeStart', () => {
    setLoading(true);
  });
  Router.events.on('routeChangeComplete', () => {
    setLoading(false);
  });
  Router.events.on('routeChangeError', () => {
    setLoading(false);
  });

  return (
    <>
      <Head>
        <title>{appConfig.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <ConfigProvider form={formConfig}>
          <GlobalStyle />
          <Loading loading={loading} />
          {children}
        </ConfigProvider>
      </ThemeProvider>
    </>
  );
};

export default MainConfig;
