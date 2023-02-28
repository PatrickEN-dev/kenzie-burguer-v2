import { useContext } from 'react';
import { StyledProductCard } from './style';

import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { iProductsList } from '../../../contexts/products/interfaces/productsInterfaces';
import { ModalShopPageContext } from '../../../contexts/user/ModalShopPageContext/ModalShopPageContext';

const ProductCard = ({ name, category, price, img }: iProductsList) => {
  const { addProductToCart } = useContext(ModalShopPageContext);

  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <StyledProductCard>
      <div className='imageBox'>
        <img src={img} alt={name} />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {name}
        </StyledTitle>
        <StyledParagraph className='category'>{category}</StyledParagraph>
        <StyledParagraph className='price'>{formattedPrice}</StyledParagraph>
        <StyledButton
          $buttonSize='medium'
          $buttonStyle='green'
          onClick={() => addProductToCart}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
