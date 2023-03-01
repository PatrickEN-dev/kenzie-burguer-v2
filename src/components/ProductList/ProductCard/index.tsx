/* eslint-disable no-shadow */
import { useContext } from 'react';
import { StyledProductCard } from './style';

import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { iProductsList } from '../../../contexts/products/interfaces/productsInterfaces';
import { ModalShopPageContext } from '../../../contexts/user/ModalShopPageContext/ModalShopPageContext';

const ProductCard = ({ name, category, price, img, id }: iProductsList) => {
  const { addProductToCart } = useContext(ModalShopPageContext);

  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const product = {
    id,
    name,
    category,
    price,
    img,
    quantity: 1,
  };

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
          onClick={() => addProductToCart(product)}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
