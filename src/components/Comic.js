function Comic({ name, price, image, quantity, handleQuantityChange }) {
  return (
    <div className="comic" data-key={name}>
      <div className="comic-image">
        <img src={image} alt={name} />
      </div>
      <div className="comic-name">{name}</div>
      <div className="comic-price">{price}</div>
      <div className="add-to-cart">
        <div className="quantity">
          <input
            name={name}
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="0"
          ></input>
        </div>
        <div>
          <button className="add-to-cart-button">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Comic;
