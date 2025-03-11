import { Swiper, SwiperSlide } from "swiper/react";
import ItemBlogs from "./ItemBlogs";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Blogs = () => {
  const [listBlogs, setListBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const blogsSnapshot = await getDocs(collection(db, "blogs"));
        const dataBlogs = blogsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setListBlogs(dataBlogs);
      } catch (error) {
        console.log("Lỗi khi lấy dữ liệu từ Firebase", error);
      }
    };
    fetchBlogsData();
  }, []);
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
