import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bannerOne from "../../assets/image/banner-one.jpg";
import bannerTwo from "../../assets/image/banner-two.jpg";
import ItemBanner from "./ItemBanner";

// Import Css
import "./banner.scss";
import { useState } from "react";

const banners = [
  {
    id: 1,
    subTitle: "Starting at $20.00",
    title: "Explore fresh & juicy fruits",
    image: bannerOne,
  },
  {
    id: 2,
    subTitle: "Starting at $29.99",
    title: "Organic & healthy vegetables",
    image: bannerTwo,
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      speed={1500}
      onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
      className="banner-main container mx-auto h-[600px] my-10 rounded-md"
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <ItemBanner key={currentSlide} {...banner} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
