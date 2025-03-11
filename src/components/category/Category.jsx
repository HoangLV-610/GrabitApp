import {
  Citrus,
  Croissant,
  CupSoda,
  Egg,
  Fish,
  Leaf,
  Milk,
  Popcorn,
} from "lucide-react";
import React, { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./category.scss";
import { CategoryContext } from "../../context/CategoriesContext";

const ICONS_MAP = {
  Citrus: <Citrus />,
  Croissant: <Croissant />,
  Leaf: <Leaf />,
  Milk: <Milk />,
  Popcorn: <Popcorn />,
  CupSoda: <CupSoda />,
  Fish: <Fish />,
  Egg: <Egg />,
};

const Category = () => {
  const { categories } = useContext(CategoryContext);
  return (
    <div className="container mx-auto py-10">
      <Swiper
        spaceBetween={20} // Khoảng cách giữa các slide
        slidesPerView={6} // Hiển thị tối đa 6 category
        loop={true} // Vòng lặp vô hạn
      >
        {categories.map((category, index) => {
          const { title, quantity, sale } = category;

          return (
            <SwiperSlide key={index}>
              <div
                className={`category-container relative p-[15px] rounded-[5px] text-center cursor-pointer ${category.bgClass}`}
              >
                <div className="wrap-category z-10 relative p-[15px] bg-white rounded-[5px] shadow-md">
                  <div className="icon flex justify-center mb-3">
                    {React.cloneElement(ICONS_MAP[category.icon], {
                      size: 40,
                      strokeWidth: 1,
                      className: "text-main  stroke-[1]",
                    })}
                  </div>
                  <h4 className="text-[15px] font-semibold text-slate-gray mb-[2px]">
                    {title}
                  </h4>
                  <p className="text-[13px] font-light text-gray leading-7">
                    {quantity} Items
                  </p>
                  {sale && Number(sale) !== 0 && (
                    <div className="sale absolute px-[5px] bg-main rounded-tr-[5px] rounded-bl-[5px] text-white text-[12px] top-0 right-0">
                      {sale}%
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Category;
