import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { handleGetAllBlogsAPI } from "../redux/slice/blog.slice";
import { Swiper, SwiperSlide } from "swiper/react";
import ItemBlogs from "../components/blogs/ItemBlogs";
import { Grid, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/modules";
import "swiper/css/navigation";
import "swiper/bundle";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import NavigationCustom from "../components/navigation/NavigationCustom";

import "./style.scss";

const Blogs = () => {
  const dispatch = useDispatch();
  const [listBlogs, setListBlogs] = useState([]);
  useEffect(() => {
    const fetchDataBlogs = async () => {
      try {
        const allBlog = await dispatch(handleGetAllBlogsAPI()).unwrap();
        setListBlogs(allBlog);
      } catch (error) {
        console.log("Không lấy được dữ liệu của tin tức", error);
      }
    };
    fetchDataBlogs();
  }, [dispatch]);

  const [pageCurrent, setPageCurrent] = useState(1);
  const blogsPerPage = 6;
  const totalPages = Math.ceil(listBlogs.length / blogsPerPage);

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
      swiperRef.current.slideTo(swiperRef.current.activeIndex - 3);
    }
  };

  return (
    <div className="section-blogs container mx-auto">
      <Breadcrumb titleBreadcrumb={"Blog Page"} />
      <div className="list-blogs py-10">
        <Swiper
          modules={[Navigation, Grid]}
          spaceBetween={24}
          slidesPerView={3}
          grid={{ rows: 2, fill: "row" }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="!gap-y-[48px]"
        >
          {(listBlogs || []).map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <ItemBlogs blog={item} showDescription={true} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <NavigationCustom
          allList={listBlogs}
          pageCurrent={pageCurrent}
          typeList={"blogs"}
          prevRef={prevRef}
          nextRef={nextRef}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      </div>
    </div>
  );
};

export default Blogs;
