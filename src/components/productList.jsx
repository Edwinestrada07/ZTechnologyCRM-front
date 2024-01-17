import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const ProductList = () => {

  const [products, setProducts] = useState([]);

  const getProducts = async() => {
      try {
          const response = await fetch('http://localhost:4000/product', { 
              method: 'GET',
              headers: {
                  authorization: localStorage.getItem('token')
              }
          });
          const products = await response.json(); 
          setProducts(products);
          
      } catch (error) {
          console.log("error", error);
      }
  }

  const deleteProduct = async (id) => {
      await fetch(`http://localhost:4000/product/${id}`, {
          method: 'DELETE',
          headers: {
              authorization: localStorage.getItem('token')
          }
      });

      getProducts();
  };
  
  useEffect(() => {
    const fetchProducts = async() => {
        try {
            const response = await api.get('/products')
            setProducts(response.data)
        } catch (error) {
            console.log("Error al obtener productos", error)
        }
    }

    fetchProducts()
    getProducts();
  }, []); 

  return (
    <> { products.length > 0 ?
    <table>
      <thead>
          <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Descripción</th>
              <th>Actions</th>
          </tr>
      </thead>

      <tbody>
          { 
           products.map((product, i) => (
              <tr key={i}>
                <li key={product._id}>{product.title}</li>
                  <td>{product.title}</td>
                  <td>$ {product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.description}</td>
                  <td><Link onClick={() => deleteProduct(product.id)}>Eliminar</Link></td>
              </tr>
          ))
        }
      </tbody>
    </table>
    : <h3>No hay productos</h3>}
    </>
  );
};

export default ProductList;
