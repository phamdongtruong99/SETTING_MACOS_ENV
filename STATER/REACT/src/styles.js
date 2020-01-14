import { createGlobalStyle } from 'styled-components';
import { CSS_RESET, TAILWIND_CSS } from './utils/css';

export default createGlobalStyle`
  ${CSS_RESET}
  ${TAILWIND_CSS}
  html,
  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    scroll-behavior: smooth;
  }

  /*-----------------Text Color-----------------------------*/
  .text-primary {
    color: ${({ theme }) => theme.palette.primary};
  }
  .text-error {
    color: ${({ theme }) => theme.palette.error};
  }
  .text-secondary {
    color: ${({ theme }) => theme.palette.secondary};
  }
  .text-success {
    color: ${({ theme }) => theme.palette.success};
  }
  .text-title {
    color: ${({ theme }) => theme.palette.title};
  }
  .text-black {
    color: ${({ theme }) => theme.palette.black}
  }
  .text-white {
    color: ${({ theme }) => theme.palette.white}
  }
  /*-----------------Bachkground Color-----------------------*/
  .bg-primary {
    background-color: ${({ theme }) => theme.palette.primary};
  }
  .bg-container {
    background: ${({ theme }) => theme.background.container};
  }
  .bg-error {
    background-color: ${({ theme }) => theme.background.error};
  }

  /*===================== Text Size + Type + Font ================================*/
  .text-500-14-16 {
    font: normal 500 14px/16px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-14-17 {
    font: normal 600 14px/17px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-12-15 {
    font: normal 600 12px/15px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-14-16 {
    font: normal 600 14px/16px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-14-20 {
    font: normal 600 14px/20px ${({ theme }) => theme.fonts.primary};
  }
  .text-14-16 {
    font: normal normal 14px/16px ${({ theme }) => theme.fonts.primary};
  }
  .text-14-18 {
    font: normal normal 14px/18px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-16-19 {
     font: normal 600 16px/19px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-18-22 {
    font: normal 600 18px/22px ${({ theme }) => theme.fonts.primary};
  }
  .text-600-30-36 {
    font: normal 600 30px/36px ${({ theme }) => theme.fonts.primary};
  }

  /*---------------------Border ------------------------------*/
  .border-l-4-solid-error {
    border-left: 4px solid ${({ theme }) => theme.border.error};
  }
`;
