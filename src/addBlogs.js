import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebaseConfig.js";

const listBlogs = [
  {
    date: "June 30, 2022",
    category: "Organic",
    title: "Marketing Guide: 5 Steps to Success to way.",
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/blog/1.jpg",
  },
  {
    date: "April 02, 2022",
    category: "Fruits",
    title: "Best way to solve business deal issue in market.",
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/blog/2.jpg",
  },
  {
    date: "March 09, 2022",
    category: "Vegetables",
    title: "31 grocery customer service stats know in 2019.",
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/blog/3.jpg",
  },
  {
    date: "January 25, 2022",
    category: "Fastfood",
    title: "Business ideas to grow your business traffic.",
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/blog/4.jpg",
  },
  {
    date: "December 10, 2021",
    category: "Fruits",
    title: "Marketing Guide: 5 Steps way to Success.",
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/blog/5.jpg",
  },
  {
    date: "August 08, 2021",
    category: "Vegetables",
    title: "15 customer service stats idea know in 2023.",
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/blog/6.jpg",
  },
];
const addBlog = async () => {
  try {
    for (const blog of listBlogs) {
      await addDoc(collection(db, "blogs"), {
        ...blog,
      });

      console.log(`Thêm sản phẩm: ${blog.title} `);
    }
    console.log("Thêm tất cả sản phẩm thành công!");
  } catch (error) {
    console.error("Lỗi khi thêm sản phẩm:", error);
  }
};

addBlog();
