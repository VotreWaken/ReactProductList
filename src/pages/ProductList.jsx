import React from 'react'
import { products } from '../components/ProductList/products';
import ProductList from '../components/ProductList/ProductList';
import Header from '../components/Header/Header';
const Cart = () => {
  return (
    <div className="container">
            <Header/>
            <ProductList products={products} />
    </div>
  )
}

export default Cart