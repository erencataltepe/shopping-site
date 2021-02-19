import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import Store from "./components/Store";
import { useState } from "react";

function App() {
  const [marvelComics, setMarvelComics] = useState([
    {
      name: "Spider-Man",
      price: 15,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61J+GgCsctL._SX336_BO1,204,203,200_.jpg",
      quantity: 3,
    },
    {
      name: "Thor",
      price: 30,
      image: "https://upload.wikimedia.org/wikipedia/en/4/41/Thor-272.jpg",
      quantity: 5,
    },
  ]);

  function handleQuantityChange(e) {
    setMarvelComics(
      marvelComics.map((comic) => {
        if (comic.name == e.target.name) {
          comic.quantity = e.target.value;
          return comic;
        } else {
          return comic;
        }
      })
    );
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dc">
            <Store
              comics={marvelComics}
              handleQuantityChange={handleQuantityChange}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
