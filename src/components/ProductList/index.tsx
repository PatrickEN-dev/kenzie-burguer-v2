/* eslint-disable no-console */
import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { ProductsRequestContext } from '../../contexts/products/ProductsRequestContext';

const ProductList = () => {
  const { filterProducts, searchProducts, productsList } = useContext(
    ProductsRequestContext
  );

  return (
    <StyledProductList>
      {searchProducts.length > 0
        ? filterProducts.map((product) => (
            <ProductCard
              key={product.id}
              category={product.category}
              img={product.img}
              name={product.name}
              price={product.price}
              id={product.id}
              quantity={0}
            />
          ))
        : productsList.map((product) => (
            <ProductCard
              key={product.id}
              category={product.category}
              img={product.img}
              name={product.name}
              price={product.price}
              id={product.id}
              quantity={0}
            />
          ))}
    </StyledProductList>
  );
};

export default ProductList;
