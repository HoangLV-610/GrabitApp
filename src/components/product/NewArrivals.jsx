import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";

import { useContext, useState } from "react";
import { CategoryContext } from "../../context/CategoriesContext";
import ItemProduct from "./ItemProduct";
import { useHandleProductDetail } from "../../utils/navigation";
import useFetchProducts from "../../utils/useFetchProducts";

const NewArrivals = () => {
  const listProduct = useFetchProducts();
  const { categories } = useContext(CategoryContext);

  // lấy ra tất cả các danh mục sản phẩm
  const [activeCategory, setActiveCategory] = useState("All"); // Mặc định là "All"

  // nhất sang trang chi tiết sản phẩm
  const handleProductDetail = useHandleProductDetail();
  return (
    <div className="product-new-arrvals">
      <div className="wrap-content py-10 container mx-auto">
        <div className="title !flex justify-between">
          <div className="content inline-block">
            <p>
              New <span className="text-hight-light">Arrivals</span>
            </p>
            <span className="sub-title">
              <p>Shop online for new arrivals and get free shipping!</p>
            </span>
          </div>
          {/* Swiper hiển thị toàn bộ category */}
          <div className="category w-1/2 max-w-[438px]">
            <Swiper spaceBetween={20} slidesPerView={4} className="flex">
              <SwiperSlide
                key="all"
                className={`text-gray font-medium text-[12px] uppercase cursor-pointer text-right hover:text-green-600 transition ${
                  activeCategory === "All" ? "text-green-600 font-bold" : ""
                }`}
                onClick={() => setActiveCategory("All")}
              >
                All
              </SwiperSlide>
              {categories.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className={`text-gray font-medium text-[12px] uppercase cursor-pointer text-right hover:text-green-600 transition ${
                    activeCategory === item.id ? "text-green-600 font-bold" : ""
                  }`}
                  onClick={() => setActiveCategory(item.id)}
                >
                  {item.title}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="list-new-arrivals">
          <Swiper
            spaceBetween={24}
            slidesPerView={5}
            loop={false}
            grid={{ rows: 2, fill: "row" }} // Chia làm 2 hàng
            modules={[Grid]}
          >
            {(listProduct || []) // Đảm bảo không lỗi nếu allProduct là undefined
              .filter((item) => {
                return (
                  activeCategory === "All" || item.categoryID === activeCategory
                );
              })
              .map((product) => (
                <SwiperSlide
                  key={product.id}
                  onClick={() => {
                    handleProductDetail(product);
                  }}
                >
                  <ItemProduct product={product} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
