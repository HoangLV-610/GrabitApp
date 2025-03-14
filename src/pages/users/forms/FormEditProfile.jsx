import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { editProfileValidationSchema } from "../../../utils/validation/validationSchema";
import Button from "../../../components/ui/button/Button";
import { updateMyProfile } from "../../../services/AuthService";
import { pathRoute } from "../../../routes/path";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../../utils/toast";

const FormEditProfile = () => {
  const navigate = useNavigate();
  const { firstName, lastName, email, phone, address } = useSelector(
    (state) => state.userSlice.user
  );

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      address: address,
    },
    validationSchema: editProfileValidationSchema,
    onSubmit: async (values) => {
      const result = await updateMyProfile(dispatch, values);
      if (result) {
        showToast("Thay đổi thông tin thành công", "success");
        navigate(pathRoute.myProfile);
      } else {
        showToast("Thay đổi thông tin thất bại", "error");
        navigate(pathRoute.myProfile);
      }
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
          className={`px-[15px] bg-transparent border border-light-gray text-gray text-[14px] outline-none leading-[25px] min-h-[50px] w-full rounded-[5px] focus:ring-4 focus:ring-blue-500/25 cursor-not-allowed`}
          type="email"
          placeholder="Enter your email add..."
          name="email"
          value={formik.values.email}
        />
      </div>
      <div className="col-span-6">
        <label className="block text-slate-gray text-[15px] font-medium mb-[9px]">
          Phone Number*
        </label>
        <input
          className={`px-[15px] bg-transparent border border-light-gray text-gray text-[14px] outline-none leading-[25px] min-h-[50px] w-full rounded-[5px] focus:ring-4 focus:ring-blue-500/25 cursor-not-allowed`}
          type="text"
          placeholder="Enter your phone number"
          name="phone"
          value={formik.values.phone}
        />
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

      {/* Register Button */}
      <div className="col-span-12 flex justify-end items-center">
        <Button buttonType="buttonIcon" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
};

export default FormEditProfile;
