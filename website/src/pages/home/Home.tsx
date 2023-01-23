import Gallery from "../../components/gallery/Gallery";
import Header from "../../components/header/Header";
import ImageGeneration from "../../components/imageGeneration/ImageGeneration";

const Home = () => {
  return (
    <div className="homePage">
      <Header />
      <ImageGeneration />
      <Gallery />
    </div>
  );
};

export default Home;
