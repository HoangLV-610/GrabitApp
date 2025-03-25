import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig.js";

const productList = [
  {
    name: "Mixed Nuts Berries Pack",
    description:
      "Lorem Ipsum is not simply random text. It has roots in classical Latin literature.",
    price: 45.0,
    old_price: 56.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/6_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/6_2.jpg",
    rating: 4,
    quantity: "",
    labels: ["Sale"],
  },
  {
    name: "Multi Grain Combo Cookies",
    description:
      "Lorem Ipsum is not simply random text. It has roots in classical Latin literature.",
    price: 25.0,
    old_price: 30.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/3_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/3_1.jpg",
    rating: 3,
    quantity: "10kg",
    labels: ["Sale"],
  },
  {
    name: "Fresh Mango Juice Pack",
    description:
      "Lorem Ipsum is not simply random text. It has roots in classical Latin literature.",
    price: 46.0,
    old_price: 65.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/9_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/9_2.jpg",
    rating: 3,
    quantity: "",
    labels: [],
  },
  {
    name: "Dates Value Fresh Pouch",
    description:
      "Lorem Ipsum is not simply random text. It has roots in classical Latin literature.",
    price: 78.0,
    old_price: 85.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/2_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/2_2.jpg",
    rating: 3,
    quantity: "",
    labels: ["Sale"],
  },
  {
    name: "Stick Fiber Masala Magic",
    description:
      "Lorem Ipsum is not simply random text. It has roots in classical Latin literature.",
    price: 45.0,
    old_price: 50.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/1_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/1_2.jpg",
    rating: 3,
    quantity: "2pack",
    labels: ["New"],
  },
  {
    name: "Mixed Nuts Berries Pack",
    description:
      "Lorem Ipsum is not simply random text. It has roots in classical Latin literature.",
    price: 45.0,
    old_price: 56.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/6_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/6_2.jpg",
    rating: 4,
    quantity: "",
    labels: ["Sale"],
  },
  {
    name: "Multi Grain Combo Cookies",
    description:
      "Lorem Ipsum is not simply random text. It has roots in classical Latin literature.",
    price: 25.0,
    old_price: 30.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/3_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/3_1.jpg",
    rating: 3,
    quantity: "10kg",
    labels: ["Sale"],
  },
  {
    name: "Fresh Mango Juice Pack",
    description:
      "Lorem Ipsum is not simply random text. It has roots in classical Latin literature.",
    price: 46.0,
    old_price: 65.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/9_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/9_2.jpg",
    rating: 3,
    quantity: "",
    labels: [],
  },
  {
    name: "Dates Value Fresh Pouch",
    description:
      "Lorem Ipsum is not simply random text. It has roots in classical Latin literature.",
    price: 78.0,
    old_price: 85.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/2_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/2_2.jpg",
    rating: 3,
    quantity: "",
    labels: ["Sale"],
  },

  {
    name: "Organic Apple",
    description: "Fresh and organic apples directly from the farm.",
    price: 30.0,
    old_price: 40.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/3_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/3_1.jpg",
    rating: 4,
    quantity: "",
    labels: ["Best Seller"],
  },
  {
    name: "Natural Honey Bottle",
    description: "Pure natural honey with no additives.",
    price: 25.5,
    old_price: 30.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/19_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/19_1.jpg",
    rating: 5,
    quantity: "10kg",
    labels: ["Organic", "Discount"],
  },
  {
    name: "Fresh Carrots Pack",
    description: "High-quality fresh carrots for a healthy diet.",
    price: 15.0,
    old_price: 20.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/20_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/20_1.jpg",
    rating: 4,
    quantity: "30kg",
    labels: ["New Arrival"],
  },
  {
    name: "Almond Milk 1L",
    description: "Lactose-free almond milk with a rich taste.",
    price: 50.0,
    old_price: 60.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/17_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/17_1.jpg",
    rating: 5,
    quantity: "",
    labels: [],
  },
  {
    name: "Whole Wheat Bread",
    description: "Freshly baked whole wheat bread for a healthy breakfast.",
    price: 20.0,
    old_price: 25.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/22_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/22_1.jpg",
    rating: 4,
    quantity: "",
    labels: ["Healthy"],
  },
  {
    name: "Premium Dark Chocolate",
    description: "Rich and smooth dark chocolate with 80% cocoa.",
    price: 35.0,
    old_price: 45.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/20_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/20_1.jpg",
    rating: 5,
    quantity: "",
    labels: ["Best Seller"],
  },
  {
    name: "Fresh Mango Juice Pack",
    description:
      "Lorem Ipsum is not simply random text. It has roots in classical Latin literature.",
    price: 46.0,
    old_price: 65.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/9_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/9_2.jpg",
    rating: 3,
    quantity: "20kg",
    labels: [],
  },
  {
    name: "Greek Yogurt",
    description: "High-protein, low-fat Greek yogurt.",
    price: 28.0,
    old_price: 35.0,
    image_main: "https://example.com/images/yogurt_1.jpg",
    image_hover: "https://example.com/images/yogurt_2.jpg",
    rating: 4,
    quantity: "3kg",
    labels: ["Healthy"],
  },
  {
    name: "Extra Virgin Olive Oil",
    description: "100% pure extra virgin olive oil for cooking and salads.",
    price: 60.0,
    old_price: 80.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/19_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/19_1.jpg",
    rating: 5,
    quantity: "",
    labels: ["Organic"],
  },
  {
    name: "Organic Green Tea",
    description: "Premium organic green tea for a refreshing experience.",
    price: 40.0,
    old_price: 50.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/24_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/24_1.jpg",
    rating: 4,
    quantity: "",
    labels: ["New Arrival"],
  },
  {
    name: "Crunchy Triangle Chips Snacks",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    price: 59.0,
    old_price: 87.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/1_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/1_2.jpg",
    rating: 4,
    quantity: "",
    labels: ["Sale"],
  },
  {
    name: "Dates Value Fresh Pouch",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    price: 78.0,
    old_price: 85.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/2_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/2_2.jpg",
    rating: 3,
    quantity: "30kg",
    labels: ["Sale"],
  },
  {
    name: "Californian Almonds Value Pack",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    price: 58.0,
    old_price: 65.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/3_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/3_1.jpg",
    rating: 2,
    quantity: "",
    labels: ["Sale"],
  },
  {
    name: "Natural Hub Cherry Karonda",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    price: 49.0,
    old_price: 65.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/4_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/4_2.jpg",
    rating: 1,
    quantity: "",
    labels: ["New"],
  },
  {
    name: "Berry & Graps",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    price: 45.0,
    old_price: 50.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/5_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/5_2.jpg",
    rating: 5,
    quantity: "",
    labels: ["New"],
  },
  {
    name: "Organic Brown Eggs Large",
    description: "Fresh organic brown eggs, perfect for baking and cooking.",
    price: 30.0,
    old_price: 40.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/6_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/6_2.jpg",
    rating: 4,
    quantity: "",
    labels: ["New"],
  },
  {
    name: "Apple",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    price: 10.0,
    old_price: 12.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/21_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/21_1.jpg",
    rating: 2,
    quantity: "10kg",
    labels: [],
  },
  {
    name: "Kamalam Fruit",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    price: 15.0,
    old_price: 17.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/22_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/22_1.jpg",
    rating: 4,
    quantity: "",
    labels: ["Sale"],
  },
  {
    name: "Blue Berry",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    price: 11.0,
    old_price: 12.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/23_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/23_1.jpg",
    rating: 3,
    quantity: "14kg",
    labels: ["Sale"],
  },
  {
    name: "Natural Hub Cherry Karonda",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    price: 49.0,
    old_price: 65.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/24_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/24_1.jpg",
    rating: 5,
    quantity: "",
    labels: ["New"],
  },
  {
    name: "Fresh Mango Juice Pack",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    price: 20.0,
    old_price: 21.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/25_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/25_1.jpg",
    rating: 2,
    quantity: "",
    labels: [],
  },
  {
    name: "Tomato - Hybrid",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    price: 5.0,
    old_price: 6.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/11_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/11_1.jpg",
    rating: 3,
    quantity: "90kg",
    labels: [],
  },
  {
    name: "Potato",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    price: 15.0,
    old_price: 17.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/12_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/12_1.jpg",
    rating: 3,
    quantity: "",
    labels: ["Sale"],
  },
  {
    name: "Onion - Hybrid",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    price: 25.0,
    old_price: 30.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/13_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/13_1.jpg",
    rating: 4,
    quantity: "20kg`",
    labels: ["Sale"],
  },
  {
    name: "Coriander Bunch",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    price: 5.0,
    old_price: 7.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/14_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/14_1.jpg",
    rating: 3,
    quantity: "",
    labels: ["New"],
  },
  {
    name: "Capsicum - Red",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    price: 2.0,
    old_price: 3.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/15_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/15_1.jpg",
    rating: 2,
    quantity: "",
    labels: ["New"],
  },
  {
    name: "Sweet Corn",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    price: 6.0,
    old_price: 8.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/17_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/17_1.jpg",
    rating: 5,
    quantity: "",
    labels: ["Sale"],
  },
  {
    name: "Fresh Organic Ginger Pack",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    price: 2.0,
    old_price: 3.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/18_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/18_1.jpg",
    rating: 1,
    quantity: "",
    labels: ["Sale"],
  },
  {
    name: "Ginger - Organic",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    price: 2.0,
    old_price: 3.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/19_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/19_1.jpg",
    rating: 5,
    quantity: "",
    labels: ["Sale"],
  },
  {
    name: "Farm Eggs - Brown",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    price: 3.0,
    old_price: 5.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/20_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/20_1.jpg",
    rating: 3,
    quantity: "",
    labels: ["Sale"],
  },
  {
    name: "Organic Fresh Broccoli",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    price: 10.0,
    old_price: 11.0,
    image_main:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/20_1.jpg",
    image_hover:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/20_1.jpg",
    rating: 3,
    quantity: "",
    labels: ["Sale"],
  },
];

const getCategoryIDs = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const categoryIDs = querySnapshot.docs.map((doc) => doc.id); // Lấy tất cả ID của categories
    return categoryIDs;
  } catch (error) {
    console.error("Lỗi khi lấy categories:", error);
    return [];
  }
};

const addProductsWithCategory = async () => {
  const categoryIDs = await getCategoryIDs(); // Lấy danh sách categoryID
  if (categoryIDs.length === 0) {
    console.error("Không có danh mục nào trong categories.");
    return;
  }

  try {
    for (const product of productList) {
      const randomCategoryID =
        categoryIDs[Math.floor(Math.random() * categoryIDs.length)]; // Chọn 1 categoryID ngẫu nhiên

      await addDoc(collection(db, "products"), {
        ...product,
        categoryID: randomCategoryID, // Gán categoryID vào sản phẩm
      });

      console.log(
        `Thêm sản phẩm: ${product.name} với categoryID: ${randomCategoryID}`
      );
    }
    console.log("Thêm tất cả sản phẩm thành công!");
  } catch (error) {
    console.error("Lỗi khi thêm sản phẩm:", error);
  }
};

// Chạy hàm thêm sản phẩm
addProductsWithCategory();
