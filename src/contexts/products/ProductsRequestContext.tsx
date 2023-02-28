/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable consistent-return */

import { toast } from 'react-toastify';
import React, { createContext, useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import {
  iProductsList,
  iProductsrequestContextItens,
} from './interfaces/productsInterfaces';
import { API } from '../../Services/API';

interface ProductsrequestProviderProps {
  children: React.ReactNode;
}

export const ProductsRequestContext = createContext(
  {} as iProductsrequestContextItens
);

export const ProductsRequestProvider = ({
  children,
}: ProductsrequestProviderProps) => {
  const [productsList, setProductsList] = useState([] as iProductsList[]);
  const [searchProducts, setSearchProducts] = useState('');
  const [filterProducts, setFilterProducts] = useState<iProductsList[]>([]);

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

  useEffect(() => {
    showProductsRequest();
  }, []);

  const filterProductSearchBar = () => {
    const recieveProducts = [...productsList];
    const filterNameProducts = recieveProducts.filter((element) =>
      element.name.toLowerCase().includes(searchProducts.toLowerCase())
    );
    if (filterNameProducts.length) {
      setFilterProducts(filterNameProducts);
    }

    const filterCategoryProducts = recieveProducts.filter((element) =>
      element.category.toLowerCase().includes(searchProducts.toLowerCase())
    );
    if (filterCategoryProducts.length) {
      setFilterProducts(filterCategoryProducts);
    }

    if (
      filterNameProducts.length === 0 &&
      filterCategoryProducts.length === 0
    ) {
      toast.error(
        'Não consegui encontar, mas aqui estão todos os nossos produtos'
      );
      setFilterProducts([]);
    }
  };

  return (
    <ProductsRequestContext.Provider
      value={{
        showProductsRequest,
        productsList,
        setProductsList,
        searchProducts,
        setSearchProducts,
        filterProducts,
        setFilterProducts,
        filterProductSearchBar,
      }}
    >
      {children}
    </ProductsRequestContext.Provider>
  );
};
