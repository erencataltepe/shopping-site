import "./CartItem.css";

function CartItem({ comic, handleQuantityChange, addToChart, removeFromCart }) {
  return (
    <div className="cart-item">
      <div>
        <img className="cart-item-image" src={comic.image} alt={comic.name} />
      </div>
      <div className="cart-item-name">{comic.name}</div>
      <div>
        <input
          className="cart-item-quantity"
          name={comic.name}
          type="number"
          value={comic.quantity}
          onChange={handleQuantityChange}
          min="1"
        ></input>
      </div>
      <div>$ {comic.quantity * comic.price}</div>
      <div>
        <button
          className="remove-button"
          data-name={comic.name}
          onClick={removeFromCart}
        >
          Remove Item
        </button>
      </div>
      <div>
        <button
          className="add-to-chart-button"
          onClick={addToChart}
          data-name={comic.name}
          data-quantity={comic.quantity}
        >
          Update Item
        </button>
      </div>
    </div>
  );
}

export default CartItem;
