import { iProductsList } from '../../../products/interfaces/productsInterfaces';

export interface iModalShopPageContext {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  cartModalItens: iProductsList[];
  setCartModalItens: React.Dispatch<React.SetStateAction<iProductsList[]>>;
  cartModalTotalPrice: number;
  setCartModalTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  addProductToCart: (product: iProductsList) => void;
  removeProductFromCart: (product: iProductsList) => void;
  totalValue: number;
}
