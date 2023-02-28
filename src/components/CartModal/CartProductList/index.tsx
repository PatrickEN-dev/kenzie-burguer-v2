import { useContext } from 'react';
import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { ModalShopPageContext } from '../../../contexts/user/ModalShopPageContext/ModalShopPageContext';

const CartProductList = () => {
  const { setCartModalItens, totalValue } = useContext(ModalShopPageContext);
  return (
    <StyledCartProductList>
      <ul>
        <CartProductCard />
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>{totalValue}</StyledParagraph>
      </div>
      <StyledButton
        $buttonSize='default'
        $buttonStyle='gray'
        onClick={() => setCartModalItens([])}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
