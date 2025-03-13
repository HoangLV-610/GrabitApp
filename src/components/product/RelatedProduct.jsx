import { useContext } from "react";

import { ProductContext } from "../../context/ProductContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import CSS để Swiper hoạt động
import ItemProduct from "./ItemProduct";
import { useHandleProductDetail } from "../../utils/navigation";

const RelatedProduct = () => {
  const listProducts = useContext(ProductContext);

  // nhấn sang trang chi tiết sản phẩm
  const handleProductDetail = useHandleProductDetail();

  return (
    <div className="wrap-content">
      <div className="title-related text-center max-w-[400px] pb-10 m-auto">
        <h2 className="text-[26px] leading-[38px] font-semibold text-slate-gray font-poppins">
          Related <span className="text-hight-light">Product</span>
        </h2>
        <p className="mt-[15px] text-[14px] text-gray leading-[23px]">
          Browse The Collection of Top Products
        </p>
      </div>
      <div className="list-related-product">
        <Swiper loop={true} spaceBetween={24} slidesPerView={5}>
          {listProducts.map((product, index) => {
            return (
              <SwiperSlide
                key={index}
                onClick={(event) => {
                  event.stopPropagation();
                  console.log("Clicked product:", product); // Kiểm tra sản phẩm có đúng không
                  handleProductDetail(product);
                }}
              >
                <ItemProduct product={product} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedProduct;
