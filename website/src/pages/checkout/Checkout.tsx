import CheckoutProduct from "../../components/checkoutProduct/CheckoutProduct";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Checkout.css";
import { CartContext, CartContextType } from "../../context/CartContext";
import { useContext } from "react";

const Checkout = () => {
  const cart = useContext(CartContext) as CartContextType;

  return (
    <div className="checkoutPage">
      <Header />
      <div className="checkoutPageContent">
        <div className="checkoutProductsContainer">
          {cart.items.map((item, key) => (
            <CheckoutProduct
              id={item.id}
              quantity={item.quantity}
              imgSrc={"soup2.jpg"}
              key={key}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
