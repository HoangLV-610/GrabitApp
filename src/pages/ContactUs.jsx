import { useFormik } from "formik";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import InputForm from "../components/ui/input/InputForm";
import GoggleMaps from "./GoggleMaps";
import ItemContact from "./ItemContact";

const ContactUs = () => {
  const { values, handleChange, handleBlur, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        fullName: "",
        email: "",
        phone: "",
        message: "",
      },
    });
  return (
    <div className="section-contact-us">
      <div className="wrap-content container mx-auto">
        <Breadcrumb titleBreadcrumb={"Contact Us"} />
        <div className="wrap-contact-us">
          <div className="title-contact text-center max-w-[400px] pb-10 m-auto">
            <h2 className="title-contact text-[26px] leading-[38px] font-semibold text-slate-gray font-poppins">
              Get in <span className="text-hight-light">Touch</span>
            </h2>
            <p className="mt-[15px] text-[14px] text-gray leading-[23px">
              Please select a topic below related to you inquiry. If you don t
              fint what you need, fill out our contact form.
            </p>
          </div>
          {/* Thông tin liên hệ */}
          <ItemContact />

          {/* GG Maps */}
          <div className="wrap-gg-maps py-10">
            <div className="wrap-content flex gap-x-[24px]">
              <div className="flex-1">
                <GoggleMaps />
              </div>
              <form onSubmit={handleSubmit} className="flex-1">
                <InputForm
                  classNameInput="px-[15px] py-[10px] text-[15px]"
                  placeholder={"Full Name"}
                  name={"fullName"}
                  value={values.fullName}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.fullName}
                  errors={errors.fullName}
                />
                <InputForm
                  classNameInput="px-[15px] py-[10px] text-[15px]"
                  placeholder={"Email"}
                  name={"email"}
                  value={values.email}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.email}
                  errors={errors.email}
                />
                <InputForm
                  classNameInput="px-[15px] py-[10px] text-[15px]"
                  placeholder={"Phone"}
                  name={"phone"}
                  value={values.phone}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.phone}
                  errors={errors.phone}
                />
                <InputForm
                  classNameInput="px-[15px] py-[10px] text-[15px]"
                  placeholder={"Message"}
                  name={"message"}
                  type="textarea"
                  value={values.message}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched.message}
                  errors={errors.message}
                />

                <button
                  type="submit"
                  className="transition-all duration-300 px-[15px] py-[10px] text-center bg-main rounded-[5px] text-white font-medium font-poppins"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
