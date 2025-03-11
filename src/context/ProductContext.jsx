import { createContext, useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [listProducts, setListProducts] = useState([]);

  const getNameCategory = async (categoryID) => {
    try {
      const categoriesSnapshot = await getDocs(collection(db, "categories"));
      const categories = categoriesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const category = categories.find((cat) => cat.id === categoryID);

      return category ? category.title : "Không xác định";
    } catch (error) {
      console.error("Lỗi khi lấy danh mục:", error);
      return "Không xác định";
    }
  };

  useEffect(() => {
    const fetchDataProduct = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataProduct = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          nameCategory: getNameCategory(doc.data().categoryID),
        }));

        setListProducts(dataProduct);
      } catch (error) {
        console.log("Lỗi khi lấy dữ liệu từ Firebase", error);
      }
    };

    fetchDataProduct();
  }, []);

  return <ProductContext value={listProducts}>{children}</ProductContext>;
};
