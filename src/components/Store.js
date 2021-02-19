import Comic from "./Comic";

function Store(props) {
  const comicList = props.comics.map((comic, index) => (
    <Comic
      name={comic.name}
      price={comic.price}
      image={comic.image}
      quantity={comic.quantity}
      handleQuantityChange={props.handleQuantityChange}
      key={index}
    />
  ));
  return <div>{comicList}</div>;
}

export default Store;
