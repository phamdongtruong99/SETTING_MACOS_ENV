const THEME = {
  palette: {
    default: {
      light: '#fff',
      main: '#1890ff',
      dark: '#2c3e51cc',
      contrastText: '#fff',
    },
    primary: {
      light: '#fff',
      main: '#1890ff',
      dark: '#2c3e51cc',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    warning: {
      light: '#ff7961',
      main: '#faad14',
      dark: '#ba000d',
      contrastText: '#000',
    },
    success: {
      light: '#ff7961',
      main: '#52c41a',
      dark: '#ba000d',
      contrastText: '#000',
    },
    error: {
      light: '#ff7961',
      main: '#f5222d',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  fonts: {
    primaryRegular: 'Poppins-Regular',
    primaryMedium: 'Poppins-Medium',
    primaryBold: 'Poppins-Bold',
    secondaryRegular: 'Barlow-Regular',
    secondaryMedium: 'Barlow-Medium',
    secondaryBold: 'Barlow-SemiBold',
  },
  fontWeight: {
    thin: 100, // Thin
    utraLight: 200, // Ultra Light
    light: 300, // Light
    regular: 400, // Regular
    medium: 500, // Medium
    semibold: 600, // Semibold
    bold: 700, // Bold
    heavy: 800, // Heavy
    black: 900, // Black
  },
  zIndex: {
    affix: 10,
    badge: 10,
    mobileStepper: 1000,
    sticky: 1020,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    popover: 1360,
    snackbar: 1400,
    tooltip: 1500,
  },
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 912,
    xl: 1200,
    xxl: 1600,
  },
};

module.exports = THEME;
