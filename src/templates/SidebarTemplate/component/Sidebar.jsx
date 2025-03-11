import { CategoryContext } from "../../../context/CategoriesContext";
import { useContext, useState } from "react";

import { ProductContext } from "../../../context/ProductContext";
import TitleSidebar from "./titleSidebar/TitleSidebar";
import DropdownSidebar from "./dropdownSidebar/DropdownSidebar";

const Sidebar = () => {
  const listProducts = useContext(ProductContext);
  const { categories } = useContext(CategoryContext);
  const [openDropdownCategory, setOpenDropdownCategory] = useState(true);
  const [openDropdownWeight, setOpenDropdownWeight] = useState(false);

  // lấy ra tất cả weight của sản phẩm
  const allWeight = [
    ...new Set(
      listProducts
        .map((item) => item.quantity)
        .filter(
          (quantity) =>
            quantity !== null && quantity !== undefined && quantity !== ""
        )
    ),
  ];

  return (
    <div className="wrap-content p-[25px] rounded-[5px] border border-light-gray bg-lightblue font-normal">
      {/* Item Category */}
      <div className="category-block mb-[15px]">
        {/* Header */}
        <TitleSidebar
          title="Category"
          isOpen={openDropdownCategory}
          toggleOpen={() => setOpenDropdownCategory(!openDropdownCategory)}
        />
        {/* Dropdown */}
        <DropdownSidebar
          isOpen={openDropdownCategory}
          items={categories}
          type="category"
        />
      </div>

      {/* Item Weight */}
      <div className="category-block mb-[15px]">
        <TitleSidebar
          title="Weight"
          isOpen={openDropdownWeight}
          toggleOpen={() => setOpenDropdownWeight(!openDropdownWeight)}
        />

        {/* Dropdown */}
        <DropdownSidebar isOpen={openDropdownWeight} items={allWeight} />
      </div>
    </div>
  );
};

export default Sidebar;
