import React from "react";
import TickIcon from "../../../../components/icons/TickIcon";
import {
  Citrus,
  Croissant,
  CupSoda,
  Egg,
  Fish,
  Leaf,
  Milk,
  Popcorn,
} from "lucide-react";

const ICONS_MAP = {
  Citrus: <Citrus />,
  Croissant: <Croissant />,
  Leaf: <Leaf />,
  Milk: <Milk />,
  Popcorn: <Popcorn />,
  CupSoda: <CupSoda />,
  Fish: <Fish />,
  Egg: <Egg />,
};

const ItemSidebar = (props) => {
  const { item, type } = props;

  const iconComponent =
    type === "category" && ICONS_MAP[item.icon]
      ? React.cloneElement(ICONS_MAP[item.icon], {
          size: 18,
          className: "text-gray stroke-[2]",
        })
      : null; // Nếu không có icon, tránh lỗi undefined
  return (
    <li className="flex items-center gap-3 py-[15px]">
      {/* Checkbox */}
      <label className="flex items-center cursor-pointer space-x-2">
        <input type="checkbox" className="peer hidden" />
        <div className="w-[16px] h-[16px] border border-light-gray rounded-[5px] flex items-center justify-center peer-checked:bg-main peer-checked:border-main bg-white">
          <TickIcon
            width={12}
            height={12}
            fill="white"
            className="opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
          />
        </div>
      </label>

      {/* Icon + Title */}
      <div className="item flex items-center justify-start gap-2">
        {iconComponent}
        <span className="text-gray text-[14px] leading-5 font-normal font-poppins">
          {type == "category" ? item.title : item}
        </span>
      </div>
    </li>
  );
};

export default ItemSidebar;
