import React, { useEffect, useState } from "react";
import Product from "../../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {product.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h4>Order summary</h4>
        <p>Selected Items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
