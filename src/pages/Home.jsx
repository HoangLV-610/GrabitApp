import Category from "../components/category/Category";
import ProductDeal from "../components/product/ProductDeal";
import Banner from "./banner/Banner";
import banner from "../assets/image/banner.jpg";
import bannerSaleOne from "../assets/image/banner-sale-one.jpg";
import bannerSaleTwo from "../assets/image/banner-sale-two.jpg";
import BannerSale from "./banner/BannerSale";
import NewArrivals from "../components/product/NewArrivals";
import Blogs from "../components/blogs/Blogs";
import Services from "../components/services/Services";
import TopProduct from "../components/product/TopProduct";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <ProductDeal />
      <div className="banner-sales flex container mx-auto  py-10">
        <BannerSale
          image={banner}
          title="Fresh Fruits"
          subtitle="Healthy Products"
          discountText="30% off sale"
          description="Hurry up!!!"
          buttonText="Shop now"
          buttonLink="/shop"
          layoutType="single"
        />
      </div>
      <NewArrivals />
      <div className="banner-sales flex container mx-auto gap-[24px]  py-10">
        <BannerSale
          image={bannerSaleOne}
          title="Tasty Snack & Fastfood"
          description="The flavor of something special"
          buttonText="Shop now"
          buttonLink="/shop"
          layoutType="double"
          discountLabel="70%"
        />
        <BannerSale
          image={bannerSaleTwo}
          title="Fresh Fruits & veggies"
          description="A healthy meal for every one"
          buttonText="Shop now"
          buttonLink="/shop"
          layoutType="double"
          discountLabel="50%"
        />
      </div>
      <Services />
      <TopProduct />
      <Blogs />
    </>
  );
};

export default Home;
