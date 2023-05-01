import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global'; 

import theme from './styles/theme';

import { AuthProvider } from './hooks/auth';
import { DebounceProvider } from './hooks/debounce';

import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <DebounceProvider>
          <Routes />
        </DebounceProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
