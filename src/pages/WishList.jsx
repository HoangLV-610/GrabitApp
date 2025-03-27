import { Table } from "antd";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleGetAllProductAPI } from "../redux/slice/product.slice";
import Button from "../components/ui/button/Button";
import { ShoppingBasketIcon, X } from "lucide-react";
import { useHandleProductDetail } from "../utils/navigation";
import ItemProduct from "../components/product/ItemProduct";

import "swiper/css";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import {
  handleGetAllWishListAPI,
  removeProductWishListAPI,
} from "../redux/slice/productWishList.slice";
import { showToast } from "../utils/toast";

import useUserId from "../hooks/useUserId";

const WishList = () => {
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.productSlice.arrProduct);
  const wishList = useSelector((state) => state.productWishList.arrWishList);

  const userId = useUserId();

  useEffect(() => {
    if (userId) {
      dispatch(handleGetAllWishListAPI()); // Gọi API để cập nhật wishList
    }
  }, [userId]);

  // lấy ra danh sách product
  useEffect(() => {
    const fetchListProduct = async () => {
      try {
        dispatch(handleGetAllProductAPI());
      } catch (error) {
        console.log("Không lấy được list product", error);
      }
    };

    fetchListProduct(); // Gọi API ngay lập tức khi component mount
  }, [dispatch]); // ✅ Chỉ chạy một lần

  // từ idproduct lấy ra thông tin của product
  const listAllWishList = wishList.map((wish) => {
    const product =
      listProduct?.find((product) => product.id === wish.productId) || {};

    return {
      ...wish,
      dataProduct: product,
    };
  });

  console.log(listAllWishList);

  // Cấu hình cột cho bảng
  const styleTitleTable =
    "text-[15px] font-medium font-poppins text-slate-gray";
  const styleContentTable =
    "text-[16px] text-gray font-normal font-poppins tracking-[.02rem]";
  const columns = [
    {
      title: <p className={styleTitleTable}>ID</p>,
      render: (_, __, index) => (
        <span className={styleContentTable}>{index + 1}</span>
      ),
    },
    {
      title: <p className={styleTitleTable}>Image</p>,
      dataIndex: "dataProduct",
      key: "image",
      render: (dataProduct) => (
        <img src={dataProduct?.image_main} alt={dataProduct?.name} width={50} />
      ),
    },
    {
      title: <p className={styleTitleTable}>Name</p>,
      dataIndex: "dataProduct",
      key: "name",
      render: (dataProduct) => (
        <span className={styleContentTable}>{dataProduct?.name}</span>
      ),
    },
    {
      title: <p className={styleTitleTable}>Date</p>,
      dataIndex: "addedAt", // Sửa lại để lấy đúng giá trị ngày tháng
      key: "addedAt",
      render: (addedAt) => {
        const date = new Date(addedAt).toLocaleDateString("vi-VN");
        return <span className={styleContentTable}>{date}</span>;
      },
    },
    {
      title: <p className={styleTitleTable}>Price</p>,
      dataIndex: "dataProduct",
      key: "price",
      render: (dataProduct) => (
        <span className={styleContentTable}>$ {dataProduct?.price}</span>
      ),
    },
    {
      title: <p className={styleTitleTable}>Status</p>,
      dataIndex: "dataProduct",
      key: "status",
      render: (dataProduct) => {
        return dataProduct?.stock === "" || dataProduct?.stock == 0 ? (
          <span className={`${styleContentTable} !text-error opacity-80`}>
            Out of stock
          </span>
        ) : (
          <span className={`${styleContentTable} !text-main`}>In stock</span>
        );
      },
    },
    {
      title: <p className={styleTitleTable}>Actions</p>,
      key: "actions",
      dataIndex: "productId",
      render: (productId) => (
        <div className="flex gap-x-1">
          <div className="w-[30px] h-[30px] rounded-[5px] flex items-center justify-center bg-main hover:bg-slate-gray transition-all duration-300 cursor-pointer">
            <ShoppingBasketIcon size={16} color="#fff" />
          </div>
          <div
            onClick={() => handleDeletedWishList(productId)}
            className="w-[30px] h-[30px] rounded-[5px] flex items-center justify-center bg-slate-gray hover:bg-main transition-all duration-300 cursor-pointer"
          >
            <X size={16} color="#fff" />
          </div>
        </div>
      ),
    },
  ];

  // nhấn xoá wishlist
  const handleDeletedWishList = async (id) => {
    if (!userId) {
      showToast("Vui lòng đăng nhập", "error");
      return;
    }

    try {
      await dispatch(
        removeProductWishListAPI({ userId, productId: id })
      ).unwrap();

      // Chỉ gọi API nếu product thực sự bị xoá
      const newWishList = wishList.filter((item) => item.id !== id);
      if (newWishList.length !== wishList.length) {
        dispatch(handleGetAllWishListAPI());
      }
    } catch (error) {
      console.log("Lỗi xử lý wishlist:", error);
    }
  };

  const handleProductDetail = useHandleProductDetail();

  return (
    <div className="section-wish-list">
      <div className="wrap-content container mx-auto">
        <Breadcrumb titleBreadcrumb={"Wishlist"} />
        <div className="wrap-wish-list py-10">
          <div className="wrap-title-wish-list text-center max-w-[400px] pb-10 m-auto">
            <h2 className="title-wish-list text-[26px] leading-[38px] font-semibold text-slate-gray font-poppins">
              Product <span className="text-hight-light">Wishlist</span>
            </h2>
            <p className="mt-[15px] text-[14px] text-gray leading-[23px">
              Your product wish is our first priority.
            </p>
          </div>
          {/* Bảng danh sách wishlist  */}
          <div className="table-wishlist  mb-10">
            <div className="wrap-content border border-light-gray rounded-[5px]">
              <div className="wrap-title-table p-[30px] flex justify-between items-center border-b border-b-light-gray">
                <h5 className="text-[18px] uppercase font-bold font-poppins text-gray">
                  WISH LIST
                </h5>
                <Button classNameInput="px-[15px] !py-[10px] font-medium font-poppins text-[14px]">
                  Shop now
                </Button>
              </div>
              <div className="wrap-table p-[30px]">
                <Table
                  columns={columns}
                  dataSource={listAllWishList}
                  pagination={false}
                />
              </div>
            </div>
          </div>
          {/* Sản phẩm mới về */}
          <div className="wrap-list-product-new-arrivals">
            <div className="wrap-content py-10">
              <div className="wrap-product-new-arrivals text-center max-w-[400px] pb-10 m-auto">
                <h2 className="product-new-arrivals text-[26px] leading-[38px] font-semibold text-slate-gray font-poppins">
                  Product <span className="text-hight-light">NewArrivals</span>
                </h2>
                <p className="mt-[15px] text-[14px] text-gray leading-[23px">
                  Browse The Collection of Top Products
                </p>
              </div>
            </div>
            <Swiper spaceBetween={24} slidesPerView={5} loop={false}>
              {(listProduct || []) // Đảm bảo không lỗi nếu allProduct là undefined

                .map((product) => (
                  <SwiperSlide
                    key={product.id}
                    onClick={() => {
                      handleProductDetail(product);
                    }}
                  >
                    <ItemProduct product={product} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
