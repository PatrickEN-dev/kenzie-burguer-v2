import { useContext } from 'react';
import { MdShoppingCart, MdLogout } from 'react-icons/md';

import SearchForm from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';

import { StyledContainer } from '../../styles/grid';
import { ModalShopPageContext } from '../../contexts/user/shopPageModalContext/ModalShopPageContext';

const Header = () => {
  const { setIsOpenModal } = useContext(ModalShopPageContext);

  const logoutUSer = () => {
    localStorage.removeItem('@USERTOKEN');
    localStorage.removeItem('@USERID');
  };

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className='flexGrid'>
          <img
            src={LogoKenzieBurguer}
            alt='Kenzie Burguer Logo'
            className='logo'
          />
          <nav className='nav' role='navigation'>
            <SearchForm />
            <div className='buttons'>
              <button
                type='button'
                onClick={() => {
                  setIsOpenModal(true);
                }}
              >
                <MdShoppingCart size={28} />
              </button>
              <button type='button' onClick={logoutUSer}>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
