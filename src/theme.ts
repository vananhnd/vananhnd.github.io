import { createTheme } from '@mui/material/styles';
import React from "react";

declare module '@mui/material/styles' {
  interface TypographyVariants {
    poster: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    poster: true;
  }
}
const baseTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ccd0d5',
    },
    secondary: {
      main: '#edf2ff',
    },
    text: {
      primary: '#ffffff',
    }
  },
  typography: {
    fontFamily: 'Nunito, sans-serif',
    poster: {
      fontSize: 64,
      color: 'red',
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
