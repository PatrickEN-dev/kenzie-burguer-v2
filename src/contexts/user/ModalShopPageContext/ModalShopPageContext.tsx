import { createContext, useState } from 'react';

interface iUserShopProviderProps {
  children: React.ReactNode;
}

interface iUSerShopContext {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalShopPageContext = createContext({} as iUSerShopContext);

export const ModalShopPageProvider = ({ children }: iUserShopProviderProps) => {
  // Preciso chamar esse context no main
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <ModalShopPageContext.Provider value={{ isOpenModal, setIsOpenModal }}>
      {children}
    </ModalShopPageContext.Provider>
  );
};
