import Breadcrumb from "../components/breadcrumb/Breadcrumb";

import imageAbout1 from "../assets/image/about-1.png";
import imageAbout2 from "../assets/image/about-2.png";
import imageAbout3 from "../assets/image/about-3.png";
import Services from "../components/services/Services";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css";
import ItemOurTeam from "./ItemOurTeam";
import Facts from "../components/facts/Facts";
import { Autoplay } from "swiper/modules";

// data our team
const teamData = [
  {
    id: 1,
    name: "Emma Welson",
    position: "Manager",
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/user/3.jpg",
  },
  {
    id: 2,
    name: "Benjamin Martin",
    position: "Leader",
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/user/4.jpg",
  },
  {
    id: 3,
    name: "Amelia Martin",
    position: "Leader",
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/user/5.jpg",
  },
  {
    id: 4,
    name: "Olivia Smith",
    position: "Founder",
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/user/1.jpg",
  },
  {
    id: 5,
    name: "William Dalin",
    position: "Co-Founder",
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/user/2.jpg",
  },
  {
    id: 7,
    name: "Olivia Smith",
    position: "Founder",
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/user/1.jpg",
  },
  {
    id: 8,
    name: "William Dalin",
    position: "Co-Founder",
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/user/2.jpg",
  },
];

const AboutUs = () => {
  return (
    <div className="section-about-us">
      <div className="wrap-content container mx-auto">
        <Breadcrumb titleBreadcrumb={"About Us"} />

        {/* Who we are */}
        <div className="wrap-who-we-are flex justify-between gap-x-[24px] py-10">
          <div className="wrap-image grid grid-cols-2 gap-[24px] flex-1">
            <div className="grid grid-cols-1">
              <img
                className="w-full h-full bg-cover rounded-xl"
                src={imageAbout1}
                alt="imageAbout1"
              />
            </div>
            <div className="grid grid-cols-1 gap-[24px]">
              <img
                className="w-full h-auto bg-cover rounded-xl"
                alt="about"
                src={imageAbout2}
              />
              <img
                className="w-full h-auto bg-cover rounded-xl"
                alt="about"
                src={imageAbout3}
              />
            </div>
          </div>
          <div className="wrap-des flex flex-col justify-center flex-1">
            <div className="wrap-title mb-5">
              <h2 className="text-slate-gray text-[26px] font-semibold mb-[15px] leading-none">
                Who We <span className="text-hight-light">Are?</span>
              </h2>
              <p className="text-gray text-[18px] font-medium uppercase">
                We’re here to serve only the best products for you. Enriching
                your homes with the best essentials.
              </p>
            </div>
            <div className="content text-gray text-[14px] font-normal font-poppins leading-[28px] tracking-[.02rem] flex  flex-col gap-y-[16px]">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p>
                Lorem Ipsum has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially
                unchanged.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>

        {/* Service */}
        <div className="wrap-service py-10">
          <div className="wrap-content text-center flex flex-col items-center">
            <div className="wrap-title max-w-[400px] text-center">
              <h2 className="text-slate-gray text-[26px] font-semibold mb-[15px] leading-none">
                Our <span className="text-hight-light">Services</span>
              </h2>
              <p className="mt-[15px] text-gray font-light font-poppins text-[14px] leading-[23px]">
                Customer service should not be a department. It should be the
                entire company.
              </p>
            </div>
            <Services />
          </div>
        </div>

        {/* Our Team */}
        <div className="wrap-service py-10">
          <div className="wrap-content text-center flex flex-col items-center">
            <div className="wrap-title max-w-[400px] text-center">
              <h2 className="text-slate-gray text-[26px] font-semibold mb-[15px] leading-none">
                Our <span className="text-hight-light">Team</span>
              </h2>
              <p className="mt-[15px] text-gray font-light font-poppins text-[14px] leading-[23px]">
                Meet out expert team members.
              </p>
            </div>
            <div className="list-our-team w-full py-10">
              <div className="wrap-content">
                <Swiper
                  spaceBetween={24}
                  slidesPerView={5}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }} // Tự động chạy
                  modules={[Autoplay]} // Kích hoạt Autoplay
                >
                  {teamData.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <ItemOurTeam dataOurTeam={item} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        {/* Count */}
        <Facts />
      </div>
    </div>
  );
};

export default AboutUs;
