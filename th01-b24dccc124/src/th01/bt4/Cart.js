import React, { useState } from "react";
import ProductItem from "./ProductItem";

function Cart() {
  
  const products = [
    { id: 1, name: "Sản phẩm A", price: 100 },
    { id: 2, name: "Sản phẩm B", price: 200 },
    { id: 3, name: "Sản phẩm C", price: 300 },
  ];

  const [cart, setCart] = useState([]); 

  const addToCart = (product) => {
    setCart([...cart, product]); 
  };

  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>
        Giỏ hàng: {totalItems} sản phẩm, tổng tiền: {totalPrice}đ
      </h2>

      {products.map((p) => (
        <ProductItem key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Cart;
