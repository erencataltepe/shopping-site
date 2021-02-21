import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import Store from "./components/Store";
import Cart from "./components/Cart";
import heroes from "./heroes";
import { useState } from "react";

function App() {
  const [comics, setComics] = useState(heroes);
  const [totalCart, setTotalCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  function handleQuantityChange(e) {
    setComics(
      comics.map((comic) => {
        if (comic.name == e.target.name) {
          comic.quantity = e.target.value;
          return comic;
        } else {
          return comic;
        }
      })
    );
  }

  function addToChart(e) {
    const currentHeroName = e.target.getAttribute("data-name");
    const currentQuantity = e.target.getAttribute("data-quantity");
    console.log(currentQuantity);
    if (currentQuantity > 0) {
      setComics(
        comics.map((comic) => {
          if (comic.name == currentHeroName) {
            comic.isInCart = true;
            return comic;
          } else {
            return comic;
          }
        })
      );
      setTotalCart(
        comics.reduce((sum, comic) => {
          console.log(sum);
          return sum + Number(comic.quantity);
        }, 0)
      );
      setTotalPrice(
        comics.reduce((sum, comic) => {
          console.log(sum);
          return sum + Number(comic.quantity) * Number(comic.price);
        }, 0)
      );
    }
  }

  function removeFromCart(e) {
    const selectedHeroName = e.target.getAttribute("data-name");
    setComics(
      comics.map((comic) => {
        if (comic.name == selectedHeroName) {
          comic.quantity = 0;
          comic.isInCart = false;
          return comic;
        } else {
          return comic;
        }
      })
    );
    setTotalCart(
      comics.reduce((sum, comic) => {
        console.log(sum);
        return sum + Number(comic.quantity);
      }, 0)
    );
  }

  function completeOrder() {
    setTotalCart(0);
    setComics(
      comics.map((comic) => {
        comic.isInCart = false;
        comic.quantity = 0;
        return comic;
      })
    );
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar cartQuantitiy={totalCart} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/store">
            <Store
              comics={comics}
              handleQuantityChange={handleQuantityChange}
              addToChart={addToChart}
            />
          </Route>
          <Route exact path="/cart">
            <Cart
              comics={comics.filter((comic) => comic.isInCart)}
              totalCart={totalCart}
              handleQuantityChange={handleQuantityChange}
              addToChart={addToChart}
              removeFromCart={removeFromCart}
              completeOrder={completeOrder}
              totalPrice={totalPrice}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
