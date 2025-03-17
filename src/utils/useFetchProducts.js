import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleGetAllProductAPI } from "../redux/slice/product.slice";

// lấy danh sách sản phẩm
const useFetchProducts = () => {
  const dispatch = useDispatch();
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await dispatch(handleGetAllProductAPI()).unwrap();
        setListProducts(list);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return listProducts;
};

export default useFetchProducts;
