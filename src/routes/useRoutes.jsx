import { lazy, Suspense } from "react";
import { useRoutes } from "react-router";
import { pathRoute } from "./path";

import UserTemplate from "../templates/UserTemplate/UserTemplate";
import SidebarTemplate from "../templates/SidebarTemplate/SidebarTemplate";

import Home from "../pages/Home";
import Product from "../pages/Product";
import Login from "../pages/users/Login";
import Category from "../pages/Category";
import Loading from "../components/loading/Loading";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import WishList from "../pages/WishList";

// Sử dụng lazy loading cho các component
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Blogs = lazy(() => import("../pages/Blogs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const FormRegister = lazy(() => import("../pages/users/forms/FormRegister"));
const ProductDetail = lazy(() => import("../pages/product/ProductDetail"));
const MyProfile = lazy(() => import("../pages/users/MyProfile"));
const FormEditProfile = lazy(() =>
  import("../pages/users/forms/FormEditProfile")
);

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
          element: (
            <Suspense fallback={<Loading />}>
              <AboutUs />
            </Suspense>
          ),
        },
        {
          path: pathRoute.categoryPage,
          element: <Category />,
        },
        {
          path: pathRoute.productPage,
          element: <Product />,
        },
        {
          path: pathRoute.blogsPage,
          element: (
            <Suspense fallback={<Loading />}>
              <Blogs />,
            </Suspense>
          ),
        },
        {
          path: pathRoute.contactPage,
          element: (
            <Suspense fallback={<Loading />}>
              <ContactUs />
            </Suspense>
          ),
        },
        {
          path: pathRoute.login,
          element: (
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: pathRoute.register,
          element: (
            <Suspense fallback={<Loading />}>
              <FormRegister />
            </Suspense>
          ),
        },
        {
          path: pathRoute.myProfile,
          element: (
            <Suspense fallback={<Loading />}>
              <MyProfile />
            </Suspense>
          ),
        },
        {
          path: pathRoute.editProfile,
          element: (
            <Suspense fallback={<Loading />}>
              <FormEditProfile />
            </Suspense>
          ),
        },
        {
          path: pathRoute.wishListPage,
          element: (
            <Suspense fallback={<Loading />}>
              <WishList />
            </Suspense>
          ),
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
