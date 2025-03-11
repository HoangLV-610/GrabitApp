import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Cấu hình Toastify
export const showToast = (message, type = "success") => {
  toast[type](message, {
    position: "top-right",
    autoClose: 3000, // Đóng sau 3 giây
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};
