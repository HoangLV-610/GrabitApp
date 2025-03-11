import Sidebar from "../../templates/SidebarTemplate/component/Sidebar";
import { Outlet } from "react-router-dom";

const ProductComponent = () => {
  return (
    <div className="container grid grid-cols-12 mx-auto gap-x-[24px]">
      <div className="sidebar-container col-span-3">
        <Sidebar />
      </div>
      <div className="content-container col-span-9">
        <Outlet />
      </div>
    </div>
  );
};

export default ProductComponent;
