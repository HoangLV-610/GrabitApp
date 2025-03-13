import { Layout } from "antd";
import Header from "../UserTemplate/components/header/Header";
import Footer from "../UserTemplate/components/footer/Footer";
import { Outlet } from "react-router-dom";
import Sildebar from "./component/Sidebar";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import RelatedProduct from "../../components/product/RelatedProduct";

const UserTemplate = () => {
  return (
    <Layout>
      <Header />
      <Layout>
        <div className="wrap-product-component container mx-auto">
          <Breadcrumb
            titleBreadcrumb="Product Page"
            itemBreadcrumb="Product Page"
          />
          <div className="container grid grid-cols-12 mx-auto gap-x-[24px] mb-10">
            <div className="sidebar-container col-span-3">
              <Sildebar />
            </div>
            <div className="content-container col-span-9">
              <Outlet />
            </div>
          </div>
          <div className="related-product py-10 mt-[2px]">
            <RelatedProduct />
          </div>
        </div>
      </Layout>
      <Footer />
    </Layout>
  );
};
export default UserTemplate;
