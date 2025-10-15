import { createTheme } from '@mui/material/styles';
import React from "react";

declare module '@mui/material/styles' {
  interface TypographyVariants {
    greeting: React.CSSProperties;
    title: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    greeting?: React.CSSProperties;
    title?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    greeting: true;
    title: true;
  }
}
const baseTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212', // General background color
      // paper: '#ffffff',   // Background color for Paper components
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
      fontWeight: 800,
      textAlign: 'center',
      lineHeight: 1.2,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: '3.5rem',
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
    body2: {
      fontSize: '1rem',
      fontWeight: 600,
    }
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#fff', // Applies to all SvgIcon components
        },
      },
    },
  },
});

export default darkTheme;
