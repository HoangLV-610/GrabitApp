import { Pencil } from "lucide-react";
import { useSelector } from "react-redux";

import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import "./user.module.scss";
import noImage from "../../assets/image/image-profile.jpg";
import { useNavigate } from "react-router-dom";
import { pathRoute } from "../../routes/path";

const MyProfile = () => {
  const navigate = useNavigate();
  const menuItems = [
    { name: "User Profile" },
    { name: "User History" },
    { name: "Cart" },
    { name: "Checkout" },
    { name: "Track Order" },
    { name: "Invoice" },
  ];

  // lấy thông tin user
  const user = useSelector((state) => state.userSlice.user);

  return (
    <div className="wrap-my-profile">
      <div className="wrap-content container mx-auto">
        <Breadcrumb titleBreadcrumb="Profile" />
        <div className="wrap-content-profile grid grid-cols-12 gap-x-[24px]">
          <div className="sidebar-profile col-span-3 h-max border border-light-gray rounded-[5px] py-[15px] px-[30px] bg-lightblue sticky top-[30px] ">
            <ul className="text-slate-gray flex flex-col">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="pt-[13px] pb-[13px] border-b border-b-light-gray last:border-b-0 text-gray text-[15px] cursor-pointer"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="content-profile col-span-9">
            <div className="wrap-content">
              <div className="bg-profile">
                <div className="wrap-bg relative">
                  <div className="wrap-btn-edit absolute top-[15px] right-[15px]">
                    <button
                      onClick={() =>
                        navigate(pathRoute.login, {
                          state: { type: "eidt-profile" },
                        })
                      }
                      className="flex items-center cursor-pointer gap-x-1 bg-white px-[10px] py-[5px] rounded-[5px] text-[16px]"
                    >
                      <span>Edit</span>
                      <Pencil size={16} />
                    </button>
                  </div>
                  <div className="detail absolute bottom-0 left-[30px] flex">
                    <img
                      src={user.image ? user.image : noImage}
                      alt="avatar"
                      className="w-full aspect-square max-w-[150px] rounded-t-[5px]"
                    />

                    <div className="name max-w-[500px] mx-[30px] text-white text-[20px] flex items-end font-bold mb-[15px]">
                      {user.firstName} {user.lastName}
                    </div>
                  </div>
                </div>
              </div>
              <div className="info-profile">
                <div className="wrap-content border border-light-gray rounded-[5px] p-[30px]">
                  <div className="title-info">
                    <h5 className="font-bold text-[20px] text-slate-gray mb-[15px]">
                      Account Information
                    </h5>
                  </div>
                  <div className="detail-info grid grid-cols-12 gap-x-[24px]">
                    <div className="col-span-6 flex flex-col gap-x-[24px] mb-[24px]">
                      <h6 className="mb-[15px] py-[15px] pb-[15px] font-bold text-slate-gray border-b border-b-light-gray text-[16px]">
                        E-mail address
                      </h6>
                      <span className="text-[14px] py-[5px] text-gray font-light font-poppins">
                        <strong className="font-semibold">Email 1 : </strong>
                        {user.email ? user.email : "Chưa có thông tin"}
                      </span>
                    </div>
                    <div className="col-span-6 flex flex-col gap-x-[24px] mb-[24px]">
                      <h6 className="mb-[15px] py-[15px] pb-[15px] font-bold text-slate-gray border-b border-b-light-gray text-[16px]">
                        Contact nubmer
                      </h6>
                      <span className="text-[14px] py-[5px] text-gray font-light font-poppins">
                        <strong className="font-semibold">
                          Phone Nubmer :{" "}
                        </strong>
                        {user.phone ? user.phone : "Chưa có thông tin"}
                      </span>
                    </div>

                    <div className="col-span-12 flex flex-col mb-[24px]">
                      <h6 className="mb-[15px] py-[15px] pb-[15px] font-bold text-slate-gray border-b border-b-light-gray text-[16px]">
                        Address
                      </h6>
                      <span className="text-[14px] py-[5px] text-gray font-light font-poppins">
                        <strong className="font-semibold">Home : </strong>
                        {user.address ? user.address : "Chưa có thông tin"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
