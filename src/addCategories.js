import { db } from "./firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

// Dữ liệu danh mục
const categories = [
  { icon: "Citrus", title: "Fruits", sale: "30", bgClass: "bg-orange-100" },
  { icon: "Croissant", title: "Bakery", sale: "30", bgClass: "bg-yellow-100" },
  { icon: "Leaf", title: "Vegetables", sale: "0", bgClass: "bg-green-100" },
  { icon: "Milk", title: "Dairy & Milk", sale: "", bgClass: "bg-blue-100" },
  {
    icon: "Popcorn",
    title: "Snack & Spice",
    sale: "15",
    bgClass: "bg-yellow-200",
  },
  {
    icon: "CupSoda",
    title: "Juice & Drinks",
    sale: "10",
    bgClass: "bg-purple-100",
  },
  { icon: "Fish", title: "Seafood", sale: "", bgClass: "bg-indigo-100" },
  { icon: "Egg", title: "Eggs", sale: "", bgClass: "bg-yellow-200" },
];

// Thêm danh mục mới với số lượng chính xác
const addCategories = async () => {
  const categoriesRef = collection(db, "categories");

  for (let category of categories) {
    try {
      // Thêm danh mục vào Firestore
      await addDoc(categoriesRef, { ...category });
      console.log(`✅ Đã thêm danh mục: ${category.title}`);
    } catch (error) {
      console.error(`❌ Lỗi khi thêm ${category.title}:`, error);
    }
  }

  console.log("🔥 Hoàn thành thêm tất cả danh mục mới!");
};
