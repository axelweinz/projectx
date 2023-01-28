import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import Header from "../../components/header/Header";
import HowItWorks from "../../components/howItWorks/HowItWorks";
import ImageGeneration from "../../components/imageGeneration/ImageGeneration";
import "./Home.css";

const Home = () => {
  return (
    <div className="homePage">
      <Header />
      <div className="homePageContent">
        <ImageGeneration />
        <Gallery />
        <HowItWorks />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
