import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/button/Button";
import { pathRoute } from "../../../routes/path";
import { useFormik } from "formik";

import { registerValidationSchema } from "../../../utils/validation/validationSchema";
import { registerUser } from "../../../services/AuthService";

const FormRegister = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      address: "",
      regionState: "",
      city: "",
      postCode: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      registerUser(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="form-register flex-1 h-auto rounded-[5px] border border-light-gray p-[30px] grid grid-cols-12 gap-x-4 gap-y-6"
    >
      {/* First Name & Last Name */}
      <div className="col-span-6">
        <label className="block text-slate-gray text-[15px] font-medium mb-[9px]">
          First Name*
        </label>
        <input
          className={`px-[15px] bg-transparent border border-light-gray text-gray text-[14px] outline-none leading-[25px] min-h-[50px] w-full rounded-[5px] focus:ring-4 focus:ring-blue-500/25  ${
            formik.touched.email && formik.errors.email
              ? "border-error focus:ring-0 focus:ring-error"
              : "border-light-gray focus:ring-4 focus:ring-blue-500/25"
          }`}
          type="text"
          placeholder="Enter your first name"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <p className="text-error mt-2 text-sm">{formik.errors.firstName}</p>
        )}
      </div>
      <div className="col-span-6">
        <label className="block text-slate-gray text-[15px] font-medium mb-[9px]">
          Last Name*
        </label>
        <input
          className={`px-[15px] bg-transparent border border-light-gray text-gray text-[14px] outline-none leading-[25px] min-h-[50px] w-full rounded-[5px] focus:ring-4 focus:ring-blue-500/25  ${
            formik.touched.lastName && formik.errors.lastName
              ? "border-error focus:ring-0 focus:ring-error"
              : "border-light-gray focus:ring-4 focus:ring-blue-500/25"
          }`}
          type="text"
          placeholder="Enter your last name"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <p className="text-error mt-2 text-sm">{formik.errors.lastName}</p>
        )}
      </div>

      {/* Email & Phone Number */}
      <div className="col-span-6">
        <label className="block text-slate-gray text-[15px] font-medium mb-[9px]">
          Email*
        </label>
        <input
          className={`px-[15px] bg-transparent border border-light-gray text-gray text-[14px] outline-none leading-[25px] min-h-[50px] w-full rounded-[5px] focus:ring-4 focus:ring-blue-500/25  ${
            formik.touched.email && formik.errors.email
              ? "border-error focus:ring-0 focus:ring-error"
              : "border-light-gray focus:ring-4 focus:ring-blue-500/25"
          }`}
          type="email"
          placeholder="Enter your email add..."
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-error mt-2 text-sm">{formik.errors.email}</p>
        )}
      </div>
      <div className="col-span-6">
        <label className="block text-slate-gray text-[15px] font-medium mb-[9px]">
          Phone Number*
        </label>
        <input
          className={`px-[15px] bg-transparent border border-light-gray text-gray text-[14px] outline-none leading-[25px] min-h-[50px] w-full rounded-[5px] focus:ring-4 focus:ring-blue-500/25  ${
            formik.touched.phone && formik.errors.phone
              ? "border-error focus:ring-0 focus:ring-error"
              : "border-light-gray focus:ring-4 focus:ring-blue-500/25"
          }`}
          type="text"
          placeholder="Enter your phone number"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phone && formik.errors.phone && (
          <p className="text-error mt-2 text-sm">{formik.errors.phone}</p>
        )}
      </div>

      {/* Password & Confirm Password */}
      <div className="col-span-6">
        <label className="block text-slate-gray text-[15px] font-medium mb-[9px]">
          Password*
        </label>
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
      <div className="col-span-6">
        <label className="block text-slate-gray text-[15px] font-medium mb-[9px]">
          Confirm Password*
        </label>
        <input
          className={`px-[15px] bg-transparent border border-light-gray text-gray text-[14px] outline-none leading-[25px] min-h-[50px] w-full rounded-[5px] focus:ring-4 focus:ring-blue-500/25  ${
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? "border-error focus:ring-0 focus:ring-error"
              : "border-light-gray focus:ring-4 focus:ring-blue-500/25"
          }`}
          type="password"
          placeholder="Enter your Confirm password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <p className="text-error mt-2 text-sm">
            {formik.errors.confirmPassword}
          </p>
        )}
      </div>

      {/* Address */}
      <div className="col-span-12">
        <label className="block text-slate-gray text-[15px] font-medium mb-[9px]">
          Address
        </label>
        <input
          className={`px-[15px] bg-transparent border border-light-gray text-gray text-[14px] outline-none leading-[25px] min-h-[50px] w-full rounded-[5px] focus:ring-4 focus:ring-blue-500/25  ${
            formik.touched.address && formik.errors.address
              ? "border-error focus:ring-0 focus:ring-error"
              : "border-light-gray focus:ring-4 focus:ring-blue-500/25"
          }`}
          type="text"
          placeholder="Address Line 1"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.address && formik.errors.address && (
          <p className="text-error mt-2 text-sm">{formik.errors.address}</p>
        )}
      </div>

      {/* Country & Region State */}
      <div className="col-span-6">
        <label className="block text-slate-gray text-[15px] font-medium mb-[9px]">
          Country *
        </label>
        <select
          className={`px-[15px] bg-transparent border border-light-gray text-gray text-[14px] outline-none leading-[25px] min-h-[50px] w-full rounded-[5px] focus:ring-4 focus:ring-blue-500/25  ${
            formik.touched.country && formik.errors.country
              ? "border-error focus:ring-0 focus:ring-error"
              : "border-light-gray focus:ring-4 focus:ring-blue-500/25"
          }`}
          name="country"
          value={formik.values.country}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="">Country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
        </select>
        {formik.touched.country && formik.errors.country && (
          <p className="text-error mt-2 text-sm">{formik.errors.country}</p>
        )}
      </div>
      <div className="col-span-6">
        <label className="block text-slate-gray text-[15px] font-medium mb-[9px] focus:ring-4 focus:ring-blue-500/25">
          Region State
        </label>
        <select
          name="regionState"
          value={formik.values.regionState}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="px-[15px] bg-transparent border border-light-gray text-gray text-[14px] outline-none leading-[25px] min-h-[50px] w-full rounded-[5px]"
        >
          <option value="">Region/State</option>
          <option value="california">California</option>
          <option value="newyork">New York</option>
        </select>
      </div>

      {/* City & Post Code */}
      <div className="col-span-6">
        <label className="block text-slate-gray text-[15px] font-medium mb-[9px]">
          City *
        </label>
        <select
          className={`px-[15px] bg-transparent border border-light-gray text-gray text-[14px] outline-none leading-[25px] min-h-[50px] w-full rounded-[5px] focus:ring-4 focus:ring-blue-500/25  ${
            formik.touched.city && formik.errors.city
              ? "border-error focus:ring-0 focus:ring-error"
              : "border-light-gray focus:ring-4 focus:ring-blue-500/25"
          }`}
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="">City</option>
          <option value="nyc">New York</option>
          <option value="la">Los Angeles</option>
        </select>
        {formik.touched.city && formik.errors.city && (
          <p className="text-error mt-2 text-sm">{formik.errors.city}</p>
        )}
      </div>
      <div className="col-span-6">
        <label className="block text-slate-gray text-[15px] font-medium mb-[9px]">
          Post Code
        </label>
        <input
          className={`px-[15px] bg-transparent border border-light-gray text-gray text-[14px] outline-none leading-[25px] min-h-[50px] w-full rounded-[5px] focus:ring-4 focus:ring-blue-500/25  ${
            formik.touched.postCode && formik.errors.postCode
              ? "border-error focus:ring-0 focus:ring-error"
              : "border-light-gray focus:ring-4 focus:ring-blue-500/25"
          }`}
          type="text"
          placeholder="Post Code"
          name="postCode"
          value={formik.values.postCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>

      {/* Register Button */}
      <div className="col-span-12 flex justify-between items-center">
        <span className="text-gray text-[15px]">
          Already have an account?
          <span
            onClick={() =>
              navigate(pathRoute.login, {
                state: { type: "login" },
              })
            }
            className="text-slate-gray text-[14px] cursor-pointer hover:text-main ml-[10px]"
          >
            Login
          </span>
        </span>
        <Button buttonType="buttonIcon" type="submit">
          Register
        </Button>
      </div>
    </form>
  );
};

export default FormRegister;
