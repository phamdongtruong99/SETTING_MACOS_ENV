import { createGlobalStyle } from 'styled-components';
import { CSS_RESET, CLASS_UTILITY } from 'utils/css';

const AppWrapper = createGlobalStyle`
 ${CSS_RESET}
  ${CLASS_UTILITY}
  body {
    background: ${({ theme }) => theme.background.container};
  }
  .hover\\:text-primary {
    &:hover {
      color: ${({ theme }) => theme.palette.primary};
    }
  }
  .text-primary {
    color: ${({ theme }) => theme.palette.primary};
  }
  .text-error {
    color: ${({ theme }) => theme.text.error};
  }
  .text-secondary {
    color: ${({ theme }) => theme.text.secondary};
  }
  .text-header-table {
    color: ${({ theme }) => theme.text.headerTable};
  }
  .text-title {
    color: ${({ theme }) => theme.text.title};
  }
  .text-statistic-value {
    color: ${({ theme }) => theme.text.statisticValue};
  }
  .text-black {
    color: ${({ theme }) => theme.text.black};
  }
  .bg-primary {
    background-color: ${({ theme }) => theme.palette.primary};
  }
  .gradientBackground {
    background-image: ${({ theme }) =>
      `linear-gradient(90deg, ${theme.palette.lightPrimary}, ${theme.palette.primary})`};
  }
  .bg-error {
    background-color: ${({ theme }) => theme.background.error};
  }
  .bg-container {
    background: ${({ theme }) => theme.background.container};
  }
  .bg-header {
    background: ${({ theme }) => theme.background.header};
  }
  .border-top-split-color {
    border-top: 1px solid ${({ theme }) => theme.border.colorSplit};
  }
  .t-500-12px-22px {
    font: normal 500 12px/22px ${({ theme }) => theme.fonts.primary};
  }
  /*----------------- Aimation -----------------*/
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  /* --------------------------Override antd------------- */
  .ant-card {
    box-shadow: ${({ theme }) => theme.card.shadow};
  }
  .ant-form-item {
    margin-bottom: 2px;
  }
  .card-padding-body-0 {
    .ant-card-body {
      padding: 0px;
    }
  }
  form .has-feedback .ant-input-affix-wrapper .ant-input-suffix {
    padding-right: 26px;
  }
  .message-success {
    .ant-message-custom-content {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
    }
    .ant-message-notice-content {
     background: #5FC17B;
     box-shadow: 2px 1px 4px rgba(95, 193, 123, 0.45);
     border-radius: 20px;
     width: 405px;
     color: #FFFFFF;
     height: 40px;
     font-weight: 550;
     font-size: 16px;
     line-height: 20px;
     .anticon {
       margin-left: 10px;
       background: #5FC17B;
       color: #fff;
     }
    }
  }
  .message-error {
    .ant-message-custom-content {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
    }
    .ant-message-notice-content {
     background: #E8505B;
     box-shadow: 2px 1px 4px rgba(232, 80, 91, 0.45);
     border-radius: 20px;
     width: 200px;
     color: #FFFFFF;
     height: 40px;
     font-weight: 550;
     font-size: 16px;
     line-height: 20px;
     .anticon {
       margin-left: 10px;
       background: #E8505B;
       color: #fff
     }
    }
  }
  /*-----------------Add on-----------------------*/
  .t-500-14px-16px {
    font: normal 500 14px/16px ${({ theme }) => theme.fonts.primary};
  }

`;

export default AppWrapper;
