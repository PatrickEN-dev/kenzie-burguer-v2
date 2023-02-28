/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
import { MdSearch } from 'react-icons/md';
import { useContext } from 'react';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { ProductsRequestContext } from '../../../contexts/products/ProductsRequestContext';

const SearchForm = () => {
  const { filterProductSearchBar, setSearchProducts, searchProducts } =
    useContext(ProductsRequestContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearchProducts(inputValue.toLowerCase());
    filterProductSearchBar();
  };

  return (
    <StyledSearchForm>
      <input
        type='text'
        placeholder='Digitar pesquisa'
        value={searchProducts}
        onChange={handleInputChange}
      />
      <StyledButton
        type='button'
        $buttonSize='medium'
        $buttonStyle='green'
        onClick={filterProductSearchBar}
      >
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
function setSearchProducts(value: string) {
  throw new Error('Function not implemented.');
}
