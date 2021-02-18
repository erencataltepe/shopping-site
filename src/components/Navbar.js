import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="home-button navbuttons">
        <Link to="/">Home</Link>
      </div>
      <div className="dc-store-button navbuttons">
        <Link to="/dc">DC Store</Link>
      </div>
      <div className="marvel-store-button navbuttons">
        <Link to="marvel">Marvel Store</Link>
      </div>
      <div className="cart-button navbuttons">
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;
