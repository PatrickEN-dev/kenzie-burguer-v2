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

  const addProductToCart = (product: iProductsList) => {
    const index = cartModalItens.findIndex((item) => item.id === product.id);
    if (index === -1) {
      setCartModalItens([...cartModalItens, { ...product, quantity: 1 }]);
    } else {
      const updatedCart = [...cartModalItens];
      updatedCart[index].quantity += 1;
      setCartModalItens(updatedCart);

      cartModalItens.map((product) =>
        toast.success(`${product.name} está no carrinho!`)
      );
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

    cartModalItens.map((product) =>
      toast.error(`${product.name} foi retirado`)
    );

    setCartModalTotalPrice(cartModalTotalPrice - product.price);
  };

  const totalValue = cartModalItens.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  useEffect(() => {
    setCartModalTotalPrice(totalValue);
  }, [cartModalItens]);

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
