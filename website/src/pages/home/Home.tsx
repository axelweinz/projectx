import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import Header from "../../components/header/Header";
import HowItWorks from "../../components/howItWorks/HowItWorks";
import ImageGeneration from "../../components/imageGeneration/ImageGeneration";

const Home = () => {
  return (
    <div className="homePage">
      <Header />
      <ImageGeneration />
      <Gallery />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Home;
