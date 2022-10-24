import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { Theme } from './shared/Theme';
import { SnackbarProvider } from 'notistack';
import { HelmetProvider } from 'react-helmet-async';

const client = new QueryClient()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <SnackbarProvider
        anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        maxSnack={3}
      >
        <HelmetProvider>
          <QueryClientProvider client={client}>
            <App />
          </QueryClientProvider>
        </HelmetProvider>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
