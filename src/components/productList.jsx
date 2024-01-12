// src/components/ProductList.js
import React from 'react';
import ProductItem from '../components/productList'

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
