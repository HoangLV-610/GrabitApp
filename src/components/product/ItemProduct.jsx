import { Eye, Heart, Repeat, ShoppingBasketIcon } from "lucide-react";
import Rating from "../ui/rating/Rating";
import useUserId from "../../hooks/useUserId";
import { showToast } from "../../utils/toast";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAddWishListAPI,
  handleGetAllWishListAPI,
  removeProductWishListAPI,
} from "../../redux/slice/productWishList.slice";
import { useEffect, useState } from "react";
import { store } from "../../redux/configStore";

const ItemProduct = (props) => {
  const { product } = props;
  const [isInWishlist, setIsInWishlist] = useState(false);
  const userId = useUserId();
  const dispatch = useDispatch();

  // Lấy danh sách Wishlist từ Redux
  const wishlist = useSelector((state) => state.productWishList.arrWishList);
  useEffect(() => {
    dispatch(handleGetAllWishListAPI()); // Gọi API khi component mount
  }, [dispatch]);

  useEffect(() => {
    setIsInWishlist(
      wishlist?.some((item) => item.productId === product.id) || false
    );
  }, [wishlist, product]);

  // Xử lý thêm/xóa Wishlist
  const handleAddWishList = async (event) => {
    event.stopPropagation();
    if (!userId) {
      showToast("Vui lòng đăng nhập", "error");
      return;
    }

    // Lấy danh sách mới nhất từ Redux
    const currentWishlist = store.getState().productWishList.arrWishList;

    // Kiểm tra sản phẩm đã tồn tại chưa
    const isAlreadyInWishlist = currentWishlist.some(
      (item) => item.productId === product.id
    );

    try {
      if (isAlreadyInWishlist) {
        await dispatch(
          removeProductWishListAPI({ userId, productId: product.id })
        ).unwrap();

        // Cập nhật lại danh sách từ Redux sau khi xoá
        dispatch(handleGetAllWishListAPI());
        setIsInWishlist(false);
      } else {
        await dispatch(
          handleAddWishListAPI({ userId, productId: product.id })
        ).unwrap();

        // Cập nhật lại danh sách từ Redux sau khi thêm
        dispatch(handleGetAllWishListAPI());
        setIsInWishlist(true);
      }
    } catch (error) {
      console.log("Lỗi xử lý wishlist:", error);
    }
  };

  return (
    <div className="item-product border border-light-gray relative group cursor-pointer rounded-[5px]">
      <div className="image relative">
        <div className="relative w-full h-auto aspect-[238/205] overflow-hidden group">
          <img
            src={product.image_main}
            alt={product.name}
            className={`w-full h-full transition-all duration-500 ${
              product.image_main === product.image_hover
                ? "group-hover:scale-110"
                : "opacity-100 group-hover:opacity-0"
            }`}
          />

          {product.image_main !== product.image_hover && (
            <img
              src={product.image_hover}
              alt={product.name}
              className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          )}
        </div>

        {/* Actions Item Products */}
        <div className="actions flex gap-1 justify-center absolute bottom-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:bottom-2 transition-all duration-500">
          <button
            onClick={handleAddWishList}
            className={`group/actions p-[4px] border border-light-gray rounded-[5px] transition duration-300 ${
              isInWishlist ? "bg-main" : "hover:bg-main"
            }`}
          >
            <Heart
              size={16}
              strokeWidth={1}
              className={`text-gray transition duration-300 ${
                isInWishlist ? "text-white" : "group-hover/actions:text-white"
              }`}
            />
          </button>

          <button className="group/actions p-[4px] border border-light-gray rounded-[5px] group hover:bg-main transition duration-300">
            <Eye
              size={16}
              strokeWidth={1}
              className="text-gray group-hover/actions:text-white transition duration-300"
            />
          </button>
          <button className="group/actions p-[4px] border border-light-gray rounded-[5px] group hover:bg-main transition duration-300">
            <Repeat
              size={16}
              strokeWidth={1}
              className="text-gray group-hover/actions:text-white transition duration-300"
            />
          </button>
          <button className="group/actions p-[4px] border border-light-gray rounded-[5px] group hover:bg-main transition duration-300">
            <ShoppingBasketIcon
              size={16}
              strokeWidth={1}
              className="text-gray group-hover/actions:text-white transition duration-300"
            />
          </button>
        </div>
      </div>
      <div className="content p-5 border-t border-light-gray">
        <h6 className="category text-[#999] text-[13px] mb-[10px] leading-none">
          {product.nameCategory}
        </h6>
        <h4 className="name text-slate-gray text-[14px] font-normal tracking-[0.85px] mb-[10px] line-clamp-2 h-[44.8px] hover:text-main transition duration-300 cursor-pointer">
          {product.name}
        </h4>
        <div className="wrap-price">
          <div className="rating flex items-center justify-between mb-[10px] tracking-wide min-h-[19.5px]">
            <Rating rating={product.rating} />
            <span className="text-[13px] text-gray ">
              {product.quantity !== undefined ? product.quantity : ""}
            </span>
          </div>
          <div className="price flex items-center text-slate-gray text-sm">
            <span className="price mr-2 font-bold">
              ${product.price.toFixed(2)}
            </span>
            <span className="price-old font-light line-through">
              ${product.old_price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      {Array.isArray(product.labels) && product.labels.length > 0 && (
        <div
          className={`labels text-[11px] px-[10px] py-[5px] inline text-white font-medium rounded-[5px] absolute top-2 right-2 ${
            product.labels.includes("New")
              ? "bg-main"
              : product.labels.includes("Sale")
              ? "bg-red"
              : "bg-main"
          }`}
        >
          {product.labels.join(", ")}
        </div>
      )}
    </div>
  );
};

export default ItemProduct;
