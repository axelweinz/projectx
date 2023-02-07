import "./Header.css";
import { CartContext, CartContextType } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const cart = useContext(CartContext) as CartContextType;

  return (
    <header className="header">
      <h1 className="logo">
        <Link className="logoLink" to="/">
          PSTR lab
        </Link>
      </h1>
      <Link className="checkout-button" to="/checkout">
        Kassa &#40;
        {cart.items.reduce(
          (totalQuantity, item) => totalQuantity + item.quantity,
          0
        )}
        &#41;
      </Link>
    </header>
  );
};

export default Header;
