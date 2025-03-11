import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Rating from "../ui/rating/Rating";
import { Eye, Heart, Repeat, ShoppingBasketIcon } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { ProductContext } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

import { pathRoute } from "../../routes/path";

const ProductDeal = () => {
  const navigate = useNavigate();
  const listProducts = useContext(ProductContext);
  const [productDeals, setProductDeals] = useState([]);

  // lấy danh sách sản phẩm deals
  useEffect(() => {
    const fetchDealsProducts = async () => {
      try {
        // Lấy ID của nhóm "Deals"
        const groupsSnapshot = await getDocs(collection(db, "groups"));
        const dealsGroup = groupsSnapshot.docs.find(
          (doc) => doc.data().name === "Deals"
        );
        const dealsGroupID = dealsGroup.id;

        if (!dealsGroup) {
          console.log("Không tìm thấy nhóm Deals!");
          return [];
        }

        // **Lọc danh sách sản phẩm có chứa groupID của Deals**
        const dealsProducts = listProducts.filter((product) => {
          return product.groupIDs?.includes(dealsGroupID);
        });
        return setProductDeals(dealsProducts);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sản phẩm Deals:", error);
        return [];
      }
    };

    fetchDealsProducts();
  }, [listProducts]);

  // nhấn sang trang chi tiết một sản phẩm
  const handleProductDetail = (product) => {
    const serializableProduct = JSON.parse(JSON.stringify(product));
    navigate(pathRoute.productDetail, {
      state: { product: serializableProduct },
    });
  };

  return (
    <div className="product-deals">
      <div className="wrap-content py-10 container mx-auto">
        <div className="title">
          <p>
            Day Of The <span className="text-hight-light">Deal</span>
          </p>
          <span className="sub-title">
            <p>Don`t wait. The time will never be just right.</p>
          </span>
        </div>
        <div className="list-product-deals">
          <Swiper spaceBetween={24} slidesPerView={5} loop={true}>
            {productDeals.map((product) => {
              return (
                <SwiperSlide
                  key={product.id}
                  onClick={() => handleProductDetail(product)}
                >
                  <div className="item-product border border-light-gray relative group cursor-pointer rounded-[5px]">
                    <div className="image relative">
                      <div className="relative w-full h-auto aspect-[238/205] overflow-hidden group">
                        {/* Ảnh chính */}
                        <img
                          src={product.image_main}
                          alt={product.name}
                          className={`w-full h-full transition-all duration-500 ${
                            product.image_main === product.image_hover
                              ? "group-hover:scale-110"
                              : "opacity-100 group-hover:opacity-0"
                          }`}
                        />

                        {/* Ảnh hover (chỉ hiển thị nếu khác ảnh chính) */}
                        {product.image_main !== product.image_hover && (
                          <img
                            src={product.image_hover}
                            alt={product.name}
                            className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                          />
                        )}
                      </div>

                      {/* Actions Item Products */}
                      <div className="actions flex gap-1 justify-center absolute bottom-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-2 transition-all duration-500">
                        <button className=" group/actions p-[4px] border border-light-gray rounded-[5px] group hover:bg-main transition duration-300">
                          <Heart
                            size={16}
                            strokeWidth={1}
                            className="text-gray group-hover/actions:text-white transition duration-300"
                          />
                        </button>

                        <button className=" group/actions p-[4px] border border-light-gray rounded-[5px] group hover:bg-main transition duration-300">
                          <Eye
                            size={16}
                            strokeWidth={1}
                            className="text-gray group-hover/actions:text-white transition duration-300"
                          />
                        </button>
                        <button className=" group/actions p-[4px] border border-light-gray rounded-[5px] group hover:bg-main transition duration-300">
                          <Repeat
                            size={16}
                            strokeWidth={1}
                            className="text-gray group-hover/actions:text-white transition duration-300"
                          />
                        </button>
                        <button className=" group/actions p-[4px] border border-light-gray rounded-[5px] group hover:bg-main transition duration-300">
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
                      <h4 className="name text-slate-gray text-[14px] font-normal tracking-[0.85px] mb-[10px] line-clamp-2 h-[44.8px] hover:text-main transition duration-300  cursor-pointer">
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
                          <span className="price-old font-light line-through">
                            ${product.old_price.toFixed(2)}
                          </span>
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
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductDeal;
