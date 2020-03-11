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
  /*-----------------Add on-----------------------*/
  .t-500-14px-16px {
    font: normal 500 14px/16px ${({ theme }) => theme.fonts.primary};
  }
`;

export default AppWrapper;
