import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

import bannerVertical from "../../assets/image/banner-top-product.jpg";

// data product
import { Swiper, SwiperSlide } from "swiper/react";
import ItemTopProduct from "./ItemTopProduct";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import BannerSale from "../../pages/banner/BannerSale";
const FILTERED_GROUPS = ["Trendings", "Rated", "Selling"];

const TopProduct = () => {
  const listProducts = useContext(ProductContext);

  const [groups, setGroups] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  useEffect(() => {
    const fetchGroupsData = async () => {
      try {
        const groupsSnapshot = await getDocs(collection(db, "groups"));
        const fetchedGroups = groupsSnapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter((group) => FILTERED_GROUPS.includes(group.name)); // Chỉ lấy nhóm cần thiết

        setGroups(fetchedGroups);

        // Lọc sản phẩm có group thuộc các nhóm này
        const filteredProducts = listProducts.filter((product) =>
          product.groupIDs?.some((groupID) =>
            fetchedGroups.some((group) => group.id === groupID)
          )
        );

        setTopProduct(filteredProducts);
      } catch (error) {
        console.log("Không tìm thấy Groups!", error);
      }
    };

    fetchGroupsData();
  }, [listProducts]);
  return (
    <div className="grid grid-cols-12 container mx-auto space-x-[24px] py-10">
      <div className="banner col-span-3">
        <BannerSale
          image={bannerVertical}
          title="Our top most products check it now"
          buttonText="Shop now"
          buttonLink="/shop"
          layoutType="vertical"
        ></BannerSale>
      </div>
      {groups.map((group, index) => {
        const prevBtnId = `swiper-button-prev-${index}`;
        const nextBtnId = `swiper-button-next-${index}`;
        const products = topProduct.filter((product) => {
          return product.groupIDs?.some((groupID) => {
            return groupID === group.id;
          });
        });

        return (
          <div key={index} className="col-span-3  !flex-row justify-between">
            <div className="title w-full !flex justify-between !mb-[52px]">
              <h3>
                Top <span className="text-hight-light">{group.name}</span>
              </h3>
              {/* Navigation buttons */}
              <div className="inline-flex space-x-2 justify-end">
                <button id={prevBtnId} className="swiper-button-prev-custom">
                  <ChevronLeft className="hover:text-main" />
                </button>
                <button id={nextBtnId} className="swiper-button-next-custom">
                  <ChevronRight className="hover:text-main" />
                </button>
              </div>
            </div>

            {products.length > 0 && (
              <Swiper
                modules={[Navigation, Grid]}
                navigation={{
                  nextEl: `#${nextBtnId}`,
                  prevEl: `#${prevBtnId}`,
                }}
                autoplay={{ disableOnInteraction: true }}
                loop={true}
                slidesPerView={1}
                grid={{ rows: 3, fill: "row" }}
                spaceBetween={15}
              >
                {products.map((product, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <ItemTopProduct product={product} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TopProduct;
