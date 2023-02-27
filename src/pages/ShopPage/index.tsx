import { useContext } from 'react';
import { StyledShopPage } from './style';

import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { StyledContainer } from '../../styles/grid';
import { ModalShopPageContext } from '../../contexts/user/shopPageModalContext/ModalShopPageContext';

const ShopPage = () => {
  const { isOpenModal } = useContext(ModalShopPageContext);

  return (
    <StyledShopPage>
      {isOpenModal ? <CartModal /> : null}
      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
