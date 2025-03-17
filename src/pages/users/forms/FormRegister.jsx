import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/button/Button";
import { pathRoute } from "../../../routes/path";
import { useFormik } from "formik";

import { registerValidationSchema } from "../../../utils/validation/validationSchema";
import { registerUser } from "../../../services/AuthService";
import InputForm from "../../../components/ui/input/InputForm";

const FormRegister = () => {
  const navigate = useNavigate();

  const { values, handleSubmit, handleChange, handleBlur, errors, touched } =
    useFormik({
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
      onSubmit={handleSubmit}
      className="form-register flex-1 h-auto rounded-[5px] border border-light-gray p-[30px] grid grid-cols-12 gap-x-4 gap-y-6"
    >
      {/* First Name & Last Name */}
      <InputForm
        className="mb-[9px] col-span-6"
        lables={"First Name*"}
        placeholder={"Enter your first name"}
        name={"firstName"}
        value={values.firstName}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.firstName}
        touched={touched.firstName}
      />

      <InputForm
        className="mb-[9px] col-span-6"
        lables={"Last Name*"}
        placeholder={"Enter your last name"}
        name={"lastName"}
        value={values.lastName}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.lastName}
        touched={touched.lastName}
      />

      <InputForm
        className="mb-[9px] col-span-6"
        lables={"Email*"}
        placeholder={"Enter your email add..."}
        name={"email"}
        value={values.email}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.email}
        touched={touched.email}
      />

      <InputForm
        className="mb-[9px] col-span-6"
        lables={"Phone Number*"}
        placeholder={"Enter your phone number"}
        name={"phone"}
        value={values.phone}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.phone}
        touched={touched.phone}
      />

      <InputForm
        className="mb-[9px] col-span-6"
        lables={"Password*"}
        placeholder={"Enter your password"}
        name={"password"}
        value={values.password}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.password}
        touched={touched.password}
        typeInput="password"
      />

      <InputForm
        className="mb-[9px] col-span-6"
        lables={"Confirm Password**"}
        placeholder={"Enter your Confirm password"}
        name={"confirmPassword"}
        value={values.confirmPassword}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.confirmPassword}
        touched={touched.confirmPassword}
        typeInput="password"
      />

      <InputForm
        className="mb-[9px] col-span-12"
        lables={"Address"}
        placeholder={"Address Line 1"}
        name={"address"}
        value={values.address}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.address}
        touched={touched.address}
      />

      <InputForm
        className="mb-[9px] col-span-6"
        lables={"Country *"}
        name={"country"}
        value={values.country}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.country}
        touched={touched.country}
        type="select"
        options={[
          {
            key: "",
            value: "Country",
          },

          {
            key: "us",
            value: "United States",
          },
          {
            key: "uk",
            value: "United Kingdom",
          },
          {
            key: "vn",
            value: "Việt Nam",
          },
        ]}
      />

      <InputForm
        className="mb-[9px] col-span-6"
        lables={"Region State"}
        name={"regionState"}
        value={values.regionState}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.regionState}
        touched={touched.regionState}
        type="select"
        options={[
          {
            key: "",
            value: "Region/State",
          },

          {
            key: "california",
            value: "California",
          },
          {
            key: "newyork",
            value: "New York",
          },
        ]}
      />

      <InputForm
        className="mb-[9px] col-span-6"
        lables={" City *"}
        name={"city"}
        value={values.city}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.city}
        touched={touched.city}
        type="select"
        options={[
          {
            key: "",
            value: "City",
          },

          {
            key: "ny",
            value: "New York",
          },
          {
            key: "la",
            value: "Los Angeles",
          },
        ]}
      />

      <InputForm
        className="mb-[9px] col-span-6"
        lables={"Post Code"}
        placeholder={"Post Code"}
        name={"postCode"}
        value={values.postCode}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.postCode}
        touched={touched.postCode}
      />

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
