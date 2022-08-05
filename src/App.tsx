import React from 'react';
import { ThemeProvider } from 'styled-components';

import { DefaultTheme } from 'styled-components';

import { ProductsPage } from './components/ProductsPage';

import { GlobalStyle } from './style/GlobalCSS';

const theme: DefaultTheme = {
  media: {
    small: '360px',
    mobile: '480px',
    tablets: '768px',
    laptops: '1024px',
  },
  fontSize: {
    small: '12px',
    title: '22px',
    default: '14px',
    error: '34px',
  },
  colors: {
    white: '#ffffff',
    accent: '#00A0AB',
    dark: '#2c2c2cbd',
    darkGrey: '#5A5A5A',
    grey: '#C7C7C7',
    textGrey: '#8F8F8F',
    bg: {
      seen: '#FFF6A5',
    },
  },
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProductsPage />
    </ThemeProvider>
  );
}

export default App;
