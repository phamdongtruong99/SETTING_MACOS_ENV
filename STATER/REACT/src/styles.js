import { createGlobalStyle } from 'styled-components';
import { CSS_RESET, CLASS_UTILITY } from 'utils/css';

const AppWrapper = createGlobalStyle`
  ${CSS_RESET}
  ${CLASS_UTILITY}
  body {
    background: ${({ theme }) => theme.background.container};
  }
  .text-primary {
    color: ${({ theme }) => theme.palette.primary};
  }
  .text-error {
    color: ${({ theme }) => theme.text.error};
  }
  .text-secondary {
    color: ${({ theme }) => theme.palette.secondary};
  }
  .text-header-table {
    color: ${({ theme }) => theme.text.headerTable};
  }
  .text-title {
    color: ${({ theme }) => theme.text.title};
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
  .bg-secondary {
    background-color: ${({ theme }) => theme.palette.secondary};
  }
  .bg-container {
    background: ${({ theme }) => theme.background.container};
  }
  .bg-error {
    background-color: ${({ theme }) => theme.background.error};
  }
  .text-600-24px-29px {
    font: normal 600 24px/29px ${({ theme }) => theme.fonts.primary};
  }
  .border-l-4-solid-error {
    border-left: 4px solid ${({ theme }) => theme.border.error};
  }
  .gradientBackground {
    background-image: ${({ theme }) =>
      `linear-gradient(90deg, ${theme.palette.lightPrimary}, ${theme.palette.primary})`};
  }
  /* --------------------------Override antd------------- */
  .ant-card {
    box-shadow: ${({ theme }) => theme.card.shadow};
  }
  .ant-drawer-wrapper-body {
    height: 100vh;
  }
  .card-padding-0 {
    .ant-card-body {
      padding: 0px;
    }
  }
  .ant-modal-body {
    padding: 10px 20px;
  }
  .ant-form-item {
    margin-bottom: 2px;
  }
  .ant-card-bordered  {
    border: 1px solid #e8e8e8;
    overflow: hidden;
  }
  .ant-table-column-title {
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
  }
  .ant-calendar-range .ant-calendar-selected-start-date .ant-calendar-date {
    background: ${({ theme }) => theme.palette.secondary};
  }
  .ant-table-pagination.ant-pagination {
    margin-right: 24px !important;
    .ant-pagination-prev .ant-pagination-item-link,
    .ant-pagination-next .ant-pagination-item-link,
    .ant-pagination-item {
      background-color: ${({ theme }) => theme.background.input};
      border-color: ${({ theme }) => theme.background.input};
    }
    .ant-pagination-item-active {
      a {color: ${({ theme }) => theme.text.primary};}
      border-color: ${({ theme }) => theme.palette.primary};
    }
  }
  form .has-feedback .ant-input-affix-wrapper .ant-input-suffix {
    padding-right: 26px;
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
`;

export default AppWrapper;
