import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageProductDetail = ({ allImages }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // Lưu index ảnh hiện tại

  // Tạo ref cho các nút điều hướng
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="wrap-image max-w-[47.3%] flex-1 relative">
      <div className="wrap-content sticky p-[15px] top-[30px] border border-light-gray rounded-[5px]">
        {/* Swiper chính */}
        <Swiper
          modules={[Navigation, Thumbs]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          loop={true}
          thumbs={{ swiper: thumbsSwiper }} // Kết nối với thumbnail
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
            if (thumbsSwiper) {
              thumbsSwiper.slideTo(swiper.realIndex); // 🔥 Đưa thumbnail active lên đầu
            }
          }}
        >
          {allImages.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Product ${index}`} className=" rounded-lg" />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Swiper thumbnail */}
        <div className="relative">
          {/* Nút điều hướng */}
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2"
          >
            <ChevronLeft className="text-gray hover:text-main" size={24} />
          </button>

          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            spaceBetween={10}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className="cursor-pointer"
          >
            {allImages.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Thumbnail ${index}`}
                  className={`w-full rounded-lg transition-all duration-300 ${
                    activeIndex === index
                      ? "border border-main"
                      : "border border-transparent"
                  }`}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2"
          >
            <ChevronRight className="text-gray hover:text-main" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageProductDetail;
