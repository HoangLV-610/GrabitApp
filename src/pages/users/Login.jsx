import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { pathRoute } from "../../routes/path";
import FormLogin from "./forms/FormLogin";
import imageForm from "../../assets/image/image-form.png";
import { useLocation } from "react-router-dom";
import FormRegister from "./forms/FormRegister";

const Login = () => {
  const location = useLocation();
  const { type } = location.state || {};
  const data =
    type === "register"
      ? {
          titleBreadcrumb: "Register Page",
          itemBreadcrumb: "Register Page",
          titlePage: "Register",
          subTitle: "Best place to buy and sell digital products.",
          type: "register",
        }
      : {
          titleBreadcrumb: "Login Page",
          itemBreadcrumb: "Login Page",
          titlePage: "Login",
          subTitle: "Welcome back! Please login to continue.",
          type: "login",
        };

  const { titleBreadcrumb, itemBreadcrumb, titlePage, subTitle } = data;

  return (
    <div className="container mx-auto">
      <Breadcrumb
        titleBreadcrumb={titleBreadcrumb}
        itemBreadcrumb={itemBreadcrumb}
        link={pathRoute.homePage}
      />
      <div className="wrap-form-login py-10">
        <div className="wrap-content flex justify-center items-center flex-col">
          <div className="wrap-title text-center max-w-[390px]">
            <div className="title-form">
              <h2 className="text-[26px] text-slate-gray font-semibold">
                {titlePage}
              </h2>
            </div>
            <span className="sub-title-form inline-block mt-[15px] text-gray leading-[23px] font-light tracking-[0.02rem]">
              {subTitle}
            </span>
          </div>

          <div
            className={`wrap-form w-full mx-auto flex gap-[24px] pt-10 items-start ${
              type == "login" ? "max-w-[1000px]" : "max-w-[934px]"
            }`}
          >
            {type === "login" ? (
              <>
                <FormLogin />
                <div className="image flex-1 rounded-[5px] overflow-hidden">
                  <img src={imageForm} alt="" className="w-full" />
                </div>
              </>
            ) : (
              <FormRegister />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
