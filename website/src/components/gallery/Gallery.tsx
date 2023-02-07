import "./Gallery.css";
import { CartContext, CartContextType } from "../../context/CartContext";
import { useContext } from "react";
import astronaut from "../../assets/astronaut.jpg";
import astronaut2 from "../../assets/astronaut2.jpg";
import astronaut3 from "../../assets/astronaut3.jpg";
import soup from "../../assets/soup.jpg";
import soup2 from "../../assets/soup2.jpg";
import soup3 from "../../assets/soup3.jpg";

const Gallery = () => {
  const cart = useContext(CartContext) as CartContextType;

  return (
    <div className="gallery">
      <div className="galleryRow">
        <div className="galleryImgContainer">
          <img className="galleryImg" src={astronaut} alt="Astro"></img>
          <button
            type="button"
            className="galleryImgBuyButton"
            onClick={() => cart.addItem(1)}
          >
            LÄGG I VARUKORG
          </button>
        </div>
        <div className="galleryImgContainer">
          <img className="galleryImg" src={astronaut2} alt="Astro"></img>
          <button type="button" className="galleryImgBuyButton">
            LÄGG I VARUKORG
          </button>
        </div>
        <div className="galleryImgContainer">
          <img className="galleryImg" src={astronaut3} alt="Astro"></img>
          <button type="button" className="galleryImgBuyButton">
            LÄGG I VARUKORG
          </button>
        </div>
      </div>
      <div className="galleryRow">
        <div className="galleryImgContainer">
          <img className="galleryImg" src={soup} alt="Soup"></img>
          <button type="button" className="galleryImgBuyButton">
            LÄGG I VARUKORG
          </button>
        </div>
        <div className="galleryImgContainer">
          <img className="galleryImg" src={soup2} alt="Soup"></img>
          <button type="button" className="galleryImgBuyButton">
            LÄGG I VARUKORG
          </button>
        </div>
        <div className="galleryImgContainer">
          <img className="galleryImg" src={soup3} alt="Soup"></img>
          <button type="button" className="galleryImgBuyButton">
            LÄGG I VARUKORG
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
