import { useNavigate } from "react-router-dom";
import { pathRoute } from "../routes/path";

export const useHandleProductDetail = () => {
  const navigate = useNavigate();

  return (product) => {
    const serializableProduct = JSON.parse(JSON.stringify(product));
    const productDetailPath = pathRoute.productDetail.replace(
      ":id",
      product.id
    );

    navigate(productDetailPath, {
      state: { product: serializableProduct },
    });
  };
};
