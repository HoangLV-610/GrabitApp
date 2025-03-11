import {
  collection,
  count,
  getAggregateFromServer,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../firebaseConfig";

export const CategoryContext = createContext();

// Hàm lấy số lượng sản phẩm của từng danh mục
const getCategoryQuantity = async (categoryID) => {
  try {
    const q = query(
      collection(db, "products"),
      where("categoryID", "==", categoryID)
    );
    // Sử dụng count() để lấy số lượng mà không cần tải toàn bộ dữ liệu
    const snapshot = await getAggregateFromServer(q, { count: count() });
    return snapshot.data().count; // Trả về số lượng sản phẩm
  } catch (error) {
    console.error("Lỗi khi lấy số lượng sản phẩm:", error);
    return 0;
  }
};

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "categories")); // Lấy danh mục từ Firestore
        const categoriesData = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const quantity = await getCategoryQuantity(doc.id);
            // Lấy số lượng sản phẩm
            return { id: doc.id, quantity, ...doc.data() }; // Gộp vào object
          })
        );
        setCategories(categoriesData);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ Firebase:", error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
