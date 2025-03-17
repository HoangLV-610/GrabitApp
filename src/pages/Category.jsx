import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import CategoryContent from "../components/category/Category";
import Sidebar from "../templates/SidebarTemplate/component/Sidebar";
import useFetchProducts from "../utils/useFetchProducts";
import ItemProduct from "../components/product/ItemProduct";
import { useHandleProductDetail } from "../utils/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Category = () => {
  const listProduct = useFetchProducts();
  const handleProductDetail = useHandleProductDetail();

  const [pageCurrent, setPageCurrent] = useState(1);
  const productsPerPage = 9;
  const totalPages = Math.ceil(listProduct.length / productsPerPage);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const handleNextPage = () => {
    if (pageCurrent < totalPages) {
      const newPage = pageCurrent + 1;
      setPageCurrent(newPage);
      swiperRef.current?.swiper.slideTo((newPage - 1) * 3);
    }
  };

  const handlePrevPage = () => {
    if (pageCurrent > 1) {
      const newPage = pageCurrent - 1;
      setPageCurrent(newPage);
      swiperRef.current?.swiper.slideTo((newPage - 1) * 3);
    }
  };

  return (
    <div className="wrap-product-component container mx-auto">
      <Breadcrumb
        titleBreadcrumb="Product Page"
        itemBreadcrumb="Product Page"
      />
      <CategoryContent />
      <div className="container grid grid-cols-12 mx-auto gap-x-[24px] mb-10">
        <div className="sidebar-container col-span-3">
          <Sidebar />
        </div>
        <div className="content-container col-span-9">
          <Swiper
            ref={swiperRef}
            modules={[Grid, Navigation]}
            spaceBetween={24}
            slidesPerView={3}
            slidesPerGroup={3} // Di chuyển theo nhóm 3 cột (9 sản phẩm)
            grid={{ rows: 3, fill: "row" }}
            loop={false}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
          >
            {(listProduct || []).map((product) => (
              <SwiperSlide
                key={product.id}
                onClick={() => handleProductDetail(product)}
              >
                <ItemProduct product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="wrap-navigation flex justify-between items-center mt-4">
            <span>
              Showing {(pageCurrent - 1) * productsPerPage + 1}-
              {Math.min(pageCurrent * productsPerPage, listProduct.length)} of{" "}
              {listProduct.length} item(s)
            </span>
            <div className="flex items-center gap-x-[5px] text-[16px] font-light">
              <button
                onClick={handlePrevPage}
                ref={prevRef}
                disabled={pageCurrent === 1}
                className={`btn-prev w-auto px-[10px] text-white bg-main leading-[30px] rounded-[5px] cursor-pointer flex items-center mt-[1px] ${
                  pageCurrent === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {pageCurrent > 1 && (
                  <ChevronLeft size={14} className="mr-[6px] mt-[1px]" />
                )}
                Prev
              </button>
              <span className="w-auto px-[13px] text-white bg-main leading-[30px] rounded-[5px]">
                {pageCurrent}
              </span>
              <button
                onClick={handleNextPage}
                ref={nextRef}
                disabled={pageCurrent === totalPages}
                className={`btn-next w-auto px-[13px] text-white bg-main leading-[30px] rounded-[5px] cursor-pointer flex items-center mt-[1px] ${
                  pageCurrent === totalPages
                    ? "opacity-50 !cursor-not-allowed"
                    : ""
                }`}
              >
                Next
                {pageCurrent < totalPages && (
                  <ChevronRight size={14} className="ml-[6px] mt-[1px]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
