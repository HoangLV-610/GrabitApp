import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ItemYouMayLike from "./ItemYouMayLike";

const ProductsYouMayLike = ({ categoryID }) => {
  console.log(categoryID);

  const listProducts = useContext(ProductContext);
  // lấy ra danh sách product có cùng category
  const listProductYouMayLike = listProducts.filter(
    (item) => (item.categoryID = categoryID)
  );

  return (
    <>
      <Swiper loop={true} slidesPerView={3} spaceBetween={20}>
        {listProductYouMayLike.map((product, index) => {
          return (
            <SwiperSlide key={index}>
              <ItemYouMayLike product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProductsYouMayLike;
