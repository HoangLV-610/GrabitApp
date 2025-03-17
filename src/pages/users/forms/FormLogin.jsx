import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/ui/button/Button";

import FacebookIcon from "../../../components/icons/FacebookIcon";
import GmailIcon from "../../../components/icons/GmailIcon";

import { pathRoute } from "../../../routes/path";
import {
  getUser,
  handleFacebookLogin,
  handleGoogleLogin,
  loginUser,
} from "../../../services/AuthService";
import { useFormik } from "formik";
import { loginValidationSchema } from "../../../utils/validation/validationSchema";
import { showToast } from "../../../utils/toast";
import { loginSuccess } from "../../../redux/slice/user.slice";
import { useDispatch } from "react-redux";
import InputForm from "../../../components/ui/input/InputForm";

const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { values, handleSubmit, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginValidationSchema,
      onSubmit: async (values) => {
        const user = await loginUser(values.email, values.password);

        if (user) {
          showToast("Đăng nhập thành công!", "success");
          // gọi hàm lấy thông tin
          getInfoUser(user.uid);
          // chuyển sang trang home
          navigate(pathRoute.homePage);
        } else {
          showToast("Email hoặc mật khẩu không đúng!", "error");
          console.error("Không tìm thấy thông tin user");
        }
      },
    });

  // hàm lấy thông tin của user khi đăng nhập thành công
  const getInfoUser = async (id) => {
    try {
      const infoUser = await getUser(id);
      if (infoUser) {
        // lưu thông tin vào redux
        dispatch(loginSuccess(infoUser));
      }
    } catch (error) {
      console.log("Lấy thông tin thất bại", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form flex-1 h-auto rounded-[5px] border border-light-gray p-[30px]"
    >
      <InputForm
        placeholder={"Enter your email add..."}
        lables={"Email Address*"}
        name={"email"}
        value={values.email}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched.email}
        errors={errors.email}
      />
      <InputForm
        placeholder={"Enter your password"}
        lables={"Password*"}
        name={"password"}
        value={values.password}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched.password}
        errors={errors.password}
        typeInput={"password"}
      />
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
