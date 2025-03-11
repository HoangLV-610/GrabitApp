import { ShoppingBasketIcon } from "lucide-react";

const ItemTopProduct = (props) => {
  const { name, nameCategory, price, old_price, image_main } = props.product;
  return (
    <div className="flex items-center p-[15px] bg-white border border-light-gray rounded-[5px] group">
      <div className="image">
        <img
          src={image_main}
          alt={name}
          className="aspect-[800/700] cover max-w-[70px]"
        />
      </div>
      <div className="content flex-1 ml-[15px]">
        <h5 className="text-gray text-[14px] leading-[24px] font-medium tracking-[.2px] line-clamp-1 mb-[5px] hover:text-main cursor-pointer">
          {name}
        </h5>
        <h6 className="text-[#999999] text-[13px] leading-[24px] font-normal tracking-[.3px] mb-[5px]">
          {nameCategory}
        </h6>

        <div className="price flex items-center">
          <span className="text-[#4B5966] font-bold text-[14px]">
            ${price.toFixed(2)}
          </span>
          <span className="text-gray font-normal text-[12px] line-through ml-[9px]">
            ${old_price.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="group/icon icons w-[30px] h-[30px] flex absolute bottom-[10px] right-[10px] bg-white border border-light-gray rounded-[5px] items-center justify-center cursor-pointer group opacity-0 transition-opacity group-hover:opacity-100 duration-700">
        <ShoppingBasketIcon
          strokeWidth={1}
          size={16}
          className="text-gray group-hover/icon:text-main transition duration-300"
        />
      </div>
    </div>
  );
};

export default ItemTopProduct;
