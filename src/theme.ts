import { createTheme } from '@mui/material/styles';
import React from "react";

declare module '@mui/material/styles' {
  interface TypographyVariants {
    greeting: React.CSSProperties;
    title: React.CSSProperties;
    position: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    greeting?: React.CSSProperties;
    title?: React.CSSProperties;
    position?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    greeting: true;
    title: true;
    position: true;
  }
}
const baseTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212', // General background color
    },
    primary: {
      main: '#121212',
    },
    secondary: {
      main: '#edf2ff',
    },
    text: {
      primary: '#F5F5F5',
      secondary: '#B0B0B0',
    }
  },
  typography: {
    fontFamily: 'Nunito, sans-serif',
    greeting: {
      fontSize: '8rem',
      fontWeight: 800,
      textAlign: 'center',
      lineHeight: 1.2,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: '3.5rem',
      },
    },
    title: {
      fontSize: '3.75rem',
      fontFamily: "Krona One ,sans-serif",
      cursor: "default",
      textAlign: 'center',
      lineHeight: 1.2,
      [baseTheme.breakpoints.down('md')]: {
        fontSize: '3.5rem',
      },
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: '2rem',
      },
    },
    position: {
      fontSize: '3.75rem',
      fontWeight: 800,
      textAlign: 'center',
      lineHeight: 1.2,
      [baseTheme.breakpoints.down('lg')]: {
        fontSize: '3rem',
      },
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: '1.25rem',
      },
    },

    h3: {
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
      [baseTheme.breakpoints.up('md')]: {
        fontSize: '2.4rem',
      },
    },
    h4: {
      letterSpacing:'2px',
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: '1.25rem',
      },
    },
    h5: {
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    subtitle1: {
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: '0.875rem',
      },
    },
    caption: {
      fontSize: '0.875rem',
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: '0.75rem',
      },
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 600,
    }
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: 'text.primary', // Applies to all SvgIcon components
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: "Nunito, sans-serif",
        }
      }
    },
    MuiPaper:{
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          backgroundImage: 'none',
        }
      }
    }
  },
});

export default darkTheme;
