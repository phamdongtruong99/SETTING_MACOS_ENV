import { createGlobalStyle } from 'styled-components';
import { CSS_RESET, TAILWIND_CSS } from './utils/css';

export default createGlobalStyle`
  ${CSS_RESET}
  ${TAILWIND_CSS}
  html,
  body {
    font-family: ${getFontFamily};
    scroll-behavior: smooth;
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
  .bg-primary {
    background-color: ${({ theme }) => theme.palette.primary};
  }
  .bg-error {
    background-color: ${({ theme }) => theme.background.error};
  }
  .text-500-14-16 {
    font: normal 500 14px/16px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-14-17 {
    font: normal 600 14px/17px ${({ theme }) => theme.fonts.primary};
  }
  .text-14-18 {
    font: normal normal 14px/18px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-18-22 {
    font: normal 600 18px/22px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-30-36 {
    font: normal 600 30px/36px ${({ theme }) => theme.fonts.primary};
  }
  .border-l-4-solid-error {
    border-left: 4px solid ${({ theme }) => theme.border.error};
  }
`;
