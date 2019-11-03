import { createGlobalStyle } from 'styled-components';
import { CSS_RESET, TAILWIND_CSS } from './utils/css';
import THEME from './theme/theme';

export default createGlobalStyle`
  ${CSS_RESET}
  html,
  body {
    font-family: ${getFontFamily};
    scroll-behavior: smooth;
  }
  ${TAILWIND_CSS}
`;
