import { DataProductTabs } from "./DataProductTabs";
import { useState } from "react";
import TabDetail from "./productTabs/TabDetail";
import TabSpecifications from "./productTabs/TabSpecifications";
import TabReviews from "./productTabs/TabReviews";
import TabVendor from "./productTabs/TabVendor";

const ProductTabs = () => {
  const [activeTabs, setActiveTabs] = useState("Detail");

  // Danh sách các tab
  const allTabs = ["Detail", "Specifications", "Vendor", "Reviews"];

  return (
    <div>
      {/* Thanh menu tabs */}
      <div className="wrap-tabs flex gap-x-[5px] mb-4">
        {allTabs.map((item, index) => (
          <button
            className={`border border-light-gray leading-[24px] py-2 px-7 text-[15px] font-medium cursor-pointer rounded-[5px] transition-all duration-500 ${
              activeTabs === item
                ? "!bg-main text-white"
                : "bg-white text-slate-gray"
            }`}
            key={index}
            onClick={() => setActiveTabs(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Hiển thị nội dung tương ứng */}
      <div className="tab-content border border-light-gray bg-white rounded-[5px] p-[30px] leading-[1.6]">
        {activeTabs === "Detail" && (
          <TabDetail dataDetail={DataProductTabs.detail} />
        )}
        {activeTabs === "Specifications" && (
          <TabSpecifications
            dataSpecification={DataProductTabs.specifications}
          />
        )}
        {activeTabs === "Vendor" && (
          <TabVendor dataVendor={DataProductTabs.vendor} />
        )}
        {activeTabs === "Reviews" && (
          <TabReviews dataReviews={DataProductTabs.reviews} />
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
