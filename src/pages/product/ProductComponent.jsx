import React from "react";

const ProductComponent = () => {
  return (
    <div className="container grid grid-cols-12 mx-auto gap-x-[24px]">
      <div className="sidebar-container col-span-3">
        <Sildebar />
      </div>
      <div className="content-container col-span-9">
        <Outlet />
      </div>
    </div>
  );
};

export default ProductComponent;
