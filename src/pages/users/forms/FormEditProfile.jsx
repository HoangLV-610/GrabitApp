import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { editProfileValidationSchema } from "../../../utils/validation/validationSchema";
import Button from "../../../components/ui/button/Button";
import { updateMyProfile } from "../../../services/AuthService";
import { pathRoute } from "../../../routes/path";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../../utils/toast";
import InputForm from "../../../components/ui/input/InputForm";

const FormEditProfile = () => {
  const navigate = useNavigate();
  const { firstName, lastName, email, phone, address } = useSelector(
    (state) => state.userSlice.user
  );

  const dispatch = useDispatch();

  const { values, handleSubmit, handleChange, handleBlur, touched, errors } =
    useFormik({
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
      onSubmit={handleSubmit}
      className="form-register flex-1 h-auto rounded-[5px] border border-light-gray p-[30px] grid grid-cols-12 gap-x-4 gap-y-6"
    >
      <InputForm
        className="mb-[9px] col-span-6"
        placeholder={"Enter your first name"}
        lables={"First Name*"}
        name={"firstName"}
        value={values.firstName}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched.firstName}
        errors={errors.emafirstNameil}
      />

      <InputForm
        className="mb-[9px] col-span-6"
        placeholder={"Enter your last name"}
        lables={"Last Name*"}
        name={"lastName"}
        value={values.lastName}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched.lastName}
        errors={errors.emalastNameil}
      />

      <InputForm
        className={"mb-[9px] col-span-6"}
        classNameInput={"cursor-not-allowed"}
        placeholder={"Enter your email add..."}
        lables={"Email*"}
        name={"email"}
        value={values.email}
        touched={touched.email}
        errors={errors.email}
      />
      <InputForm
        className={"mb-[9px] col-span-6"}
        classNameInput={"cursor-not-allowed"}
        placeholder={"Enter your phone number"}
        lables={"Phone Number*"}
        name={"phone"}
        value={values.phone}
        touched={touched.phone}
        errors={errors.phone}
      />

      <InputForm
        className={"mb-[9px] col-span-12"}
        placeholder={"Address Line 1"}
        lables={"Address"}
        name={"address"}
        value={values.address}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched.address}
        errors={errors.address}
      />
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
