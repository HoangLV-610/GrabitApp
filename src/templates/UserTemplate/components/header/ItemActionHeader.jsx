import React from "react";
import { useNavigate } from "react-router-dom";

const ItemActionHeader = (props) => {
  const { icon, title, subTitle, content, to, wishList, typeButton } =
    props.action;
  const navigate = useNavigate();

  const handleButton = () => {
    navigate(to, { state: wishList });
  };
  return (
    <button
      onClick={typeButton == "wishlist" ? handleButton : null}
      className="relative group "
    >
      {/* Wrapper chính */}
      <div className="icon flex items-center space-x-2 cursor-pointer">
        {React.cloneElement(icon, {
          className:
            "text-gray group-hover:text-main transition-colors duration-300",
          size: 24,
        })}
        <div className="des flex flex-col">
          <span className="text-xs text-gray font-medium group-hover:text-main transition-colors duration-300">
            {title}
          </span>
          <span className="text-sm text-[#4b5966] font-medium">{subTitle}</span>
        </div>
      </div>
      {content && (
        <div className="mt-[10px] absolute pointer-events-none left-0 top-full z-10 opacity-0 group-hover:mt-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 bg-white shadow-lg rounded-[5px] py-[10px] min-w-[150px] border border-light-gray">
          {content}
        </div>
      )}
    </button>
  );
};

export default ItemActionHeader;
