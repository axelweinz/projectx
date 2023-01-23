import "./Gallery.css";
import astronaut from "../../assets/astronaut.jpg";
import astronaut2 from "../../assets/astronaut2.jpg";
import astronaut3 from "../../assets/astronaut3.jpg";
import soup from "../../assets/soup.jpg";
import soup2 from "../../assets/soup2.jpg";
import soup3 from "../../assets/soup3.jpg";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="galleryRow">
        <img className="galleryImg" src={astronaut} alt="Astro"></img>
        <img className="galleryImg" src={astronaut2} alt="Astro"></img>
        <img className="galleryImg" src={astronaut3} alt="Astro"></img>
      </div>
      <div className="galleryRow">
        <img className="galleryImg" src={soup} alt="Soup"></img>
        <img className="galleryImg" src={soup2} alt="Soup"></img>
        <img className="galleryImg" src={soup3} alt="Soup"></img>
      </div>
    </div>
  );
};

export default Gallery;
