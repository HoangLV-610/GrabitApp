import Rating from "../../components/ui/rating/Rating";

const ItemYouMayLike = (props) => {
  const { name, rating, old_price, price, image_main } = props.product;
  return (
    <div className="p-[15px] border border-light-gray bg-light-gray rounded-[5px] flex my-10 group/item relative cursor-pointer">
      <div className="wrap-image mr-[15px] max-w-[75px]">
        <img
          src={image_main}
          alt={name}
          className="w-full object-cover aspect-[75/65] border border-[#e1e1e1] rounded-[5px] overflow-hidden"
        />
      </div>
      <div className="wrap-des">
        <h4 className="text-gray text-[13px] leading-[20px] font-medium tracking-[.85px] mb-2 line-clamp-1">
          {name}
        </h4>
        <Rating rating={rating} size={14} color="#f27d0c" />
        <div className="wrap-price text-[#212529] text-[15px] tracking-[.02rem] leading-[24px] mt-[5px]">
          ${price}
          <span className="text-gray text-[14px] ml-[5px] line-through">
            ${old_price}
          </span>
        </div>
      </div>
      <div className="btn-add py-[5px] px-[10px] text-[14px] font-medium bg-main text-white rounded-[5px] opacity-0 hover:bg-slate-gray group-hover/item:opacity-100 transition-all duration-500 absolute top-[5px] right-[5px]">
        +
      </div>
    </div>
  );
};

export default ItemYouMayLike;
