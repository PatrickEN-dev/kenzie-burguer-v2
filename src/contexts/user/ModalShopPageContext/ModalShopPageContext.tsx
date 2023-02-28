import { createContext, useEffect, useState } from 'react';
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
    const existingProduct = cartModalItens.find(
      (item) => item.id === product.id
    );
    if (existingProduct) {
      existingProduct.quantity += 1;
      setCartModalItens([...cartModalItens]);
    } else {
      setCartModalItens([...cartModalItens, { ...product, quantity: 1 }]);
    }
    setCartModalTotalPrice((prevPrice) => prevPrice + product.price);
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
