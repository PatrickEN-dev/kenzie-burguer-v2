import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { ModalShopPageContext } from '../../../../contexts/user/ModalShopPageContext/ModalShopPageContext';
import { iCartProducts } from '../../../../contexts/products/interfaces/productsInterfaces';

const CartProductCard = ({ product }: iCartProducts) => {
  const { removeProductFromCart } = useContext(ModalShopPageContext);

  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={product.img} alt={product.name} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.name}
          <br />
          <small>Quantidade: {product.quantity}</small>
        </StyledTitle>
        <button
          type='button'
          aria-label='Remover'
          onClick={() => removeProductFromCart(product)}
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
