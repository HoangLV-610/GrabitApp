import { Swiper, SwiperSlide } from "swiper/react";
import ItemBlogs from "./ItemBlogs";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleGetAllBlogsAPI } from "../../redux/slice/blog.slice";

const Blogs = () => {
  const dispatch = useDispatch();
  const [listBlogs, setListBlogs] = useState([]);

  useEffect(() => {
    const fetchDataBlogs = async () => {
      try {
        const listBlog = await dispatch(handleGetAllBlogsAPI()).unwrap();
        setListBlogs(listBlog);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu tin tức:", error);
      }
    };
    fetchDataBlogs();
  }, [dispatch]);
  return (
    <>
      <div className="product-blogs">
        <div className="wrap-content py-10 container mx-auto">
          <div className="title">
            <p>
              Latest <span className="text-hight-light">Blogs</span>
            </p>
            <span className="sub-title">
              <p>We tackle interesting topics every day in 2023.</p>
            </span>
          </div>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={5}
            spaceBetween={24}
          >
            {listBlogs.length > 0 &&
              listBlogs.map((blog, index) => {
                return (
                  <SwiperSlide key={index}>
                    <ItemBlogs blog={blog} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Blogs;
