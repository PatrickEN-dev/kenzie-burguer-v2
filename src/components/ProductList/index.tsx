/* eslint-disable no-console */
import { toast } from 'react-toastify';
import { useContext, useEffect } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { ProductsRequestContext } from '../../contexts/products/ProductsRequestContext';

const ProductList = () => {
  const { productsList, setProductsList, showProductsRequest } = useContext(
    ProductsRequestContext
  );

  // Parece que está vindo como undefined por causa da falta do token do user na request

  useEffect(() => {
    const searchProductsList = async () => {
      try {
        const response = await showProductsRequest();
        setProductsList(response.data);
      } catch (error) {
        console.error(error);
        toast.error('Não foi possível carregar os itens do menu :(');
      }
    };
    searchProductsList();
  }, []);

  console.log(productsList);

  return (
    <StyledProductList>
      <ProductCard />
    </StyledProductList>
  );
};

export default ProductList;
