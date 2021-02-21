import Comic from "./Comic";

function Store(props) {
  const comicList = props.comics.map((comic, index) => (
    <Comic
      comicHero={comic}
      handleQuantityChange={props.handleQuantityChange}
      key={index}
      addToChart={props.addToChart}
    />
  ));
  return <div>{comicList}</div>;
}

export default Store;
