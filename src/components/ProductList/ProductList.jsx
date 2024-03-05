import React, { useState } from 'react';
import "./ProductList.css";

// Product List Component
const ProductList = ({ products }) => {

    // useState to Sorted Items and Sorting Order
    const [sortedProducts, setSortedProducts] = useState(products);

    // useState to Sort Order Ascending or Descending
    const [sortOrder, setSortOrder] = useState('ascending');

    // Sort By Price 
    const sortByPrice = () => 
    {
        const sorted = [...sortedProducts];
        sorted.sort((a, b) => 
        {
          if (sortOrder === 'ascending') 
          {
            return a.price - b.price;
          } else 
          {
            return b.price - a.price;
          }
        });

        setSortedProducts(sorted);
        setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending');
      };

      // Sort By Name 
      const sortByName = () => {
        const sorted = [...sortedProducts];
        sorted.sort((a, b) => {
          if (sortOrder === 'ascending') {
            return a.title.localeCompare(b.title);
          } else {
            return b.title.localeCompare(a.title);
          }
        });
        setSortedProducts(sorted);
        setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending');
      };

    // useState To Track Items in a Shopping Cart
    const [cart, setCart] = useState([]);

    // Add Item To Shopping Cart
    const addToCart = (product) => 
    {
        setCart([...cart, product]);
    };

    return (
    <div className="container">
             {/* Sorting Order Buttons */}
            <div className="sort-buttons">
                <button onClick={sortByPrice}>Sort by Price</button>
                <button onClick={sortByName}>Sort by Name</button>
            </div>
            {/* Shopping Cart */}
            <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.title} - ${item.price}</li>
          ))}
        </ul>
        {cart.length > 0 && <p>Total: ${cart.reduce((acc, curr) => acc + curr.price, 0)}</p>}
      </div>

        {/* Product List */}
        <div className="product-list">
      {sortedProducts.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <div>
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProductList;
