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
  
  ul, ol {
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

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }
`;

export const CLASS_UTILITY = `
  /*---------- Custom unility class/Taiwin Css: https://tailwindcss.com/docs ------*/
  /*----------Margin, Padding--------------------*/
  .m-p-0 {
    margin: 0;
    padding: 0;
  }
  .p-40-32 {
    padding: 40px 32px 40px 32px;
  }
  .m-0 {
    margin: 0;
  }
  .ml-6 {
    margin-left: 6px;
  }
  .ml-24 {
    margin-left: 24px;
  }
  .ml-260 {
    margin-left: 260px;
  }
  .mx-24 {
    margin-left: 24px;
    margin-right: 24px;
  }
  .mb-4 {
    margin-bottom: 4px;
  }
  .m-14-l-10 {
    margin: 14px 10px 14px 10px;
  }
  .p-33 {
    padding: 33px;
  }
  .px-60 {
    padding-left: 60px;
    padding-right: 60px;
  }
  .pt-40 {
    padding-top: 40px;
  }
  .ml-19 {
    margin-left: 19px;
  }
  .mb-32 {
    margin-bottom: 32px;
  }
  .mb-40 {
    margin-bottom: 40px;
  }
  .mb-115 {
    margin-bottom: 115px;
  }
  .my-60-92 {
    margin-top: 60px;
    margin-bottom: 92px;
  }
  .mb-48 {
    margin-bottom: 48px;
  }
  .mb-14 {
    margin-bottom: 14px;
  }
  .mt-19 {
    margin-top: 19px;
  }
  .mt-32 {
    margin-top: 32px;
  }
  .mt-378 {
    margin-top: 378px;
  }
  .mt-39 {
    margin-top: 39px;
  }
  .mt-24 {
    margin-top: 24px;
  }
  .mb-39 {
    margin-bottom: 39px;
  }
  .mb-41 {
    margin-bottom: 41px;
  }
  .m-24 {
    margin: 24px;
  }
  .ml-16 {
    margin-left: 16px;
  }
  .ml-12 {
    margin-left: 12px;
  }
  .mb-47 {
    margin-bottom: 47px;
  }
  .mb-9 {
    margin-bottom: 9px;
  }
  .p-0 {
    padding: 0;
  }
  .p-24 {
    padding: 24px;
  }
  .cover {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  /*----------Flex Box------*/
  .flex {
    display: flex;
  }
  .flex-center {
    align-items: center;
    justify-content: center;
  }
  .inline-block	{
    display: inline-block;
  }
  .items-center {
    align-items: center;
  }
  .justify-center	{
    justify-content: center;
  }
  .justify-between	{
    justify-content: space-between;
  }
  .justify-around	{
    justify-content: space-around;
  }
  .justify-end	{
    justify-content: flex-end;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-wrap {
    flex-wrap: wrap;
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
  /*-------------------Object-fit-----------------------------*/
  .object-contain {
    object-fit: contain;
  }
  .object-cover {
    object-fit: cover;
  }
  .object-fill {
    object-fit: fill;
  }
  .object-none {
    object-fit: none;
  }
  .object-scale-down {
    object-fit: scale-down;
  }
  /*-------------------------text-------------------------------*/
  .tc {
    text-align: center;
  }
  .tl {
    text-align: left;
  }
  .tr {
    text-align: right;
  }
  .tj {
    text-align: justify;
  }
  .text-transparent {
    color: transparent;
  }
  .truncate-250 {
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .line-clamp-3 {   
    display: -webkit-box;   
    -webkit-line-clamp: 3;   
    -webkit-box-orient: vertical;     
    overflow: hidden; 
  }
  .underline {
    text-decoration: underline;
  }
  .strike {
    text-decoration: line-through;
  }
  /*--------------------Border---------------------------------*/
  .r-1\\/2 {
    border-radius: 50%;
  }
  .r-full {
    border-radius: 9999px;
  }
  .border-tr {
    border-top-width: 1px;
    border-right-width: 1px;
    border-style: solid;
  }
  .border-none {
    border: none;
  }
  /*--------------------Line Height----------------------------*/
  .leading-none	{
    line-height: 1;
  }
  .leading-tight	{
    line-height: 1.25;
  }  
  .leading-snug	{
    line-height: 1.375;
  }
  .leading-normal	{
    line-height: 1.5;
  }
  .leading-relaxed	{
    line-height: 1.625;
  }
  .leading-loose	{
    line-height: 2;
  }
  /*-------------------------Width-------------------------------*/
  .w-half {
    width: 50%;
  }
  .w-auto {
    width: auto;
  }
  .h-screen {
    height: 100vh;
  }
  .w-1\\/2 {
     width: 50%; 
  }
  .w-1\\/3 {
     width: 33.333333%; 
  }
  .w-2\\/3 {
     width: 66.6666667%; 
  }
  .w-1\\/4 {
     width: 25%; 
  }
  .w-3\\/4 {
     width: 75%; 
  }
  .w-1\\/5 {
     width: 25%; 
  }
  .w-2\\/5 {
     width: 40%; 
  }
  .w-3\\/5 {
     width: 60%; 
  }
  .w-4\\/5 {
     width: 80%; 
  }
  .w-full {
    width: 100%;
  }
  .w-screen {
    width: 100vw;
  }
  .w-400 {
    width: 400px;
  }
  .w-62 {
    width: 62px;
  }
  .h-22 {
    height: 22px;
  }
  .h-405 {
    height: 405px;
  }
  .h-368 {
    height: 368px;
  }
  .h-400 {
    height: 400px;
  }
  /*-------------------------Height-------------------------------*/
  .h-68 {
    height: 68px;
  }
  /*----------------------Background----------------------------*/
  .bg-auto {
    background-size: auto;
  }
  .bg-cover	{
    background-size: cover;
  }
  .bg-contain {
    background-size: contain;
  }
  .o-5 {
    opacity: .05;
  }
  .o-70 {
    opacity: .7;
  }
  .o-75	{
    opacity: .75;
  }
  .o-50	{
    opacity: .5;
  }
  .o-25	{
    opacity: .25;
  }
  /*-----------------------Box shadow---------------------------*/
  .shadow {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  .shadow-2 {
    box-shadow: 0px 0px 20px rgba(33, 33, 33, 0.1);
  } 
  .shadow-md {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  .shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  .shadow-xl {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  /*--------------------Oveflow----------------------------------*/
  .ovf-x-hidden {
    overflow-x: hidden;
  }
  .ovf-y-auto {
    overflow-y: auto;
  }
  /*-----------------------Hover---------------------------------*/
  .grow {
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;
    &:hover, &:focus {
      transform: scale(1.05);
    }
  }
  .dim {
    opacity: 1;
    transition: opacity .15s ease-in;
    &:hover, &:focus {
      opacity: .5;
      transition: opacity .15s ease-in;
    }
  }
`;
