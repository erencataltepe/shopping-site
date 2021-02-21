import "./Comic.css";

function Comic({ comicHero, handleQuantityChange, addToChart }) {
  return (
    <div className="comic" data-key={comicHero.name}>
      <div className="comic-image">
        <img src={comicHero.image} alt={comicHero.name} />
      </div>
      <div className="comic-name">{comicHero.name}</div>
      <div className="comic-price">$ {comicHero.price}</div>
      <div className="add-to-cart">
        <div className="quantity">
          <input
            name={comicHero.name}
            type="number"
            value={comicHero.quantity}
            onChange={handleQuantityChange}
            min="1"
          ></input>
        </div>
        <div>
          <button
            className="add-to-chart-button"
            onClick={addToChart}
            data-name={comicHero.name}
            data-quantity={comicHero.quantity}
          >
            Add To Chart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comic;
