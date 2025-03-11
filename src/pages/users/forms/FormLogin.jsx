import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/ui/button/Button";

import FacebookIcon from "../../../components/icons/FacebookIcon";
import GmailIcon from "../../../components/icons/GmailIcon";

import { pathRoute } from "../../../routes/path";
import {
  handleFacebookLogin,
  handleGoogleLogin,
  loginUser,
} from "../../../services/AuthService";
import { useFormik } from "formik";
import { loginValidationSchema } from "../../../utils/validation/validationSchema";
import { showToast } from "../../../utils/toast";

const FormLogin = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    // nhấn nút đăng nhập
    onSubmit: async (values) => {
      const user = await loginUser(values.email, values.password);

      if (user) {
        showToast("Đăng nhập thành công!", "success");
        navigate(pathRoute.homePage);
      } else {
        showToast("Email hoặc mật khẩu không đúng!", "error");
        console.error("Không tìm thấy thông tin user");
      }
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="form flex-1 h-auto rounded-[5px] border border-light-gray p-[30px]"
    >
      <span className="login-wrap inline-block w-full mb-6">
        <label
          className="mb-[10px] leading-[1] text-slate-gray text-[15px] font-medium inline-block"
          htmlFor=""
        >
          Email Address*
        </label>

        <div className="wrap-input">
          <input
            className={`px-[15px] bg-transparent border text-gray text-[14px] 
              outline-none leading-[25px] min-h-[50px] w-full rounded-[5px] 
              focus:ring-4 focus:ring-blue-500/25
              ${
                formik.touched.email && formik.errors.email
                  ? "border-error focus:ring-0 focus:ring-error"
                  : "border-light-gray focus:ring-4 focus:ring-blue-500/25"
              }`}
            placeholder="Enter your email..."
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-error mt-2 text-sm">{formik.errors.email}</p>
          )}
        </div>
      </span>
      <span className="login-wrap inline-block w-full">
        <label
          className="mb-[10px] leading-[1] text-slate-gray text-[15px] font-medium inline-block"
          htmlFor=""
        >
          Password*
        </label>
        <div className="wrap-input">
          <input
            className={`px-[15px] bg-transparent border border-light-gray text-gray text-[14px] outline-none leading-[25px] min-h-[50px] w-full rounded-[5px] focus:ring-4 focus:ring-blue-500/25  ${
              formik.touched.password && formik.errors.password
                ? "border-error focus:ring-0 focus:ring-error"
                : "border-light-gray focus:ring-4 focus:ring-blue-500/25"
            }`}
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-error mt-2 text-sm">{formik.errors.password}</p>
          )}
        </div>
      </span>
      <span className="login-wrap inline-block w-full forget-password text-end">
        <label
          className="leading-[1] mt-[10px] text-gray text-[14px] font-medium text-end inline-block cursor-pointer hover:text-main"
          htmlFor=""
        >
          <Link>ForgetPassword?</Link>
        </label>
      </span>
      <span className="login-wrap flex justify-between items-center w-full login-btn mt-[30px]">
        <span
          onClick={() =>
            navigate(pathRoute.login, {
              state: {
                type: "register",
              },
            })
          }
          className="text-slate-gray text-[14px] cursor-pointer hover:text-main"
        >
          Create Account?
        </span>
        <Button buttonType="buttonIcon" type="submit">
          Login
        </Button>
      </span>
      <span className="wrap-actions-login flex gap-6 mt-6">
        <button
          type="button"
          onClick={handleFacebookLogin}
          className="text-[12px] text-white py-3 px-[30px] min-w-[220px] font-medium flex gap-1 items-center justify-center bg-[#3d5c98] rounded-[5px] opacity-90 transition duration-300 hover:opacity-100"
        >
          <span className="logo w-[20px] h-auto">
            <FacebookIcon width={16} height="auto" fill="white" />
          </span>
          Sign In With Facebook
        </button>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="text-[12px] text-[#000000e0] py-3 px-[30px] min-w-[220px] font-medium flex gap-1 items-center justify-center bg-transparent rounded-[5px] border border-light-gray 0 transition duration-300 hover:shadow-lg"
        >
          <span className="logo w-[20px] h-auto">
            <GmailIcon width={18} height="auto" fill="white" />
          </span>
          Sign In With Google
        </button>
      </span>
    </form>
  );
};

export default FormLogin;
