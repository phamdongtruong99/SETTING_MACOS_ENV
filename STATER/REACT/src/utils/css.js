import THEME from '../theme/theme';

export const CSS_RESET = `
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
   box-sizing: inherit;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  p,
  pre,
  blockquote,
  figure,
  img,
  hr {
   margin: 0;
   padding: 0;
  }
  
  ul {
   list-style: none;
  }
  
  embed,
  iframe,
  img,
  object,
  video {
   display: block;
   max-width: 100%;
  }
  
  table {
   table-layout: fixed;
   width: 100%;
  }
  
  [hidden] {
   display: none;
  }
  
`;

export const TAILWIND_CSS = `
  /*---------- Custom unility class/Taiwin Css: https://tailwindcss.com/docs ------*/
  /*----------Margin, Padding--------------------*/
  .m-p-0 {
    margin: 0;
    padding: 0;
  }
  .m-0 {
    margin: 0;
  }
  .p-0 {
    padding: 0;
  }
  
  /*----------Flex Box------*/
  .flex {
    display: flex;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  /*----------Position------*/
  .static {
    position: static;
  }
  .fixed {
    position: fixed;
  }
  .absolute {
    position: absolute;
  }
  .relative {
    position: relative;
  }
  .sticky {
    position: sticky;
  }
  /*-------------------List Style Type------------------------*/
  .list-none {
    list-style-type: none;
  }
  /*-------------------Top / Right / Bottom / Left------------*/
  .inset-0 {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .inset-y-0 {
    top: 0;
    bottom: 0;
  }
  .inset-x-0 {
    right: 0;
    left: 0;
  }
  .top-0 {
    top: 0;
  }
  .right-0 {
    right: 0;
  }
  .bottom-0 {
    bottom: 0;
  }
  .left-0 {
    left: 0;
  }
  .inset-auto {
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
  }
  /*-------------------------Text-------------------------------*/
  .text-center {
    text-align: center;
  }
  .text-transparent {
    color: transparent;
  }
  .text-primary {
    color: ${THEME.primary};
  }
  .text-black {
    color: #000;
  }
  .text-white {
    color: #fff;
  }
  .text-gray-100 {
    color: ${THEME.color.gray[0]};
  }
  .text-gray-200 {
    color: ${THEME.color.gray[1]};
  }
  .text-gray-300 {
    color: ${THEME.color.gray[2]};
  }
  .text-red-100 {
    color: ${THEME.color.red[0]};
  }
  .text-red-200 {
    color: ${THEME.color.red[1]};
  }
  .text-red-300 {
    color: ${THEME.color.red[2]};
  }
  /*-------------------------Width-------------------------------*/
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }
  .w-screen {
    width: 100vw;
  }
  /*-----------------------Box shadow---------------------------*/
  .shadow {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  .shadow-md {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  .shadow-xl {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;
