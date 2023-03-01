import { AxiosResponse } from 'axios';

/* eslint-disable no-use-before-define */
export interface iProductsrequestContextItens {
  showProductsRequest: () => Promise<AxiosResponse<iProductsList[]>>;
  productsList: iProductsList[];
  setProductsList: React.Dispatch<React.SetStateAction<iProductsList[]>>;
  searchProducts: string;
  setSearchProducts: React.Dispatch<React.SetStateAction<string>>;
  filterProducts: iProductsList[];
  setFilterProducts: React.Dispatch<React.SetStateAction<iProductsList[]>>;
  filterProductSearchBar: () => void;
}

export interface iProductsList {
  quantity: number;
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface iCartProducts {
  product: iProductsList;
}
