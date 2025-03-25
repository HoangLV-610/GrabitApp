import {
  BadgeEuroIcon,
  ChevronDown,
  Croissant,
  CupSoda,
  Headset,
  Heart,
  Map,
  MapPinPlus,
  Menu,
  PhoneCall,
  Popcorn,
  Salad,
  ShoppingCart,
  User,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../../../../public/logo.png";
import ItemActionHeader from "./ItemActionHeader";
import ButtonDropDown from "../../../../components/ui/button/ButtonDropDown";
import Input from "../../../../components/ui/input/Input";
import { pathRoute } from "../../../../routes/path";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../../redux/slice/user.slice";
import { showToast } from "../../../../utils/toast";

// DATA DROPDOWN
const listContent = [
  "New York",
  "Los Angles",
  "Chicago",
  "Houston",
  "Phoenix",
  "San Diego",
];
const categories = [
  { name: "Dairy & Bakery", icon: <Croissant />, key: "dairy_bakery" },
  {
    name: "Fruits & Vegetable",
    icon: <Salad />,
    key: "fruits_vegetable",
  },
  { name: "Snack & Spice", icon: <Popcorn />, key: "snack_spice" },
  { name: "Juice & Drinks", icon: <CupSoda />, key: "juice_drinks" },
];
const products = {
  dairy_bakery: [
    { title: "Dairy", items: ["Milk", "Cheese", "Butter", "Yogurt"] },
    { title: "Bakery", items: ["Cake", "Bread", "Buns", "Pastry"] },
  ],
  fruits_vegetable: [
    { title: "Fruits", items: ["Apple", "Banana", "Orange", "Mango"] },
    {
      title: "Vegetable",
      items: ["Carrot", "Potato", "Tomato", "Broccoli"],
    },
  ],
  snack_spice: [
    { title: "Snacks", items: ["Chips", "Cookies", "Popcorn", "Crackers"] },
    { title: "Spices", items: ["Pepper", "Salt", "Cinnamon", "Turmeric"] },
  ],
  juice_drinks: [
    {
      title: "Juices",
      items: ["Orange Juice", "Apple Juice", "Mango Juice"],
    },
    { title: "Drinks", items: ["Soda", "Coffee", "Tea"] },
  ],
};

// Content Action
const contentAction = (user, handleLogout) => {
  return (
    <ul>
      {(user
        ? [
            { title: "My Profile", link: pathRoute.myProfile },
            { title: "Orders" },
            {
              title: "Logout",
              onClick: handleLogout,
              link: pathRoute.homePage,
            },
          ]
        : [
            {
              title: "Register",
              link: pathRoute.login,
              state: { type: "register" },
            },
            { title: "Checkout", link: pathRoute.checkout },
            { title: "Login", link: pathRoute.login, state: { type: "login" } },
          ]
      ).map((item, index) => (
        <li key={index} className="px-5 py-[10px] text-[13px] w-full">
          <Link
            className="text-gray hover:text-main"
            to={item.link}
            state={item.state}
            onClick={item.onClick ? () => item.onClick() : undefined}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

// Item menu
const menuItems = [
  { title: "Home", link: pathRoute.homePage },
  { title: "Categories", link: pathRoute.categoryPage },
  // { title: "Product", icon: ChevronDown, link: pathRoute.productPage },
  { title: "Blogs", link: pathRoute.blogsPage },
  {
    title: "Pages",
    icon: ChevronDown,
    content: [
      {
        titlePage: "About Us",
        link: pathRoute.aboutUsPage,
      },
      {
        titlePage: "Contact Us",
        // link: pathRoute.aboutUsPage,
      },
      {
        titlePage: "Cart",
        // link: pathRoute.aboutUsPage,
      },
      {
        titlePage: "Checkout",
        // link: pathRoute.aboutUsPage,
      },
      {
        titlePage: "Compare",
        // link: pathRoute.aboutUsPage,
      },
    ],
  },
  { title: "Offers", icon: BadgeEuroIcon, type: "left", size: 20 },
];

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice.user);

  const handleLogout = () => {
    showToast("Bạn đã đăng xuất", "success");
    dispatch(logoutUser());
  };
  // Data Action Header
  const listActionsHeader = [
    {
      icon: <User size={24} />,
      title: "Account",
      subTitle: user ? "LOGOUT" : "LOGIN",
      content: contentAction(user, handleLogout),
    },
    {
      icon: <Heart size={24} />,
      title: "Wishlist",
      subTitle: "3-ITEMS",
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "Cart",
      subTitle: "3-ITEMS",
    },
  ];

  const navigate = useNavigate();
  const [selectLocation, setSelectLocation] = useState(listContent[0]);
  const defaultCategory = "dairy_bakery"; // Key mặc định
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  // Nội dung của Location
  const contentLocation = () => {
    return (
      <div className="pop z-10 bg-white rounded-[5px] w-full max-w-[200px] absolute top-full left-0 p-[15px] shadow-md opacity-0 invisible mt-[15px] transition-all duration-300 group-hover:mt-[5px] group-hover:opacity-100 group-hover:visible">
        <ul>
          {listContent.map((content, index) => {
            return (
              <li
                key={index + content}
                className="flex items-center justify-start border border-[#EEEEEE] p-[10px] mb-[10px] rounded-[5px] group/item hover:border-main transition-colors duration-300"
                onClick={() => setSelectLocation(content)}
              >
                <MapPinPlus
                  size={14}
                  className="text-[#777] group-hover/item:text-main transition-colors duration-300"
                />
                <span className="text-slate-gray leading-[0.02rem] text-[13px] ml-[10px]">
                  {content}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  // Nội dung của nút All Category
  const contentCategories = () => {
    return (
      <div className="absolute w-auto mt-[15px] z-10 top-full bg-white left-0 min-w-[600px] p-[15px] rounded-[5px] shadow-md border-[#eee] flex opacity-0 invisible transition-all duration-300 group-hover:mt-[5px] group-hover:opacity-100 group-hover:visible pointer-events-auto">
        <div className="categories w-full max-w-[230px] bg-[#f8f8fb] rounded-[5px] p-[15px] mr-[16px]">
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                className={`w-full px-[15px] py-[10px] mb-[10px] bg-white font-medium  border border-[#eee] text-[13px] text-gray text-left rounded-[5px] flex items-center transition duration-300${
                  selectedCategory == category.key ? "border border-main" : ""
                }`}
                onClick={() => setSelectedCategory(category.key)}
              >
                {React.cloneElement(category.icon, {
                  size: 18,
                  className: `icons mr-[10px] transition duration-300 ${
                    selectedCategory == category.key ? "text-main" : ""
                  }`,
                })}
                <span
                  className={`transition duration-300 ${
                    selectedCategory == category.key ? "text-main" : ""
                  }`}
                >
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
        <div className="products flex w-full space-x-[24px]">
          {/* Hiển thị danh sách sản phẩm tương ứng */}
          {products[selectedCategory] &&
            products[selectedCategory].map((group, index) => {
              return (
                <div className="col flex-1" key={index}>
                  <h6 className="text-main text-[15px] leading-[30px] border-b border-b-[#eee] mb-[10px] pb-[5px]">
                    {group.title}
                  </h6>
                  <ul className="text-gray leading-[28px] font-normal text-[13px] py-[5px]">
                    {group.items.map((item, index) => {
                      return (
                        <li key={index} className=" py-[5px]">
                          <a
                            href="#"
                            className="text-gray leading-[28px] font-normal text-[13px] hover:text-main transition duration-300"
                          >
                            {item}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    );
  };

  // trở về trang home
  const handleReturnHomePage = () => {
    console.log("Navigating to:", pathRoute.homePage);
    navigate(pathRoute.homePage);
  };

  return (
    <div className="header" id="header">
      <div className="wrap-header">
        <div className="header-top p-3 flex-wrap bg-lightblue">
          <div className="container mx-auto">
            <div className="flex align-middle justify-between text-sm text-gray">
              <div className="col text-left header-top-left d-lg-block">
                <ul className="flex space-x-4 text-sm">
                  <li className="flex space-x-2 group items-center cursor-pointer">
                    <PhoneCall
                      width={16}
                      fill="transparent"
                      stroke="#777"
                      className="mr-1 group-hover:stroke-main"
                    />
                    +91 987 654 3210
                  </li>
                  <li className="flex space-x-2 group items-center cursor-pointer">
                    <Headset
                      width={16}
                      fill="transparent"
                      stroke="#777"
                      className="mr-1 group-hover:stroke-main"
                    />
                    +91 987 654 3210
                  </li>
                </ul>
              </div>
              <div>World`s Fastest Online Shopping Destination</div>
              <div>
                <ul className="flex space-x-4">
                  <li className="group hover:text-main cursor-pointer">
                    <a href="#">Help?</a>
                  </li>
                  <li className="group hover:text-main cursor-pointer">
                    <a href="#">Track Order?</a>
                  </li>
                  <li className="group hover:text-main cursor-pointer">
                    <a href="#">English?</a>
                  </li>
                  <li className="group hover:text-main cursor-pointer">
                    <a href="#">Dollar?</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-buttom mx-auto container flex justify-between py-6">
          <img
            onClick={handleReturnHomePage}
            src={logo}
            alt="Logo Grabit"
            className="w-full h-full max-h-12 max-w-36 bg-cover cursor-pointer"
          />
          <Input
            placeholder="Search Products"
            classNameInput="text-gray"
            mw="max-w-[640px]"
          />
          <div className="action-header flex space-x-5">
            {listActionsHeader.map((action, index) => {
              return <ItemActionHeader key={index} action={action} />;
            })}
          </div>
        </div>

        <div className="header-cart w-full py-[5px] border-b border-light-gray border-t">
          <div className="container mx-auto flex justify-between items-center">
            <ButtonDropDown
              content={contentCategories()}
              icon={<Menu size={20} />}
            >
              All Categories
            </ButtonDropDown>
            <nav className="nav-menu min-h-[50px] flex">
              <ul className="flex space-x-[50px] items-center">
                {menuItems.map((item, index) => {
                  return (
                    <div className="group h-full" key={index}>
                      <li className="flex items-center gap-1 relative h-full text-slate-gray">
                        {item.type === "left" && item.icon && (
                          <item.icon
                            className="group-hover:text-main transition duration-300"
                            size={item.size && item.size}
                          />
                        )}
                        <Link
                          to={item.link && item.link}
                          className="leading-none text-[15px] font-medium group-hover:text-main transition duration-300 "
                        >
                          {item.title}
                        </Link>
                        {item.type !== "left" && item.icon && (
                          <item.icon
                            className="group-hover:text-main transition duration-300"
                            size={item.size ? item.size : 18}
                          />
                        )}
                        {item.content && (
                          <ul className="absolute w-auto mt-[15px] z-10 top-full bg-white left-0 min-w-[205px] rounded-[5px] shadow-md border-[#eee] flex flex-col opacity-0 invisible transition-all duration-300 group-hover:mt-[6px] group-hover:opacity-100 group-hover:visible pointer-events-auto">
                            {item.content.map((item, index) => {
                              return (
                                <li
                                  key={index}
                                  className="sub-menu leading-[20px] px-5 py-[10px] font-normal text-[13px] text-gray transition-all duration-300 hover:text-main"
                                >
                                  <Link to={item.link && item.link}>
                                    {item.titlePage}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </nav>
            <ButtonDropDown
              content={contentLocation()}
              icon={<Map size={20} />}
            >
              {selectLocation}
            </ButtonDropDown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
