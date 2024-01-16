import React, { useReducer } from 'react'
import ProductList from "../components/productList"
import FormProduct from '../components/formProduct';
import ProductReducer from '../reducers/products.reducer';
import { ProductContext } from '../contexts/products.context';

const ProductsPage = () => {

  const [state, dispatch] = useReducer(ProductReducer, { products: []})

  return (
    <div>
      <h2>Página de Productos</h2>
      <ProductContext.Provider value={{ state, dispatch }} > 
          <FormProduct />
          <ProductList />
      </ProductContext.Provider>
    </div>
  );
};

export default ProductsPage 
