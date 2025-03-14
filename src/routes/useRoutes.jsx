import UserTemplate from "../templates/UserTemplate/UserTemplate";
import SidebarTemplate from "../templates/SidebarTemplate/SidebarTemplate";

import { useRoutes } from "react-router";
import { pathRoute } from "./path";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Product from "../pages/Product";
import Blogs from "../pages/Blogs";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/users/Login";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import FormRegister from "../pages/users/forms/FormRegister";
import ProductDetail from "../pages/product/ProductDetail";
import MyProfile from "../pages/users/MyProfile";

import FormEditProfile from "../pages/users/forms/FormEditProfile";

const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: pathRoute.homePage,
      element: <UserTemplate />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: pathRoute.aboutUsPage,
          element: <AboutUs />,
        },
        {
          path: pathRoute.productPage,
          element: <Product />,
        },
        {
          path: pathRoute.blogsPage,
          element: <Blogs />,
        },
        {
          path: pathRoute.contactPage,
          element: <ContactUs />,
        },
        {
          path: pathRoute.login,
          element: <Login />,
        },
        {
          path: pathRoute.register,
          element: <FormRegister />,
        },
        {
          path: pathRoute.myProfile,
          element: <MyProfile />,
        },
        {
          path: pathRoute.editProfile,
          element: <FormEditProfile />,
        },
      ],
    },
    {
      path: pathRoute.productDetail,
      element: <SidebarTemplate />,
      children: [
        {
          index: true,
          element: <ProductDetail />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return routes;
};

export default useRoutesCustom;
