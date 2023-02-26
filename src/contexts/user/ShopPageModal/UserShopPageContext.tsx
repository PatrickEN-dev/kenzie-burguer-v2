import { createContext, useState } from 'react';

interface iUserShopProviderProps {
  children: React.ReactNode;
}

interface iUSerShopContext {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserShopContext = createContext({} as iUSerShopContext);

export const UserShopProvider = ({ children }: iUserShopProviderProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <UserShopContext.Provider value={{ isOpenModal, setIsOpenModal }}>
      {children}
    </UserShopContext.Provider>
  );
};
