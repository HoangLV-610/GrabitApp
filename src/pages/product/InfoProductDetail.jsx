import { useState } from "react";
import Rating from "../../components/ui/rating/Rating";
import { Eye, Heart } from "lucide-react";

const InfoProductDetail = ({ product }) => {
  const [quantityProduct, setQuantityProduct] = useState(1);
  const { description, name, old_price, price, quantity, rating } = product;

  // phần trăm giảm giá
  const discountPercent = (((old_price - price) / old_price) * 100).toFixed(0);
  return (
    <div className="wrap-content-info block flex-1 max-w-[52.7%]">
      <h4 className="title-product text-slate-gray text-[22px] mb-5 font-medium leading-[35px] tracking-[.2rem] line-clamp-2 h-[70px]">
        {name}
      </h4>
      <div className="wrap-rating flex justify-start items-center gap-x-[15px] leading-[20px] text-[#999] text-[14px] mb-[14px]">
        <Rating rating={rating} size={14} color="#f27d0c" /> |
        <span>992 Ratings</span>
      </div>
      <div className="wrap-price mb-[15px] text-slate-gray font-semibold leading-[32px] text-[20px]">
        <div className="final-price text-[22px] font-semibold">
          $ {price.toFixed(2)}
          <span className="discountPercent inline-block ml-[15px] text-main font-medium text-[18px]">
            -{discountPercent}%
          </span>
        </div>
        <div className="old-price text-gray text-[16px] font-normal">
          M.R.P. :{" "}
          <span className="text-[#999] tracking-[.02rem] line-through">
            $ {old_price.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="wrap-des mb-[12px] text-gray text-[14px] leading-[26px] font-poppins">
        {description}
      </div>
      <div className="wrap-single-list">
        <ul className="mb-[30px] pl-[18px]">
          <li className="text-[14px] list-disc my-[10px] text-gray">
            <strong>Closure :</strong> Hook &amp; Loop
          </li>
          <li className="text-[14px] list-disc my-[10px] text-gray">
            <strong>Sole :</strong> Polyvinyl Chloride
          </li>
          <li className="text-[14px] list-disc my-[10px] text-gray">
            <strong>Width :</strong> Medium
          </li>
          <li className="text-[14px] list-disc my-[10px] text-gray">
            <strong>Outer Material :</strong> A-Grade Standard Quality
          </li>
        </ul>
      </div>
      {quantity && quantity !== "" && (
        <div className="wrap-weight">
          <h4 className="mb-[10px] text-[#202020] font-medium text-[15px] leading-[1.1] tracking-[.04rem]">
            WEIGHT
          </h4>
          <span className="bg-main text-white border border-main rounded-[5px] py-[2px] px-[10px] cursor-pointer items-center text-[12px] leading-[22px] ">
            {quantity}
          </span>
        </div>
      )}
      <div className="wrap-actions flex items-center space-x-4 mt-4">
        {/* Nút tăng giảm số lượng */}
        <div className="flex items-center border border-light-gray rounded-[5px] px-2 h-[40px] max-w-[120px] text-[15px] font-medium text-slate-gray">
          <button
            className="px-3 py-1 cursor-pointer text-gray-600 hover:text-black"
            onClick={() => setQuantityProduct((prev) => Math.max(1, prev - 1))}
          >
            -
          </button>
          <input
            readOnly
            type="text"
            value={quantityProduct}
            name="gi-qtybtn"
            className="w-10 text-center border-none outline-none bg-transparent"
          />
          <button
            className="px-3 py-1 cursor-pointer text-gray-600 hover:text-black"
            onClick={() => setQuantityProduct((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        {/* Nút Add To Cart */}

        <button className="btn h-[40px] leading-[50px] text-center text-[14px] mx-[10px] px-[15px] py-[5px] bg-slate-gray items-center min-w-[160px] tracking-[.02rem] text-white flex justify-center rounded-[5px] uppercase font-semibold hover:bg-main transition-colors duration-500">
          Add To Cart
        </button>
        {/* Wishlist */}
        <div className="button-heart h-[40px] w-[40px] flex items-center justify-center border border-light-gray rounded-[5px] text-gray hover:bg-main hover:text-white transition-all duration-500">
          <Heart size={16} />
        </div>
        {/* Quick View */}
        <div className="button-heart h-[40px] w-[40px] flex items-center justify-center border border-light-gray rounded-[5px] text-gray hover:bg-main hover:text-white transition-all duration-500">
          <Eye size={16} />
        </div>
      </div>
    </div>
  );
};

export default InfoProductDetail;
