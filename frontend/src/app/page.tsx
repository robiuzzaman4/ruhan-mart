import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCarousel from "@/components/ProductCarousel";
import Slider from "@/components/Slider";

const Home = () => {
  return (
    <div>
      <Header/>
      <Slider/>
      {/* <AllProduct/> */}
      <ProductCarousel/>
      <Footer/>
    </div>
  );
};

export default Home;