/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable consistent-return */

import React, { createContext, useState } from 'react';
import { AxiosResponse } from 'axios';
import { iProductsList } from './interfaces/productsInterfaces';
import { API } from '../../Services/API';

interface ProductsrequestProviderProps {
  children: React.ReactNode;
}

interface iProductsrequestContextItens {
  showProductsRequest: () => Promise<AxiosResponse<iProductsList[]>>;
  productsList: iProductsList[];
  setProductsList: React.Dispatch<React.SetStateAction<iProductsList[]>>;
}

export const ProductsRequestContext = createContext(
  {} as iProductsrequestContextItens
);

export const ProductsRequestProvider = ({
  children,
}: ProductsrequestProviderProps) => {
  const [productsList, setProductsList] = useState([] as iProductsList[]);

  const showProductsRequest = async (): Promise<
    AxiosResponse<iProductsList[]>
  > => {
    try {
      const token = localStorage.getItem('@USERTOKEN');

      const response = await API.get('/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const products = response.data as iProductsList[];
      setProductsList(products);

      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <ProductsRequestContext.Provider
      value={{ showProductsRequest, productsList, setProductsList }}
    >
      {children}
    </ProductsRequestContext.Provider>
  );
};
