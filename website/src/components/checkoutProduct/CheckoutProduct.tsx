import { CartItem } from "../../models/CartItem";
import "./CheckoutProduct.css";
import soup2 from "../../assets/soup2.jpg";
import { products } from "../../statics/Products";

const CheckoutProduct = (cartItem: CartItem) => {
  const productData = products.find((product) => product.id === cartItem.id);

  return (
    <div className="checkoutProduct">
      <div className="checkoutProductDesc">
        <img className="checkoutProductImg" src={soup2} alt=""></img>
        <div>
          <h2>Poster</h2>
          <p>50x70cm</p>
        </div>
      </div>
      <div className="checkoutProductQuantity">
        <p>Antal:</p>
        <button type="button" className="checkoutProductQuantityButton">
          -
        </button>
        <h4>{cartItem.quantity}</h4>
        <button type="button" className="checkoutProductQuantityButton">
          +
        </button>
      </div>
      <p>{productData ? productData.price * cartItem.quantity : 0}kr</p>
    </div>
  );
};

export default CheckoutProduct;
