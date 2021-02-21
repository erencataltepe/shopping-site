import CartItem from "./CartItem";
import { useState, useEffect } from "react";
import "./Cart.css";

function Cart({
  comics,
  totalCart,
  handleQuantityChange,
  addToChart,
  removeFromCart,
  completeOrder,
  totalPrice,
}) {
  const [transactionOver, setTransactionOver] = useState(false);
  const comicList = comics.map((comic, index) => (
    <CartItem
      comic={comic}
      key={index}
      handleQuantityChange={handleQuantityChange}
      addToChart={addToChart}
      removeFromCart={removeFromCart}
    />
  ));

  function handleOnClick() {
    completeOrder();
    setTransactionOver(true);
  }

  useEffect(() => {
    setTransactionOver(false);
  }, []);

  if (transactionOver) {
    return <div className="order-message">Thank you for you order.</div>;
  } else if (totalCart == 0) {
    return <div className="order-message">Please add item to your cart.</div>;
  } else {
    return (
      <div className="cart-page">
        <div className="cart-items">{comicList}</div>
        <div className="complete-order">
          <div className="total-item">
            <span>Total Item:</span> {totalCart}
          </div>
          <div className="total-price">
            <span>Total Price:</span> $ {totalPrice}
          </div>
          <div>
            <button className="complete-order-button" onClick={handleOnClick}>
              Complete Order
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
