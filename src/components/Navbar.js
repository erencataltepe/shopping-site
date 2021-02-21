import { Link } from "react-router-dom";

function Navbar({ cartQuantitiy }) {
  return (
    <nav>
      <div className="home-button navbuttons">
        <Link to="/">Home</Link>
      </div>
      <div className="store-button">
        <Link to="/store">Store</Link>
      </div>
      <div className="cart-button navbuttons">
        <Link to="/cart">Cart: {cartQuantitiy}</Link>
      </div>
    </nav>
  );
}

export default Navbar;
