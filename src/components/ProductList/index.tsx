import { useContext, useEffect } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { ProductsRequestContext } from '../../contexts/products/ProductsRequestContext';

const ProductList = () => {
  const { productsList, setProductsList, showProductsRequest } = useContext(
    ProductsRequestContext
  );

  useEffect(() => {
    const searchProductsList = async () => {
      const response = await showProductsRequest();
      setProductsList(response.data);
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
