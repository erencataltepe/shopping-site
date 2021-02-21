import CartItem from "./CartItem";
import { useState, useEffect } from "react";

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
    return <div>Thank you for you order.</div>;
  } else if (totalCart == 0) {
    return <div>Please add item to your cart.</div>;
  } else {
    return (
      <div>
        <div>{comicList}</div>
        <div>Total Item: {totalCart}</div>
        <div>Total Price: {totalPrice}</div>
        <button onClick={handleOnClick}>Complete Order</button>
      </div>
    );
  }
}

export default Cart;
