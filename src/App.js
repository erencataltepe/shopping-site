import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Switch></Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
