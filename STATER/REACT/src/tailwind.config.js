// import { keyframeFadeIn } from 'utils/animation';

const THEME = require('theme/theme');

module.exports = {
  theme: {
    extend: {},
    textColor: {
      primary: THEME.primary,
      secondary: THEME.secondary,
      danger: THEME.danger,
    },
    spacing: {
      '72': '18rem',
      '76': '19rem',
    },
    margin: {
      '72': '18rem',
      '76': '19rem',
      '80': '20rem',
      '96': '24rem',
      '128': '32rem',
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    function CustomClass({ addUtilities }) {
      const newUtilities = {
        '.grid': {
          display: 'grid',
        },
        '.center': {
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.rotate-0': {
          transform: 'rotate(0deg)',
        },
        '.rotate-90': {
          transform: 'rotate(90deg)',
        },
        '.rotate-180': {
          transform: 'rotate(180deg)',
        },
        '.rotate-270': {
          transform: 'rotate(270deg)',
        },
        '.skew-10deg': {
          transform: 'skewY(-10deg)',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
      };
      const filterImage = {
        '.filter-unsaturated': {
          filter: 'saturate(0.2)';
        },
        '.filter-saturated': {
          filter: 'saturate(200%)'; 
        },
        '.filter-blur-2': {
          filter: 'blur(2px)';
        },
        '.filter-blur-3': {
          filter: 'blur(3px)';
        },
      };
      const animate = {
        // -------------------Animation-------------------//
        '.infinite': {
          animationIterationCount: 'infinite',
        },
        '.delay-1': {
          animationDelay: `1000ms`,
        },
        '.delay-2': {
          animationDelay: `2000ms`,
        },
        '.delay-3': {
          animationDelay: `3000ms`,
        },
        '.delay-4': {
          animationDelay: `4000ms`,
        },
        '.delay-5': {
          animationDelay: `5000ms`,
        },
        '.fast': {
          animationDuration: `800ms`,
        },
        '.faster': {
          animationDuration: `500ms`,
        },
        '.slow': {
          animationDuration: `2000ms`,
        },
        '.slower': {
          animationDuration: `3000ms`,
        },
        '.fadeIn': {
          animationName: 'fadeIn',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
      addUtilities(animate, ['responsive', 'hover']);
      addUtilities(filterImage, ['responsive', 'hover']);
    },
  ],
};
