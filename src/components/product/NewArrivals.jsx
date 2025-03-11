import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "../ui/rating/Rating";
import { Eye, Heart, Repeat, ShoppingBasketIcon } from "lucide-react";
import { Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";

import noImage from "../../assets/image/no-image.jpg";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { CategoryContext } from "../../context/CategoriesContext";

const NewArrivals = () => {
  const listProduct = useContext(ProductContext);
  const { categories } = useContext(CategoryContext);

  // lấy ra tất cả các danh mục sản phẩm
  const [activeCategory, setActiveCategory] = useState("All"); // Mặc định là "All"
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
                <SwiperSlide key={product.id}>
                  <div className="item-product border border-light-gray relative group cursor-pointer rounded-[5px]">
                    <div className="image relative">
                      <div className="relative w-full h-auto">
                        <div className="relative w-full h-auto overflow-hidden group">
                          {/* Ảnh chính */}
                          <img
                            src={product.image_main || noImage}
                            alt={product.name}
                            className={`w-full aspect-[295/258] object-cover transition-all duration-500 ${
                              product.image_main === product.image_hover
                                ? "group-hover:scale-110"
                                : "opacity-100 group-hover:opacity-0"
                            }`}
                            onError={(e) => (e.target.src = noImage)}
                          />

                          {/* Ảnh hover (nếu có) */}
                          {product.image_main !== product.image_hover &&
                            product.image_hover && (
                              <img
                                src={product.image_hover}
                                alt={product.name}
                                className="absolute top-0 left-0 w-full aspect-[295/258] object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                onError={(e) => (e.target.src = noImage)}
                              />
                            )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="actions flex gap-1 justify-center absolute bottom-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-2 transition-all duration-500">
                        <button className="group/actions p-[4px] border border-light-gray rounded-[5px] hover:bg-main transition duration-300">
                          <Heart
                            size={16}
                            strokeWidth={1}
                            className="text-gray group-hover/actions:text-white transition duration-300"
                          />
                        </button>

                        <button className="group/actions p-[4px] border border-light-gray rounded-[5px] group hover:bg-main transition duration-300">
                          <Eye
                            size={16}
                            strokeWidth={1}
                            className="text-gray group-hover/actions:text-white transition duration-300"
                          />
                        </button>
                        <button className="group/actions p-[4px] border border-light-gray rounded-[5px] group hover:bg-main transition duration-300">
                          <Repeat
                            size={16}
                            strokeWidth={1}
                            className="text-gray group-hover/actions:text-white transition duration-300"
                          />
                        </button>
                        <button className="group/actions p-[4px] border border-light-gray rounded-[5px] group hover:bg-main transition duration-300">
                          <ShoppingBasketIcon
                            size={16}
                            strokeWidth={1}
                            className="text-gray group-hover/actions:text-white transition duration-300"
                          />
                        </button>
                      </div>
                    </div>

                    <div className="content p-5 border-t border-light-gray">
                      <h6 className="category text-[#999] text-[13px] mb-[10px] leading-none">
                        {product.nameCategory}
                      </h6>
                      <h4 className="name text-slate-gray text-[14px] font-normal tracking-[0.85px] mb-[10px] line-clamp-2 h-[44.8px] hover:text-main transition duration-300 cursor-pointer">
                        {product.name}
                      </h4>
                      <div className="wrap-price">
                        <div className="rating flex items-center justify-between mb-[10px] tracking-wide min-h-[19.5px]">
                          <Rating rating={product.rating} />
                          <span className="text-[13px] text-gray ">
                            {product.quantity !== undefined
                              ? product.quantity
                              : ""}
                          </span>
                        </div>
                        <div className="price flex items-center text-slate-gray text-sm">
                          <span className="price mr-2 font-bold">
                            ${product.price.toFixed(2)}
                          </span>
                          {product.old_price && (
                            <span className="price-old font-light line-through">
                              ${product.old_price.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {Array.isArray(product.labels) &&
                      product.labels.length > 0 && (
                        <div
                          className={`labels text-[11px] px-[10px] py-[5px] inline text-white font-medium rounded-[5px] absolute top-2 right-2 ${
                            product.labels.includes("New")
                              ? "bg-main"
                              : product.labels.includes("Sale")
                              ? "bg-red"
                              : "bg-main"
                          }`}
                        >
                          {product.labels.join(", ")}
                        </div>
                      )}
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
