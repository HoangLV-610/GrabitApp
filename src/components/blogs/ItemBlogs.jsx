import { ChevronsRight } from "lucide-react";

const ItemBlogs = (props) => {
  const { date, title, image } = props.blog;
  return (
    <div className="group/blog">
      <div className="image w-full rounded-[5px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full aspect-[238/179] cover group-hover/blog:rotate-[-3deg] group-hover/blog:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="content">
        <label className="mt-[20px] block text-[13px] text-[#999] hover:text-main">
          {date}
        </label>
        <h4 className="!text-[17px] mt-[10px] mb-[15px] leading-[26px] font-medium  !text-slate-gray line-clamp-2">
          {title}
        </h4>
      </div>
      <button className="flex items-center text-[13px] justify-center text-slate-gray hover:text-main transition-colors duration-300">
        <span>Read More</span>
        <ChevronsRight size={13} className="ml-[5px]" />
      </button>
    </div>
  );
};

export default ItemBlogs;
