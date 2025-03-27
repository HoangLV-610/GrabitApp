import { useSelector } from "react-redux";

const useUserId = () => {
  const user = useSelector((state) => state.userSlice?.user); // Kiểm tra user có tồn tại không
  const userId = user?.userId || null; // Tránh lỗi khi user chưa đăng nhập

  return userId;
};

export default useUserId;
