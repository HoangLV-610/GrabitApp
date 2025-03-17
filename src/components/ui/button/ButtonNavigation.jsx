import { ChevronLeft, ChevronRight } from "lucide-react";

const ButtonNavigation = ({
  handleClick,
  ref,
  pageCurrent,
  content,
  typeIcon,
  classNameCustom,
}) => {
  return (
    <button
      onClick={handleClick}
      ref={ref}
      disabled={pageCurrent === 1}
      className={`btn-prev w-auto px-[10px] text-white bg-main leading-[30px] rounded-[5px] cursor-pointer flex items-center mt-[1px] ${classNameCustom}`}
    >
      {typeIcon === "left" && pageCurrent > 1 && (
        <ChevronLeft size={14} className="mr-[6px] mt-[1px]" />
      )}
      {content}
      {typeIcon === "right" && pageCurrent > 1 && (
        <ChevronRight size={14} className="ml-[6px] mt-[1px]" />
      )}
    </button>
  );
};

export default ButtonNavigation;
