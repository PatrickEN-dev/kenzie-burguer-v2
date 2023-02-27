// eslint-disable-next-line no-use-before-define
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './styles/theme';
import App from './App';
import { UserRequestProvider } from './contexts/user/UserRequestContext/UserRequestContext';
import { ModalShopPageContext } from './contexts/user/shopPageModalContext/ModalShopPageContext';
import { ProductsRequestProvider } from './contexts/products/ProductsRequestContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <UserRequestProvider>
          <ModalShopPageContext>
            <ProductsRequestProvider>
              <App />
            </ProductsRequestProvider>
          </ModalShopPageContext>
        </UserRequestProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
