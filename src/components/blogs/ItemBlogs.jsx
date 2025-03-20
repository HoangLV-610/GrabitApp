import { ChevronsRight } from "lucide-react";

const ItemBlogs = ({ blog, showDescription = false }) => {
  const { date, title, image } = blog;

  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry";

  return (
    <div className="group/blog cursor-pointer">
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
        {showDescription && (
          <p className="text-[14px] text-gray leading-[28px] font-light tracking-[.02rem] mb-4">
            {description}
          </p>
        )}
      </div>
      <button className="flex items-center text-[13px] justify-center text-slate-gray hover:text-main transition-colors duration-300">
        <span>Read More</span>
        <ChevronsRight size={13} className="ml-[5px]" />
      </button>
    </div>
  );
};

export default ItemBlogs;
