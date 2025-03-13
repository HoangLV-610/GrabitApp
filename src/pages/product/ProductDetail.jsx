import { useLocation } from "react-router-dom";
import ImageProductDetail from "./ImageProductDetail";
import InfoProductDetail from "./InfoProductDetail";
import ProductsYouMayLike from "./ProductsYouMayLike";
import ProductTabs from "./ProductTabs";

const images = [
  "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/5_1.jpg",
  "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/4_1.jpg",
  "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/2_1.jpg",
  "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/3_1.jpg",
  "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/1_1.jpg",
];

const ProductDetail = () => {
  // lấy ra chi tiết product
  const location = useLocation();
  const product = location.state.product;
  // tất cả ảnh
  const allImages = [product.image_main, ...images];

  return (
    <div className="wrap-content ">
      <div className="info-container flex-1 w-full flex flex-wrap gap-x-[24px]">
        <ImageProductDetail allImages={allImages} />
        <InfoProductDetail product={product} />
      </div>
      <div className="you-may-like">
        <ProductsYouMayLike categoryID={product.categoryID} />
      </div>
      <div className="product-tabs">
        <ProductTabs />
      </div>
    </div>
  );
};

export default ProductDetail;
