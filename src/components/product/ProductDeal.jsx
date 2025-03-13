import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { ProductContext } from "../../context/ProductContext";
import ItemProduct from "./ItemProduct";
import { useHandleProductDetail } from "../../utils/navigation";

const ProductDeal = () => {
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
  const handleProductDetail = useHandleProductDetail();

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
                  <ItemProduct product={product} />
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
