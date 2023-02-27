/* eslint-disable no-use-before-define */
import React from 'react';
import { ProductsRequestProvider } from '../products/ProductsRequestContext';
import { ModalShopPageProvider } from '../user/ModalShopPageContext/ModalShopPageContext';
import { UserRequestProvider } from '../user/UserRequestContext/UserRequestContext';

interface iProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: iProvidersProps) => (
  <UserRequestProvider>
    <ProductsRequestProvider>
      <ModalShopPageProvider>{children}</ModalShopPageProvider>
    </ProductsRequestProvider>
  </UserRequestProvider>
);
