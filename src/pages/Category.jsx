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

import NavigationCustom from "../components/navigation/NavigationCustom";

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
      swiperRef.current.slideTo(swiperRef.current.activeIndex + 3);
    }
  };

  const handlePrevPage = () => {
    if (pageCurrent > 1) {
      const newPage = pageCurrent - 1;
      setPageCurrent(newPage);
      swiperRef.current.slideTo(swiperRef.current.activeIndex + 3);
    }
  };

  return (
    <div className="wrap-product-component container mx-auto">
      <Breadcrumb titleBreadcrumb="Product Page" />
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
            onSwiper={(swiper) => (swiper.current = swiper)}
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

          <NavigationCustom
            allList={listProduct}
            pageCurrent={pageCurrent}
            typeList={"product"}
            prevRef={prevRef}
            nextRef={nextRef}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
