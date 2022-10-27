import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { Theme } from './shared/Theme';
import { SnackbarProvider } from 'notistack';

import { SW_INIT, SW_UPDATE } from './swtypes';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import configureStore from './store';
import { Provider } from 'react-redux';
import AuthContextProvider from './context/AuthContext';

const client = new QueryClient()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={configureStore}>
      <ThemeProvider theme={Theme}>
      <SnackbarProvider
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          maxSnack={3}
        >
            <QueryClientProvider client={client}>
              <AuthContextProvider>
                <App />
              </AuthContextProvider>
            </QueryClientProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

serviceWorkerRegistration.register({
  onSuccess: () => configureStore.dispatch({ type: SW_INIT }),
  onUpdate: registration =>
  configureStore.dispatch({ type: SW_UPDATE, payload: registration }),
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
