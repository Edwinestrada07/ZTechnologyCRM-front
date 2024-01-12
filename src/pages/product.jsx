// src/pages/ProductsPage.js
import React, { useState, useEffect } from 'react';
import ProductList from '../components/productList';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Aquí puedes realizar una llamada a tu API o cargar datos de alguna otra manera
    // Ejemplo de carga de datos ficticios:
    const fetchProducts = async () => {
      // Simulamos una solicitud a la API
      const response = await fetch('http://localhost:4000/product');
      const data = await response.json();

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Página de Productos</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;
