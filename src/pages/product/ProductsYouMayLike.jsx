import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ItemYouMayLike from "./ItemYouMayLike";
import { useHandleProductDetail } from "../../utils/navigation";
import useFetchProducts from "../../utils/useFetchProducts";

const ProductsYouMayLike = ({ categoryID }) => {
  const listProducts = useFetchProducts();
  // lấy ra danh sách product có cùng category
  const listProductYouMayLike = listProducts.filter(
    (item) => item.categoryID == categoryID
  );

  // nhấn qua trang chi tiết sản phẩm
  const handleProductDetail = useHandleProductDetail();

  return (
    <>
      <Swiper loop={true} slidesPerView={3} spaceBetween={20}>
        {listProductYouMayLike.map((product, index) => {
          return (
            <SwiperSlide
              key={index}
              onClick={() => handleProductDetail(product)}
            >
              <ItemYouMayLike product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProductsYouMayLike;
