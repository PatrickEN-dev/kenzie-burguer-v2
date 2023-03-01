/* eslint-disable no-shadow */
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { iModalShopPageContext } from './interfaces/shopPageModalInterfaces';
import { iProductsList } from '../../products/interfaces/productsInterfaces';

interface iModalShopPageProviderProps {
  children: React.ReactNode;
}

export const ModalShopPageContext = createContext({} as iModalShopPageContext);

export const ModalShopPageProvider = ({
  children,
}: iModalShopPageProviderProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [cartModalItens, setCartModalItens] = useState<iProductsList[]>([]);
  const [cartModalTotalPrice, setCartModalTotalPrice] = useState(0);

  const updateCartLocalStorage = (product: iProductsList[]) => {
    localStorage.setItem('@CARTPRODUCTS', JSON.stringify(product));
    setCartModalItens(product);
  };
  const addProductToCart = (product: iProductsList) => {
    const index = cartModalItens.findIndex((item) => item.id === product.id);
    if (index === -1) {
      const updatedProductCart = [
        ...cartModalItens,
        { ...product, quantity: 1 },
      ];
      setCartModalItens(updatedProductCart);
      toast.success(`${product.name} está no carrinho!`);

      updateCartLocalStorage(updatedProductCart);
    } else {
      const updatedCart = [...cartModalItens];
      updatedCart[index].quantity += 1;
      setCartModalItens(updatedCart);
      updateCartLocalStorage(updatedCart);
      toast.success(`${product.name} adicionado novamente ao carrinho!`);
    }
    setCartModalTotalPrice(cartModalTotalPrice + product.price);
  };

  const removeProductFromCart = (product: iProductsList) => {
    const index = cartModalItens.findIndex((item) => item.id === product.id);
    if (index === -1) {
      return;
    }

    const updatedCart = [...cartModalItens];
    updatedCart[index].quantity -= 1;

    if (updatedCart[index].quantity === 0) {
      updatedCart.splice(index, 1);
    }

    setCartModalItens(updatedCart);

    updateCartLocalStorage(updatedCart);
    toast.error(`${product.name} foi retirado`);

    setCartModalTotalPrice(cartModalTotalPrice - product.price);
  };

  const totalValue = cartModalItens.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  useEffect(() => {
    setCartModalTotalPrice(totalValue);
  }, [cartModalItens]);

  useEffect(() => {
    const savedCartItems = localStorage.getItem('@CARTPRODUCTS');
    if (savedCartItems) {
      setCartModalItens(JSON.parse(savedCartItems));
    }
  }, []);

  return (
    <ModalShopPageContext.Provider
      value={{
        isOpenModal,
        setIsOpenModal,
        cartModalItens,
        cartModalTotalPrice,
        setCartModalItens,
        setCartModalTotalPrice,
        addProductToCart,
        removeProductFromCart,
        totalValue,
      }}
    >
      {children}
    </ModalShopPageContext.Provider>
  );
};
