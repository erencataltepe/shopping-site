import Comic from "./Comic";
import "./Store.css";

function Store(props) {
  const comicList = props.comics.map((comic, index) => (
    <Comic
      comicHero={comic}
      handleQuantityChange={props.handleQuantityChange}
      key={index}
      addToChart={props.addToChart}
    />
  ));
  return <div className="items">{comicList}</div>;
}

export default Store;
