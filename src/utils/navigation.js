import { useNavigate } from "react-router-dom";
import { pathRoute } from "../routes/path";

export const useHandleProductDetail = () => {
  const navigate = useNavigate();

  return (product) => {
    console.log(product);

    const serializableProduct = JSON.parse(JSON.stringify(product));
    navigate(pathRoute.productDetail, {
      state: { product: serializableProduct },
    });
  };
};
