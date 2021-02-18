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
        "https://static.wikia.nocookie.net/horizonhigh/images/b/b7/Spiderman-v01_cvr.jpg/revision/latest?cb=20190927161038",
    },
    {
      name: "Thor",
      price: 30,
      image:
        "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/829282/829282._SX1600_QL80_TTD_.jpg",
    },
  ]);
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dc" component={Store} heroes={marvelComics} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
